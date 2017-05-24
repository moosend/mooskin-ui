import * as React from 'react';

import {IInputCallbackData} from '../../types/commonTypes';

import styles from './Select.css';

export interface ISelectProps {

    /** Callback that fires when you click on an item on the list */
    onChange: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel: string;

    /** to specify which value is selected */
    selected: string;

    /** select box label */
    label?: string;

    /** select box placeholder */
    placeholder?: string;

    /** provide to make the select disabled */
    disabled?: boolean;

    /** override button styles */
    style?: {[key: string]: string};

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<IOptionProps>>;
}

export interface ISelectState {
    list: boolean;
    selected: string;
}

export interface IOptionProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** value for this option */
    value: string;

     /** if it selected or not */
    selected?: boolean;
    children?: string;
}

class Select extends React.Component<ISelectProps, ISelectState>{

    constructor(props: ISelectProps){
        super(props);
        this.state = {
            list: false,
            selected: this.props.selected
        };
    }

    public render(){

        let selected: string = this.props.placeholder || 'Select an option';
        const displayList = this.state.list ? 'block' : 'none';

        // map through the Option children in order to assign them the onClick cb, and determine the selected Option
        const options = React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<IOptionProps>(child)){

                if (this.state.selected === child.props.value && child.props.children) { // determine selected label
                    selected = child.props.children;
                }

                // determine selected option by passing a selected boolean
                const extraProps: Partial<IOptionProps> = {
                    onClick: this.onClick(child.props.value),
                    selected: this.state.selected === child.props.value
                };

                return React.cloneElement(child, extraProps); // return a copy with the new merged props
            }else{
                throw new Error('<Select> element only accepts <Option> elements as children');
            }
        });

        return (
            <div>
                <div className={styles.overlay} style={{display: displayList}} onClick={this.onBlur}/>
                <label className={styles.label}>
                    {this.props.label}
                </label>
                <div className={styles.selectContainer}>
                    <div className={styles.labelContainer} onMouseDown={this.onToggleList}>
                        <div className={styles.innerDiv}> {selected}</div>
                        <div className={styles.selectIcon}/>
                    </div>
                    <div className={styles.optionsContainer} style={{display: displayList}} onBlur={this.onBlur}>
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
            this.props.onChange(e, {value: option, type: this.props.dataLabel});
            this.setState({list: false, selected: option});
        };
    }

    private onToggleList = (e: React.MouseEvent<HTMLElement>) => {
        e.button === 0 && this.setState({list: !this.state.list});
    }

    private onBlur = () => {
        this.setState({list: false});
    }
}

export const Option: React.StatelessComponent<IOptionProps> = (props) => {

    const selectedClass = props.selected ? styles.selectedOption : '';

    return <li onClick={props.onClick} className={selectedClass}>{props.children}</li>;
};

export default Select;
