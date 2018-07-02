import * as React from 'react';

import styles from './Checkbox.css';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';
import {H2} from '../Headings';

export interface ICheckBoxGroupProps {

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** group id attribute */
    id?: string;

    /** group title attribute */
    title?: string;

    /** horizontal align Checkboxes */
    horizontal?: boolean;

    /** Spacing between Checkboxes */
    spacing?: number;

    /** CheckboxGroup class */
    className?: string;

    /** reflects to the state of the checkboxGroup */
    selectedChecks: ICheckBoxData[];

    /** CheckboxGroup description (small italic bottom) */
    description?: string;

    /** status of the checkbox, error or success */
    status?: 'error' | 'success';

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** wether the checkboxes are required (used within forms) */
    required?: boolean;

    /** override CheckboxGroup styles */
    style?: React.CSSProperties;

    /** childrens must be a Checkbox Component */
    children?: Array<React.ReactElement<ICheckBoxProps>> | React.ReactElement<ICheckBoxProps>;

    /** Callback that fires when Checkbox Group state changes */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ICheckBoxProps {
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** Checkbox id attribute */
    id?: string;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;

    /** Checkbox matches the selected prop from parent component */
    checked?: boolean;

    /** value for this Checkbox */
    value: string | number;

    /** horizontal align Checkboxes */
    horizontal?: boolean;

    /** Spacing Checkbox */
    spacing?: number;

    /** Checkbox class */
    className?: string;

    /** name identifier for Checkbox */
    name?: string;

    /** override Checkbox styles */
    style?: React.CSSProperties;

    /** Checkbox label */
    label?: string;

    /** status of the checkbox, error or success (inherited from parent) */
    status?: 'error' | 'success';

    /** Checkbox description */
    description?: string;
}

export interface ICheckBoxData{
    checked?: boolean | undefined;
    value?: string | number;
    label?: string;
}

export default class CheckboxGroup extends React.Component<ICheckBoxGroupProps, {}>{

    static defaultProps = {
        className: '',
        style: {},
    };

    static Checkbox: React.StatelessComponent<ICheckBoxProps>;

    name: string;

    constructor(props: ICheckBoxGroupProps){
        super(props);

        this.name = this.generateName();

        // this.state = {
        //     data: this.props.selectedChecks || this.setData()
        // };
    }

    // componentWillReceiveProps(nextProps: ICheckBoxGroupProps) {
    //     this.setState({data: nextProps.selectedChecks ? nextProps.selectedChecks : this.state.data});
    // }

    render() {

        const {id, className, style, title, description} = this.props;

        const align = this.props.horizontal ? styles.horizontal : '';

        const status = this.props.status === 'error' ? styles.descError :
        this.props.status === 'success' ? styles.descSuccess : '';

        return (
            <div
                id={id}
                className={`checkboxgroup-component ${className}`}
                style={{...style}}
            >
                {title && <H2>{title}</H2>}
                <div className={align}>
                    {this.getCheckboxes() || this.props.children}
                </div>
                {description && <i className={`${styles.message} ${status}`}>{description}</i>}
            </div>
        );
    }

    onClick = (dataArray: {checked: boolean, value?: string | number, label?: string}, data: ICheckBoxData[]) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            data.map ((checkbox, index) => {
                if (checkbox.value === dataArray.value){
                    data[index] = {
                        checked: !dataArray.checked,
                        label: dataArray.label,
                        value: dataArray.value
                    };
                } else {
                    return {checkbox};
                }
            });
            // this.setState({data});
            this.props.onChange && this.props.onChange(e, {value: data, dataLabel: this.props.dataLabel});
            this.props.validate &&
            this.props.validate({value: data, dataLabel: this.props.dataLabel, required: this.props.required});
        };
    }

    getCheckboxes = () => {
        if (this.props.children){
            const data = this.props.selectedChecks.length === 0 ? this.getChildrenData() : this.props.selectedChecks;
            if (this.checkDuplicateValues(data)){
                return this.getChildren(data);
            } else {
                throw new Error('<CheckBox> elements must not have duplicate values');
            }
        } else {
            if (this.checkDuplicateValues(this.props.selectedChecks)){
                return this.getPropsCheckboxes(this.props.selectedChecks);
            } else {
                throw new Error('<CheckBox> elements must not have duplicate values');
            }
        }
    }

    getChildrenData = () => {
        const data: ICheckBoxData[] = [];
        React.Children.map(this.props.children, (child, index) => {
        if (React.isValidElement<ICheckBoxProps>(child)){
            data.push({
                checked: child.props.checked ? child.props.checked : false,
                label: child.props.label ? child.props.label : child.props.value.toString(),
                value: child.props.value
                });
            }
        });
        return data;
    }

    getChildren = (data: ICheckBoxData[]) => {
        const checkBoxes: Array<React.ReactElement<ICheckBoxProps>> = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement<ICheckBoxProps>(child)){
                const checked = data[index].checked === true ? true : false;
                const value = data[index].value ? data[index].value : `checkbox${index}`;
                // const label = data[index].label ? data[index].label : value;
                const extraProps: Partial<ICheckBoxProps & {key: number}> = {
                    checked: data[index].checked,
                    horizontal: this.props.horizontal,
                    key: index,
                    label: data[index].label,
                    name: this.name,
                    onClick: /** child.props.onClick ? child.props.onClick : */
                            this.onClick({checked, value, label: data[index].label}, data),
                    spacing: this.props.spacing,
                    status: this.props.status,
                    value
                };

                checkBoxes.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<CheckBoxGroup> element only accepts <CheckBox> elements as children');
            }
        });
        return checkBoxes;
    }

    getPropsCheckboxes = (data: ICheckBoxData[]) => {
        const checkBoxes: Array<React.ReactElement<ICheckBoxProps>> = [];
        data.forEach((check, index) => {
            const checked = check.checked === true ? true : false;
            const value = check.value ? check.value : `checkbox${index}`;
            // const label = check.label ? check.label : value;

            checkBoxes.push(
                <Checkbox
                    checked={checked}
                    horizontal={this.props.horizontal}
                    key={index}
                    label={check.label}
                    name={this.name}
                    onClick={this.onClick({checked, value, label: check.label}, data)}
                    spacing={this.props.spacing}
                    status={this.props.status}
                    value={value}
                />
            );
        });

        return checkBoxes;
    }

    checkDuplicateValues = (data: ICheckBoxData[]) => {
        const values: any[] = [];
        let duplicates: number = 0;
        data.forEach((check, index) => {
            if (React.isValidElement<ICheckBoxProps>(check)){
                values.push(check.props.value);
            }
        });
        values.forEach((valueOne) => {
            values.forEach((valueTwo) => {
                if (valueOne === valueTwo){
                    duplicates = duplicates + 1;
                }
            });
        });
        if (duplicates > values.length){
            return false;
        } else {
            return true;
        }

    }

    generateName = () => {
        return Date.now().toString();
    }
}

export const Checkbox: React.StatelessComponent<ICheckBoxProps> = (props) => {

    const generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const getStatus = () => {
        const checkStatus = props.status && props.status;
        if (checkStatus){
            if (checkStatus === 'error'){
                return styles.error;
            } else if (checkStatus === 'success'){
                return styles.success;
            }
        }
    };

    const status = getStatus();
    const disabledStyles = props.disabled ? styles.disabledCheckbox : '';
    const label = props.label || '';
    const checked = props.checked ? true : false;
    const checkedStyles = !props.checked ? '' : styles.checkboxChecked;
    const spacing = props.spacing ?
                    props.horizontal ?
                    {marginRight: `${props.spacing}px`} :
                    {marginBottom: `${props.spacing}px`} : {};
    const classes = `checkbox-component ${styles.checkbox}
                    ${disabledStyles} ${props.className} ${checkedStyles} ${status}`;

    const genId = generateId();

    const onCheckBoxClick = (data: {checked: boolean, value: string | number, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            !props.disabled && props.onClick && props.onClick(e, {value: data, dataLabel: props.dataLabel});
        };
    };

    return (
        <div
            // htmlFor={props.id}
            className={classes}
            style={{...spacing, ...props.style}}
        >
            <input
                id={genId}
                name={props.name}
                type="checkbox"
                value={props.value}
                onClick={onCheckBoxClick({checked: !checked, value: props.value, label})}
                disabled={props.disabled}
                defaultChecked={checked}
                className={`material-icons`}
            />
            <label htmlFor={genId}>
                <span>{label}</span>
            </label>
            <br/>
            <i className={styles.description}>{props.description}</i>
        </div>
    );
};

Checkbox.defaultProps = {
    className: '',
    style: {}
};
