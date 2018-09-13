import * as React from 'react';

import {arrayHasDupes} from '../_utils/helper';
import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

import styles from './Select.css';

export interface ISelectProps {

    /** Callback that fires when you click on an item on the list */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** to specify which value is selected, has to be one of the option values */
    selected?: string | number;

    /** select box label */
    label?: string;

    /** place label on top of Select */
    labelTop?: boolean;

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

    /** select description (small italic bottom) */
    description?: string;

    /** extra html attributes */
    extraHtmlAttr?: {[key: string]: any};

    /** status of the select, error or success */
    status?: 'error' | 'success';

    /** wether the select is required (used within forms) */
    required?: boolean;

    /** text to be shown when there are no options available */
    emptySelectText?: string;

    /** filter placeholder text */
    filterPlaceholder?: string;

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** override button styles */
    style?: React.CSSProperties;

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<IOptionProps>> | React.ReactElement<IOptionProps> | JSX.Element[];
}

export interface ISelectState {
    list: boolean;
    selected?: string | number;
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

    static defaultProps = {
        className: '',
        filter: ''
    };

    static Option: React.StatelessComponent<IOptionProps>;

    static getDerivedStateFromProps(nextProps: ISelectProps){
        return {selected: nextProps.selected};
    }

    constructor(props: ISelectProps){
        super(props);
        this.state = {
            filter: '',
            list: false,
            selected: this.props.selected,
        };
    }

    render(){

        if (!this.validateChildren()){
            throw new Error('Can not have two options with same values!');
        }

        const description = this.props.description;

        const displayList = this.state.list ? 'block' : 'none';
        const zIndex = this.state.list ? 6 : 0;

        const options = this.assignCbToChildren();

        const selected = this.getSelectedChildLabel();

        const status = this.getStatus();
        const descStatus = this.getDescStatus();

        const labelPos = this.props.labelTop ? styles.column : '';
        const topLabel = this.props.labelTop ? styles.topLabel : '';

        const shouldOpen = this.props.children ? this.onOpenList : undefined;
        const shouldToggle = this.props.children ? this.onToggleList : undefined;

        return (
            <div
                className={`select-component ${styles.componentContainer} ${labelPos} ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.label && <label className={`${styles.label} ${topLabel}`}>{this.props.label}</label>}
                <div
                    onClick={this.onCloseList}
                    className={styles.overlay}
                    style={{display: !this.state.list ? 'none' : 'block'}}
                />
                <div style={{flex: 1}}>
                    <div className={`${styles.selectContainer} ${styles.labelContainer} ${status}`} style={{zIndex}}>
                        <input
                            type="text"
                            className={styles.innerInput}
                            style={{display: this.state.list ? 'block' : 'none'}}
                            value={this.state.filter}
                            placeholder={this.props.filterPlaceholder || 'Type to filter'}
                            onChange={this.onChangeFilter}
                            ref={(input) => (input && this.state.list && input.focus())}
                            onBlur={this.validateOnBlur}
                        />
                        <div
                            onClick={shouldOpen}
                            className={`label-container ${styles.innerDiv}`}
                            style={{display: this.state.list ? 'none' : 'block' }}
                        >
                            {selected}
                        </div>
                        <div className={styles.selectIcon} onClick={shouldToggle}/>
                        <input
                            value={this.state.selected || ''}
                            readOnly
                            style={{display: 'none'}}
                            {...this.props.extraHtmlAttr}
                        />
                        <div
                            className={`options-container ${styles.optionsContainer}`}
                            style={{display: displayList}}
                        >
                            <ul>
                                {options}
                            </ul>
                        </div>
                    </div>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            </div>
        );
    }

    onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({filter: e.target.value});
    }

    onClick = (option: string) => {
        const {dataLabel, required} = this.props;
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value: option, dataLabel});
            if (this.props.status){
                this.props.validate &&
                this.props.validate({value: option, dataLabel, required});
            }
            this.setState({list: false, selected: option, filter: ''});
        };
    }

    onToggleList = (e: React.MouseEvent<HTMLElement>) => {
        this.state.list ? this.onCloseList() : this.onOpenList();
    }

    onOpenList = () => {
        this.setState({list: true});
    }

    onCloseList = () => {
        this.setState({list: false, filter: ''});
    }

    assignCbToChildren(){

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

    getSelectedChildLabel(){
        const selectedChild = React.Children.toArray(this.props.children)
                .find((child: React.ReactElement<IOptionProps>) => {
                    return child.props.value === (this.state.selected && this.state.selected);
                });

        if (this.props.children){
            return selectedChild &&
                    React.isValidElement<IOptionProps>(selectedChild) &&
                    selectedChild.props.children ||
                    this.props.placeholder ||
                    'Select an option';
        }

        return this.props.emptySelectText || 'No options available';

    }

    validateChildren(){
        const values = React.Children.toArray(this.props.children)
            .map((child: React.ReactElement<IOptionProps>) => {
                return child.props.value;
        });

        return !arrayHasDupes(values);
    }

    getStatus = () => {
        const selectStatus = this.props.status && this.props.status;
        if (selectStatus){
            if (selectStatus === 'error'){
                return styles.error;
            } else if (selectStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const selectStatus = this.props.status && this.props.status;
        if (selectStatus){
            if (selectStatus === 'error'){
                return styles.descError;
            } else if (selectStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    validateOnBlur = () => {
        this.props.validate &&
        this.props.validate(
            {value: this.props.selected, dataLabel: this.props.dataLabel, required: this.props.required}
        );
    }
}

export const Option: React.StatelessComponent<IOptionProps> = (props) => {
    return <li onClick={props.onClick}>{props.children}</li>;
};

export default Select;
