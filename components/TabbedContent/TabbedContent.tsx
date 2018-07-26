import * as React from 'react';

import alternate from './TabbedAlternate.css';
import normal from './TabbedContent.css';
import radio from './TabbedRadio.css';

export interface ITabbedContentProps {

    /** id of the component */
    id?: string;

    /** type of the tabbed content normal/radio/advanced */
    type?: 'normal' | 'alternate' | 'radio' | 'radioAlternate';

    /** align headers left/center/right */
    alignHeaders?: string;

    /** vertical styles of the tabbed content */
    vertical?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
}

export interface ITabProps {

    /** if active */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: React.ReactElement<IHeaderProps> |
            Array<React.ReactElement<IHeaderProps> | React.ReactElement<IContentProps>>;
}

export interface IHeaderProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** type of tabbed content should reflect on the header (inherited from parent) */
    type?: string;

    /** how headers should be aligned (inherited from parent) */
    align?: string;

    /** wether the headers should be aligned vertically (inherited from parent) */
    vertical?: boolean;

    /** define header width, mostly used with alignHeaders */
    width?: number;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;

    /** callback function when a header is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IContentProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface ITabbedContentState {
    activeTab?: number;
}

export default class TabbedContent extends React.Component<ITabbedContentProps, ITabbedContentState>{

    static defaultProps = {
        activeTab: 0,
        className: '',
        style: {},
        type: 'normal'
    };

    static Tab: React.StatelessComponent<ITabProps>;
    static Header: React.StatelessComponent<IHeaderProps>;
    static Content: React.StatelessComponent<IContentProps>;

    static getActiveTab = (children?: Array<React.ReactElement<IContentProps>> | React.ReactElement<IContentProps>) => {
        let activeTab = 0;
        const childrenArray = React.Children.toArray(children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<IContentProps>(value) && value.props.active){
                activeTab = index;
            }
        }

        return activeTab;
    }

    static activeChildren = (children?: Array<React.ReactElement<IContentProps>> | React.ReactElement<IContentProps>) => {

        const childrenArray = React.Children.toArray(children);

        let count = 0;
        let activeCount = 0;

        childrenArray.forEach((child: React.ReactElement<IContentProps>, i: number) => {
            if (child.props.active !== undefined){
                count = count + 1;
            }
            if (child.props.active === true){
                activeCount = activeCount + 1;
            }
        });
        return {activeCount, count};
    }

    static getDerivedStateFromProps(nextProps: ITabbedContentProps) {
        const {activeCount, count} = TabbedContent.activeChildren(nextProps.children);
        if (count === 0){
            return null;
        }
        if (activeCount > 1){
            throw new Error(`There can't be more than one active tab content`);
        }
        return {activeTab: TabbedContent.getActiveTab(nextProps.children)};
    }

    constructor(props: ITabbedContentProps){
        super(props);

        this.state = {
            activeTab: TabbedContent.getActiveTab(this.props.children)
        };
    }

    render() {

        const style = this.getClasses();

        const containerStyles = !this.props.vertical ? style.containerH : style.containerV;
        const headingStyles = !this.props.vertical ? style.headingH : style.headingV;
        const separator = this.props.type !== 'radioAlternate' ? !this.props.vertical ? style.borderH : style.borderV : '';
        const contentStyles = !this.props.vertical ? style.contentH : style.contentV;

        const verticalAlign = this.props.alignHeaders && this.props.vertical ? style.headingVAlign : '';
        const align = this.getAlign(style);

        const {headers, contents} = this.riteOfRakshir();

        return(
            <div
                id={this.props.id}
                className={`tabbed-content-component ${style.container} ${containerStyles}`}
                style={this.props.style}
            >
                <div className={`${style.heading} ${headingStyles} ${separator} ${align} ${verticalAlign}`}>
                    {headers}
                </div>
                <div className={`${style.content} ${contentStyles}`}>
                    {contents}
                </div>
            </div>
        );
    }

    riteOfRakshir = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const contents: Array<React.ReactElement<ITabProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<ITabProps>(child)){
                const {header, content} = this.assignPropsToChildren(child.props.children, index);

                headers.push(header);

                contents.push(content);
            }

        });

        return {headers, contents};
    }

    assignPropsToChildren = (children: any, index: number) => {

        const headerProps: Partial<IHeaderProps & {key: number}> = {
            active: this.state.activeTab === index,
            align: this.props.alignHeaders,
            key: index,
            onClick: this.onClickHeader(index, children[0]),
            type: this.props.type,
            vertical: this.props.vertical,
        };

        const contentProps: Partial<IContentProps & {key: number}> = {
            active: this.state.activeTab === index,
            key: index
        };

        const header: any = React.cloneElement(children[0], headerProps);
        const content: any = React.cloneElement(children[1], contentProps);

        return {header, content};
    }

    onClickHeader = (tabIndex: number, header: React.ReactElement<IHeaderProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            header.props.onClick && header.props.onClick(e);
            const {count} = TabbedContent.activeChildren(this.props.children);
            if (count === 0){
                this.setState({activeTab: tabIndex});
            }
        };
    }

    // getActiveTab(): number {
    //     let activeTab = 0;
    //     const childrenArray = React.Children.toArray(this.props.children);

    //     for (const [index, value] of childrenArray.entries()){
    //         if (React.isValidElement<ITabProps>(value) && value.props.active){
    //             activeTab = index;
    //         }
    //     }

    //     return activeTab;
    // }

    getClasses = () => {
        switch (this.props.type) {
            case 'normal':

                return normal;

            case 'alternate':

                return alternate;

            case 'radio':

                return radio;

            case 'radioAlternate':

                return radio;

            default:

                return normal;
        }
    }

    getAlign = (style: any) => {
        if (this.props.alignHeaders === 'right' || this.props.alignHeaders === 'bottom'){
            return !this.props.vertical ? style.headingHRight : style.headingVRight;
        } else if (this.props.alignHeaders === 'left' || this.props.alignHeaders === 'top'){
            return '';
        } else {
            return style.headingCenter;
        }
    }
}

export const Tab: React.StatelessComponent<ITabProps> = (props) => {

    return(
        <div className={`tab-component ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

Tab.defaultProps = {
    className: '',
    style: {}
};

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {

    const getClasses = () => {
        switch (props.type) {
            case 'normal':

                return normal;

            case 'alternate':

                return alternate;

            case 'radio':

                return radio;

            case 'radioAlternate':

                return radio;

            default:

                return normal;
        }
    };

    const style = getClasses();

    const activeTab = props.active && props.type !== 'radioAlternate' ? style.activeHeader : style.inactiveHeader;

    const input = props.type === 'radio' || props.type === 'radioAlternate' ? (
        <input
            type="radio"
            checked={props.active}
            readOnly
        />
    ) : '';

    const align = props.align ? style.headerAlign : '';

    const headerStyle = props.type === 'radioAlternate' ? style.headerAlternate : style.header;

    return(
        <div
            className={`tab-header ${headerStyle} ${activeTab} ${align} ${props.className}`}
            style={{width: props.width, ...props.style}}
            onClick={props.onClick}
        >
            {input}
            {props.children}
        </div>
    );
};

Header.defaultProps = {
    className: '',
    style: {}
};

export const Content: React.StatelessComponent<IContentProps> = (props) => {

    const displayClass = !props.active ? normal.invisible : normal.visible;

    return(
        <div className={`content-component ${displayClass} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

Content.defaultProps = {
    className: '',
    style: {}
};
