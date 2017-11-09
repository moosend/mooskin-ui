import * as React from 'react';

import styles from './Input.css';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

export interface IProps {

    /** override input id */
    id?: string;

    /** provide to make the input field disabled */
    disabled?: boolean;

    /** provide to make the input field required */
    required?: boolean;

    /** override input type */
    type?: string;

    /** override input name */
    name?: string;

    /** override input value */
    value?: string;

    /** override input placeholder */
    placeholder?: string;

    /** override input minlength */
    minlength?: number;

    /** override input maxlength */
    maxlength?: number;

    /** input label */
    label?: string;

    /** spacing between label and input */
    labelWidth?: number;

    /** toggle autocomplete specified input */
    autocomplete?: boolean;

    /** autofocus specified input */
    autofocus?: boolean;

    /** icon to be placed near input */
    icon?: string;

    /** position of the icon */
    iconPosition?: string;

    /** override icon styles */
    iconStyle?: React.CSSProperties;

    /** override icon class */
    iconClass?: string;

    /** override input styles */
    style?: React.CSSProperties;

    /** override input class */
    className?: string;

    /** input description (small italic bottom) */
    description?: string;

    /** status of the input, error or success */
    status?: 'error' | 'success';

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

}

class Input extends React.Component<IProps, {}> {

    static defaultProps = {
        className: '',
        iconPosition: 'right',
        style: {}
    };

    id: string;
    input: any;

    constructor(props: IProps){
        super(props);

        this.id = this.props.id || this.generateId();

    }

    render(){

        const {
            disabled,
            required,
            type,
            name,
            placeholder,
            minlength,
            maxlength,
            style,
            className,
            label,
            autofocus,
            icon,
            iconPosition,
            description,
        } = this.props;

        const disabledInput = disabled ? styles.disabledInput : '';
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        const autocomplete = !this.props.autocomplete ? 'off' : 'on';
        const status = this.getStatus();
        const descStatus = this.getDescStatus();
        const radius = this.getRadius();
        const reverse = iconPosition === 'left' && styles.reverse;

        return (
            <div className={`input-component ${styles.inputContainer}`}>
                {label && <label className={styles.inputLabel} style={spacing} htmlFor={this.id}>{label}</label>}
                <div className={styles.inputDiv}>
                    <div className={`${styles.innerDiv} ${status} ${reverse}`}>
                        <input
                            ref={(input) => this.input = input}
                            onChange={this.onChange}
                            id={this.id}
                            type={type}
                            name={name}
                            value={this.props.value}
                            placeholder={placeholder}
                            minLength={minlength}
                            maxLength={maxlength}
                            required={required}
                            disabled={disabled}
                            className={`input ${styles.input} ${disabledInput} ${radius} ${className}`}
                            style={style}
                            autoFocus={autofocus}
                            autoComplete={autocomplete}
                            onBlur={this.validateOnBlur}
                        />
                        {icon && this.getIcon()}
                    </div>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            </div>
        );
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: e.target.value, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value: e.target.value, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
    }

    validateOnBlur = () => {
        this.props.validate &&
        this.props.validate({value: this.props.value, dataLabel: this.props.dataLabel, required: this.props.required});
    }

    getStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.error;
            } else if (inputStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.descError;
            } else if (inputStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }

    getRadius = () => {
        if (this.props.icon){
            if (this.props.iconPosition === 'right'){
                return styles.inputLeft;
            } else if (this.props.iconPosition === 'left'){
                return styles.inputRight;
            }
        } else {
            return styles.noIcon;
        }
    }

    getIcon = () => {
        const iconFont = this.props.icon && this.getIconContent();
        const iconRadius = this.getIconRadius();
        const iconStatus = this.getIconStatus();
        return (
            <div
                onClick={this.onIconClick}
                className={`${styles.icon} ${iconRadius} ${iconStatus} ${this.props.iconClass}`}
                style={this.props.iconStyle}
            >
                {iconFont}
            </div>
        );
    }

    getIconRadius = () => {
        if (this.props.iconPosition === 'right'){
            return styles.iconRight;
        } else if (this.props.iconPosition === 'left'){
            return styles.iconLeft;
        }
    }

    getIconStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.iconError;
            } else if (inputStatus === 'success'){
                return styles.iconSuccess;
            }
        }
    }

    getIconContent = () => {
        return this.props.icon ? this.props.icon.replace(/\s/g, '_') : '';
    }

    onIconClick = () => {
        this.input.focus();
    }
}

export default Input;
