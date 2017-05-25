import * as React from 'react';

import {IInputCallbackData} from '../../types/commonTypes';

import styles from './Select.css';

export interface ISelectProps {

    /** Callback that fires when you click on an item on the list */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel: string;

    /** to specify which value is selected, has to be one of the option values */
    selected?: string;

    /** select box label */
    label?: string;

    /** select box placeholder */
    placeholder?: string;

    /** id for the main element */
    id?: string;

    /** className for the main element */
    className?: string;

    /** provide to make the select disabled */
    disabled?: boolean;

    /** override button styles */
    style?: {[key: string]: string};

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<IOptionProps>> | React.ReactElement<IOptionProps>;
}

export interface ISelectState {
    list: boolean;
    selected?: string;
}

export interface IOptionProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** value for this option */
    value: string;

    /** children must be a string */
    children?: string;
}

class Select extends React.Component<ISelectProps, ISelectState>{

    public static defaultProps = {
        className: ''
    };

    constructor(props: ISelectProps){
        super(props);
        this.state = {
            list: false,
            selected: this.props.selected
        };
    }

    public render(){

        const displayList = this.state.list ? 'block' : 'none';
        const zIndex = this.state.list ? 10 : 0;

        const options = this.assignCbToChildren();

        const selected = this.getSelectedChildLabel();

        return (
            <div>
                <div
                    id={this.props.id}
                    className={`select-component ${styles.overlay} ${this.props.className}`}
                    style={{display: displayList}}
                    onClick={this.onBlur}
                />
                <label className={styles.label}>
                    {this.props.label}
                </label>
                <div className={styles.selectContainer} style={{zIndex}}>
                    <div className={`label-container ${styles.labelContainer}`} onMouseDown={this.onToggleList}>
                        <div className={styles.innerDiv}> {selected}</div>
                        <div className={styles.selectIcon}/>
                    </div>
                    <div
                        className={`options-container ${styles.optionsContainer}`}
                        style={{display: displayList}}
                        onBlur={this.onBlur}
                    >
                        <ul>
                            {options}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    private  onClick = (option: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value: option, type: this.props.dataLabel});
            this.setState((prevState, props) => ({list: false, selected: option}));
        };
    }

    private onToggleList = (e: React.MouseEvent<HTMLElement>) => {
        e.button === 0 && this.setState((prevState, props) => ({list: !prevState.list}));
    }

    private onBlur = () => {
        this.setState((prevState, props) => ({list: false}));
    }

    private assignCbToChildren(){

        // map through the Option children in order to assign them the onClick cb
        return React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<IOptionProps>(child)){

                // determine selected option by passing a selected boolean
                const extraProps: Partial<IOptionProps> = {
                    onClick: this.onClick(child.props.value)
                };
                const selectedClass = this.state.selected === child.props.value ? styles.selectedOption : '';
                return <div className={selectedClass}>{React.cloneElement(child, extraProps)}</div>;
            }else{
                throw new Error('<Select> element only accepts <Option> elements as children');
            }
        });
    }

    private getSelectedChildLabel(){
        const selectedChild = React.Children.toArray(this.props.children)
                .find((child: React.ReactElement<IOptionProps>) => {
                    return child.props.value === this.state.selected;
                });

        return selectedChild &&
                React.isValidElement<IOptionProps>(selectedChild) &&
                selectedChild.props.children ||
                this.props.placeholder ||
                'Select an option';
    }

}

export const Option: React.StatelessComponent<IOptionProps> = (props) => {
    return <li onClick={props.onClick}>{props.children}</li>;
};

export default Select;
