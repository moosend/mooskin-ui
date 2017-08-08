import * as React from 'react';

import styles from './TabbedContent.css';
import radio from './TabbedRadio.css';

export interface ITabbedContentProps {

    /** override id */
    id?: string;

    /** container class */
    className?: string;

    /** radio styled tabbed content */
    radio?: boolean;

    /** vertical tabbedContent view */
    vertical?: boolean;

    /** align headers to the left */
    align?: boolean;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: Array<React.ReactElement<ITabProps>> | React.ReactElement<ITabProps>;
}

export interface ITabProps {

    /** container class */
    className?: string;

    /** title */
    title: string;

    /** image to be displayed in this header */
    image?: string;

    /** if active */
    active?: boolean;

    /** numerical value appearing in the header */
    headerValue?: number;

    /** additional information to be displayed on the header */
    headerInfo?: string;

    /** icon name, for material icons only */
    materialIcon?: string;

    /** class name representing an icon font, for example a font awesome class */
    iconClass?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** callback function when a header is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}

export interface ITabbedContentState {
    activeTab?: number;
}

class TabbedContent extends React.Component<ITabbedContentProps, ITabbedContentState> {

    public static defaultProps = {
        activeTab: 0,
        className: '',
        style: {},
    };

    public static Tab: React.StatelessComponent<ITabProps>;

    constructor(props: ITabbedContentProps){
        super(props);

        this.state = {
            activeTab: this.getActiveTab()
        };
    }

    public render(){

        const style = this.props.radio ? radio : styles;

        const {headers, bodies} = this.makeContent();
        const containerStyles = !this.props.vertical ? style.containerH : style.containerV;
        const headingStyles = !this.props.vertical ? style.headingH : style.headingV;
        const contentStyles = !this.props.vertical ? style.contentH : style.contentV;

        return (
            <div className={`tabbed-content-component ${style.container} ${containerStyles}`}>
                <div className={`${style.heading} ${headingStyles}`}>
                    {headers}
                </div>
                <div className={`${style.content} ${contentStyles}`}>
                    {bodies}
                </div>
            </div>
        );
    }

    public onClickHeader = (tabIndex: number, header: React.ReactElement<ITabProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeTab: tabIndex});
            header.props.onClick && header.props.onClick(e);
        };
    }

    private makeContent(){

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const bodies: Array<React.ReactElement<ITabProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<ITabProps>(child)){

                headers.push(
                    <Header
                        key = {index}
                        title = {child.props.title}
                        active = {this.state.activeTab === index}
                        iconClass = {child.props.iconClass}
                        materialIcon = {child.props.materialIcon}
                        value = {child.props.headerValue}
                        info = {child.props.headerInfo}
                        align = {this.props.align}
                        radio = {this.props.radio}
                        image = {child.props.image}
                        onClick = {this.onClickHeader(index, child)}
                    />
                );

                const extraProps: Partial<ITabProps & {key: number}> = {
                    active: this.state.activeTab === index,
                    key: index
                };

                bodies.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<TabbedContent> element only accepts Tab elements as children');
            }
        });

        return {headers, bodies};
    }

    private getActiveTab(): number {
        let activeTab = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ITabProps>(value) && value.props.active){
                activeTab = index;
            }
        }

        return activeTab;
    }
}

export const Tab: React.StatelessComponent<ITabProps> = (props) => {

    const displayClass = !props.active ? styles.invisible : styles.visible;

    return <div className={`tab-content ${styles.tab} ${displayClass}`} style={props.style}>{props.children}</div>;
};

export interface IHeaderProps {
    title: string;
    active: boolean;
    materialIcon?: string;
    image?: string;
    align?: boolean;
    info?: string;
    value?: number;
    radio?: boolean;
    iconClass?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {

    const style = props.radio ? radio : styles;
    const {active, materialIcon, iconClass, image, info, value} = props;
    const activeTab = active ? style.activeHeader : style.inactiveHeader;
    const align = !props.align ? '' : style.headerAlign;

    const generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const input = props.radio ? (
        <input
            id={generateId()}
            type="radio"
            checked={props.active}
            readOnly
        />
    ) : '';

    const label = !props.radio ?
        (<span className={style.title}>{props.title}</span>) :
        (
            <label htmlFor={generateId()}>
                <span>{props.title}</span>
            </label>
        );

    return (
        <div className={`tab-header ${style.header} ${activeTab} ${align}`} onClick={props.onClick}>
            {input}
            {materialIcon && !props.radio && <i className="header-icon material-icons">{materialIcon}</i>}
            {iconClass && !props.radio && <i className={`header-icon ${iconClass}`}/>}
            {label}
            {image && !props.radio && <img src={image} className={style.image}/>}
            {value && !props.radio && <span className={style.value}>{value}</span>}
            {info && !props.radio && <span className={style.info}>{info}</span>}
        </div>
    );
};

export default TabbedContent;
