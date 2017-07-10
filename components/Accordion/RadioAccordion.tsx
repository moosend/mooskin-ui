import * as React from 'react';

import styles from './RadioAccordion.css';

export interface IAccordionProps {

    /** override id */
    id?: string;

    /** container class */
    className?: string;

    /** override styles */
    style?: {[key: string]: string|number};

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
    style?: {[key: string]: string|number};

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

    public static defaultProps = {
        active: 0,
        className: '',
        style: {}
    };

    public static AccordionContent: React.StatelessComponent<IContentProps>;

    private name: string;

    constructor(props: IAccordionProps){
        super(props);

        this.name = this.generateName();

        this.state = {
            active: this.getActiveTab()
        };
    }

    public render() {

        const accordion = this.makeContent();

        return(
            <div className={`accordion-component ${styles.container}`}>
                {accordion}
            </div>
        );
    }

    public onClickHeader = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({active: index});
        };
    }

    private makeContent(){

        const accordion: Array<React.ReactElement<IHeaderProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<IContentProps>(child)){

                const extraProps: Partial<IContentProps & {key: number}> = {
                    active: this.state.active === index,
                    key: index
                };

                accordion.push(
                    <Header
                        key={index}
                        title={child.props.title}
                        active={this.state.active === index}
                        onClick={this.onClickHeader(index)}
                        name={this.name}
                    >
                        {React.cloneElement(child, extraProps)}
                    </Header>
                );

            }else{
                throw new Error('<Accordion> element only accepts Content elements as children');
            }
        });

        return accordion;
    }

    private getActiveTab() {
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<IContentProps>(value) && value.props.active){
                return index;
            }
        }
    }

    private generateName = () => {
        return Date.now().toString();
    }
}

export const AccordionContent: React.StatelessComponent<IContentProps> = (props) => {

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

    const activeRadio = props.active ? styles.activeHeader : styles.inactiveHeader;
    const checkedRadio = !props.active ? '' : styles.checkedRadio;

    return (
        <div className={`accordion-header ${styles.container}`}>
            <div className={`${styles.radio} ${activeRadio} ${checkedRadio}`} onClick={props.onClick}>
                <label>
                    <input
                        type="radio"
                        name={props.name}
                        defaultChecked={props.active}
                    />
                    <span>{props.title}</span>
                </label>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};
