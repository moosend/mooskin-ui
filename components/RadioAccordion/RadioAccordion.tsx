import * as React from 'react';

import styles from './RadioAccordion.css';

export interface IAccordionProps {

    /** override id */
    id?: string;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: Array<React.ReactElement<IContentProps>> | React.ReactElement<IContentProps>;
}

export interface IContentProps {

    /** container class */
    className?: string;

    /** title */
    title: string;

    /** if active */
    active?: boolean;

    /** override styles */
    style?: React.CSSProperties;

    /** onClick event handler when content is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}

export interface IHeaderProps {
    title: string;
    active: boolean;
    name?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IAccordionState {
    active?: number;
}

export default class RadioAccordion extends React.Component<IAccordionProps, IAccordionState>{

    static defaultProps = {
        active: 0,
        className: '',
        style: {}
    };

    static RadioAccordionContent: React.StatelessComponent<IContentProps>;

    static getActiveTab = (children?: Array<React.ReactElement<IContentProps>> | React.ReactElement<IContentProps>) => {
        const childrenArray = React.Children.toArray(children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<IContentProps>(value) && value.props.active){
                return index;
            }
        }
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

    static getDerivedStateFromProps(nextProps: IAccordionProps) {
        const {activeCount, count} = RadioAccordion.activeChildren(nextProps.children);
        if (count === 0){
            return null;
        }
        if (activeCount > 1){
            throw new Error(`There can't be more than one active accordion content`);
        }
        return {active: RadioAccordion.getActiveTab(nextProps.children)};
    }

    name: string;

    constructor(props: IAccordionProps){
        super(props);

        this.name = this.generateName();

        this.state = {
            active: -1
        };
    }

    render() {

        const accordion = this.makeContent();

        return(
            <div className={`accordion-component ${styles.container}`}>
                {accordion}
            </div>
        );
    }

    onClickHeader = (index: number, onClick?: (e: React.MouseEvent<HTMLElement>) => void) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            onClick && onClick(e);
            this.setState({active: index});
        };
    }

    makeContent(){

        const accordion: Array<React.ReactElement<IHeaderProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<IContentProps>(child)){

                const extraProps: Partial<IContentProps & {key: number}> = {
                    active: this.state.active === index,
                    key: index
                };

                const onClick = child.props.onClick ? child.props.onClick : undefined;

                accordion.push(
                    <Header
                        key={index}
                        title={child.props.title}
                        active={this.state.active === index}
                        onClick={this.onClickHeader(index, onClick)}
                        name={this.name}
                    >
                        {React.cloneElement(child, extraProps)}
                    </Header>
                );

            }else{
                throw new Error('<RadioAccordion> element only accepts RadioAccordionContent elements as children');
            }
        });

        return accordion;
    }

    generateName = () => {
        return Date.now().toString();
    }
}

export const RadioAccordionContent: React.StatelessComponent<IContentProps> = (props) => {

    const displayClass = !props.active ? styles.invisible : styles.visible;

    return (
        <div
            className={`accordion-content ${styles.content} ${displayClass}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {

    const generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const activeRadio = props.active ? styles.activeHeader : styles.inactiveHeader;
    const checkedRadio = !props.active ? '' : styles.checkedRadio;
    const genId = generateId();

    return (
        <div className={`accordion-header ${styles.container}`}>
            <div className={`${styles.radio} ${activeRadio} ${checkedRadio}`} onClick={props.onClick}>
                <input
                    id={genId}
                    type="radio"
                    name={props.name}
                    checked={props.active}
                    readOnly
                />
                <label htmlFor={genId} className={styles.labelContainer}>
                    <span>{props.title}</span>
                </label>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

RadioAccordionContent.defaultProps = {
    className: '',
    style: {}
};
