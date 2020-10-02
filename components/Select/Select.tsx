import * as React from 'react';

import {arrayHasDupes} from '../_utils/helper';
import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

import spinner from '../../assets/images/loader/spinner.png';
import icons from '../../assets/mooskin-icons/mooskin-icons.css';
import styles from './Select.css';

export interface ISelectProps {

    /** Callback that fires when you click on an item on the list */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    onFilterChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** to specify which value is selected, has to be one of the option values */
    selected?: string | number | Array<string | number>;

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

    /** loading indicator */
    isLoading?: boolean;

    /** select description (small italic bottom) */
    description?: string;

    /** status of the select, error or success */
    status?: 'error' | 'success';

    /** wether the select is required (used within forms) */
    required?: boolean;

    /** text to be shown when there are no options available */
    emptySelectText?: string;

    /** prevent duplicate options to the Select */
    noDuplicates?: boolean;

    /** disables option filtering */
    noFilter?: boolean;

    /** adds alternate styles for select */
    alternate?: boolean;

    /** alternate style colors */
    alternateStyleColor?: boolean;

    /** locks select when a value is selected */
    lockSelected?: boolean;

    allowSelectOnLocked?: boolean;

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** override button styles */
    style?: React.CSSProperties;

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<IOptionProps>> | React.ReactElement<IOptionProps> | JSX.Element[];
}

export interface ISelectState {
    list: boolean;
    // selected?: string | number;
    filter: string;
}

export interface IOptionProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** value for this option */
    value: string;

    /** label to be used when children are of type other than string */
    label?: string;

    /** filters according to this when available (so Option children can be elements) */
    searchLabel?: string;

    /** disables this option */
    disabled?: boolean;

    /** children must be a string */
    children?: string | JSX.Element;
}

class Select extends React.Component<ISelectProps, ISelectState>{

    static defaultProps = {
        className: '',
        filterPlaceholder: ''
    };

    static displayName = 'Select';

    static Option: React.StatelessComponent<IOptionProps>;

    static getDerivedStateFromProps(nextProps: ISelectProps){
        return {selected: nextProps.selected};
    }

    constructor(props: ISelectProps){
        super(props);
        this.state = {
            filter: '',
            list: false,
            // selected: this.props.selected,
        };
    }

    render(){

        if (this.props.noDuplicates && !this.validateChildren()){
            throw new Error('Can not have two options with same values!');
        }

        const description = this.props.description;

        const displayList = this.state.list ? 'block' : 'none';
        const zIndex = this.state.list ? 6 : 0;

        const options = this.assignCbToChildren();

        const hasVisibleOptions = this.props.alternate && options && this.hasVisibleChildren(options);
        const border = this.props.alternate && !hasVisibleOptions ? {border: 'none'} : {};

        const selected = this.getSelectedChildLabel();

        const status = this.getStatus();
        const descStatus = this.getDescStatus();

        const labelPos = this.props.labelTop ? styles.column : '';
        const topLabel = this.props.labelTop ? styles.topLabel : '';

        const shouldOpen = this.props.children ? this.onOpenList : undefined;
        const shouldToggle = this.props.children ? this.onToggleList : undefined;

        const labelContainerDisplay = !this.props.noFilter && this.state.list ? 'none' : 'block';

        const alternateLabelContainer = this.props.alternate ? {padding: 11} : {};
        const alternateLabel = this.props.alternate ? {paddingTop: 11} : {};
        const alternateOptions = this.props.alternate ? styles.alternateOptions : '';
        const alternateContainer = this.props.alternate ? this.props.alternateStyleColor ?
        `${styles.alternateContainerColor} ${styles.alternateContainer}` : styles.alternateContainer : '';

        const inputValue = Array.isArray(this.props.selected) ? this.props.selected.join(', ') : this.props.selected;
        const lockedValue = Array.isArray(this.props.selected) ? this.props.selected.join(', ') : selected;
        const spinnerClass = this.props.alternate ? styles.alternateSpinner : styles.spinner;

        const {list} = this.state;

        return (
            <div
                className={`select-component ${styles.componentContainer} ${labelPos} ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.label && <label style={alternateLabel} className={`${styles.label} ${topLabel}`}>{this.props.label}</label>}
                <div
                    onClick={this.onCloseList}
                    className={styles.overlay}
                    style={{display: !this.state.list ? 'none' : 'block'}}
                />
                <div style={{flex: 1}}>
                    <div className={`${styles.selectContainer} ${styles.labelContainer} ${status} ${alternateContainer}`} style={{zIndex}}>
                        {!this.props.noFilter && this.renderSearchInput()}
                        {this.props.isLoading && <img src={spinner} className={spinnerClass} />}
                        <div
                            onClick={shouldOpen}
                            className={`label-container ${styles.innerDiv}`}
                            style={{...alternateLabelContainer, display: labelContainerDisplay }}
                        >
                            {selected}
                        </div>
                        {this.props.alternate ? this.renderArrow() : <div className={styles.selectIcon} onClick={shouldToggle}/>}
                        <input
                            value={inputValue}
                            readOnly
                            style={{display: 'none'}}
                        />
                        <div
                            className={`options-container ${alternateOptions} ${styles.optionsContainer}`}
                            style={{...border, display: displayList}}
                        >
                            <ul>
                                {options}
                            </ul>
                        </div>
                        {this.props.lockSelected && this.props.selected && !this.props.isLoading && !list && this.renderLockContainer(lockedValue)}
                    </div>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            </div>
        );
    }

    renderSearchInput = () => {

        const alternateInput = this.props.alternate ? {padding: 11} : {};

        return (
            <input
                type="text"
                className={styles.innerInput}
                style={{...alternateInput, display: this.state.list ? 'block' : 'none'}}
                value={this.state.filter}
                onChange={this.onChangeFilter}
                ref={(input) => (input && this.state.list && input.focus())}
                onBlur={this.validateOnBlur}
            />
        );
    }

    onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({filter: e.target.value});
        this.props.onFilterChange && this.props.onFilterChange(e, {dataLabel: this.props.dataLabel, value: e.target.value});
    }

    onClick = (option: string) => {
        const {dataLabel, required} = this.props;
        const selectedAsArray = Array.isArray(this.props.selected);
        let returnValue: any = '';
        const selected = this.props.selected as any;
        return (e: React.MouseEvent<HTMLElement>) => {
            if (selectedAsArray){
                if (!option) {
                    returnValue = [];
                } else if (selected.includes(option)){
                    returnValue = this.removeOption(option);
                } else {
                    returnValue = [...selected];
                    returnValue.push(option);
                }
            } else {
                returnValue = option;
            }
            this.props.onChange && this.props.onChange(e, {value: returnValue, dataLabel});
            if (this.props.status){
                this.props.validate &&
                this.props.validate({value: returnValue, dataLabel, required});
            }
            !selectedAsArray && this.setState({list: false, filter: ''});
        };
    }

    hasVisibleChildren = (options: Array<React.ReactElement<HTMLDivElement>>) => {
        const visible = options.findIndex((item) => {
            return item.props.style.display === 'flex';
        });

        if (visible === -1){
            return false;
        }
        return true;
    }

    removeOption(option: string){
        const selected = this.props.selected as any;
        const returnArray = [...selected];
        const index = selected.indexOf(option);
        returnArray.splice(index, 1);
        return returnArray;
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

                const selectedClass = this.props.selected === child.props.value ?
                this.props.alternate ? styles.alternateSelectedOption : styles.selectedOption : '';

                let visible = 'flex';
                // hide options when filtering
                if (!this.props.noFilter && child.props.searchLabel){
                    visible = child.props.children &&
                        child.props.searchLabel.toLowerCase().includes(this.state.filter.toLowerCase())
                        ? 'flex'
                        : 'none';
                } else if (!this.props.noFilter && typeof child.props.children === 'string'){
                    visible = child.props.children &&
                        child.props.children.toLowerCase().includes(this.state.filter.toLowerCase())
                        ? 'flex'
                        : 'none';
                }

                const active = Array.isArray(this.props.selected) && this.props.selected.includes(child.props.value);

                return (
                    <div
                        className={`select-option-container ${selectedClass}`}
                        style={{display: visible, flex: 1, position: 'relative'}}
                    >
                        {React.cloneElement(child, extraProps)}
                        {active && <i onClick={this.onClick(child.props.value)} className={`${icons.mooskinIcons} ${styles.checkIcon}`} >check</i>}
                    </div>
                );
            }else{
                throw new Error('<Select> element only accepts <Option> elements as children');
            }
        });
    }

    getSelectedChildLabel(){
        if (Array.isArray(this.props.selected)){
            const selectedArray: Array<number | string> = [];

            React.Children.toArray(this.props.children)
                    .forEach((child: React.ReactElement<IOptionProps>) => {
                        if (this.props.selected && (this.props.selected as any).includes(child.props.value)){
                            if (typeof child.props.children === 'string'){
                                selectedArray.push(child.props.children);
                            } else {
                                child.props.label && selectedArray.push(child.props.label);
                            }
                        }
                    });

            if (this.props.children){
                    return selectedArray.join(', ') ||
                        this.props.placeholder ||
                        'Select an option';
            }
        } else {
            const selectedChild = React.Children.toArray(this.props.children)
                    .find((child: React.ReactElement<IOptionProps>) => {
                        return child.props.value === (this.props.selected && this.props.selected);
                    });

            if (this.props.children){
                return selectedChild &&
                        React.isValidElement<IOptionProps>(selectedChild) &&
                        selectedChild.props.children ||
                        this.props.placeholder ||
                        'Select an option';
            }
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

    renderLockContainer = (selected: string | Element | JSX.Element) => {
        let shouldReturn = true;
        if (Array.isArray(this.props.selected) && !this.props.selected.length){
            shouldReturn = false;
        }
        if (shouldReturn){
            return (
                <div className={styles.lockContainer}>
                    <div className={styles.lockText}>
                        {selected}
                    </div>
                    {this.props.allowSelectOnLocked && <div className={styles.arrowDownLocked} onClick={this.onOpenList} />}
                    <i onClick={this.onClick('')} className={`${icons.mooskinIcons} ${styles.close}`}>
                        close
                    </i>
                </div>
            );
        }
    }

    renderArrow = () => {
        const shouldToggle = this.props.children ? this.onToggleList : undefined;
        const arrow = this.state.list ? styles.arrowUp : styles.arrowDown;
        return (
            <div onClick={shouldToggle} className={styles.arrowContainer}>
                <div className={arrow}/>
            </div>
        );
    }
}

export const Option: React.StatelessComponent<IOptionProps> = (props) => {
    const disabledStyles = props.disabled ? styles.disabledOptions : '';
    return <li className={disabledStyles} onClick={!props.disabled ? props.onClick : undefined}>{props.children}</li>;
};

Option.displayName = 'Option';

export default Select;
