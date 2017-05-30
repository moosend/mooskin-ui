import * as React from 'react';

import {arrayHasDupes} from '../_utils/helper';
import {IInputCallbackData} from '../_utils/types/commonTypes';

import styles from './Select.css';

export interface ISelectProps {

    /** Callback that fires when you click on an item on the list */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

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

    /** placeholder shown when no results exist */
    noResultsText?: string;

    /** loading indicator */
    isLoading?: boolean;

    /** override button styles */
    style?: {[key: string]: string};

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<IOptionProps>> | React.ReactElement<IOptionProps>;
}

export interface ISelectState {
    list: boolean;
    selected?: string;
    filter: string;
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
        className: '',
        filter: ''
    };

    constructor(props: ISelectProps){
        super(props);
        this.state = {
            filter: '',
            list: false,
            selected: this.props.selected,
        };
    }

    public render(){

        if (!this.validateChildren()){
            throw new Error('Can not have two options with same values!');
        }

        const displayList = this.state.list ? 'block' : 'none';
        const zIndex = this.state.list ? 10 : 0;

        const options = this.assignCbToChildren();

        const selected = this.getSelectedChildLabel();

        return (
            <div className={`select-component ${this.props.className}`}>
                <label className={styles.label}>
                    {this.props.label}
                </label>
                <div className={styles.selectContainer} style={{zIndex}}>
                    <div className={styles.labelContainer} >
                        <input
                            type="text"
                            className={styles.innerInput}
                            style={{display: this.state.list ? 'block' : 'none'}}
                            value={this.state.filter}
                            placeholder="Type to filter options"
                            onChange={this.onChangeFilter}
                            onBlur={this.onCloseList}
                            ref={(input) => (input && this.state.list && input.focus())}
                        />
                        <div
                            onClick={this.onOpenList}
                            className={`label-container ${styles.innerDiv}`}
                            style={{display: this.state.list ? 'none' : 'block' }}
                        >
                            {selected}
                        </div>
                        <div className={styles.selectIcon} onClick={this.onToggleList}/>
                    </div>
                    <div
                        className={`options-container ${styles.optionsContainer}`}
                        style={{display: displayList}}
                    >
                        <ul>
                            {options}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    private onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({filter: e.target.value});
    }

    private onClick = (option: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value: option, dataLabel: this.props.dataLabel});
            this.setState((prevState, props) => ({list: false, selected: option}));
        };
    }

    private onToggleList = (e: React.MouseEvent<HTMLElement>) => {
        this.state.list ? this.onCloseList() : this.onOpenList();
    }

    private onOpenList = () => {
        this.setState({list: true});
    }

    private onCloseList = () => {
        this.setState({list: false});
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

                // hide options when filtering
                const visible = child.props.children &&
                    this.state.filter &&
                    child.props.children.toLowerCase().includes(this.state.filter.toLowerCase())
                    ? 'block'
                    : 'none';

                return (
                    <div
                        className={selectedClass}
                        style={{display: visible}}
                    >
                        {React.cloneElement(child, extraProps)}
                    </div>
                );
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

    private validateChildren(){
        const values = React.Children.toArray(this.props.children)
            .map((child: React.ReactElement<IOptionProps>) => {
                return child.props.value;
        });

        return !arrayHasDupes(values);
    }
}

export const Option: React.StatelessComponent<IOptionProps> = (props) => {
    return <li onClick={props.onClick}>{props.children}</li>;
};

export default Select;
