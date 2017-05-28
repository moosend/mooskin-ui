import * as React from 'react';

import styles from './Input.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

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
    minlength?: string;

    /** override input maxlength */
    maxlength?: string;

    /** override input styles */
    style?: {[key: string]: string};

    /** override input class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

}

class Input extends React.Component<IProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render(){

        const {
            id,
            disabled,
            required,
            type,
            name,
            value,
            placeholder,
            minlength,
            maxlength,
            style,
            className
        } = this.props;

        const disabledInput = disabled ? styles.disabledInput : '';

        let hasMin;
        let hasMax;

        if (minlength){
            hasMin = parseInt(minlength, 10);
        }

        if (maxlength){
            hasMax = parseInt(maxlength, 10);
        }

        return (
            <input
                onChange={this.onChange}
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                minLength={hasMin}
                maxLength={hasMax}
                required={required}
                disabled={disabled}
                style={style}
                className={`input-component ${styles.input} ${disabledInput} ${className}`}
            />
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: this.props.value, dataLabel: this.props.dataLabel});
    }

}

export default Input;
