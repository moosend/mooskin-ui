import * as React from 'react';

import styles from './Input.css';

export interface IProps {

    /** provide to make the input field disabled */
    disabled?: boolean;

    /** provide to make the input field required */
    required?: boolean;

    /** override input type */
    type: string;

    /** override input name */
    name?: string;

    /** override input value */
    value?: string;

    /** override input placeholder */
    placeholder?: string;

    /** override input size */
    size?: number;

    /** override input minlength */
    minlength?: number;

    /** override input maxlength */
    maxlength?: number;

    /** override input styles */
    style?: {[key: string]: string};

    /** callback that is called when the input changes */
    onChange: (e?: React.KeyboardEvent<HTMLInputElement>) => void;

}

class Input extends React.Component<IProps, {}> {

    public static defaultProps = {
        style: {},
    };

    public render(){

        const {disabled, required, type, name, value, placeholder, size, minlength, maxlength, style} = this.props;

        const disabledStyles = disabled ? styles.disabledInput : '';
        const hasType = type ? type : '';

        return (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                size={size}
                minLength={minlength}
                maxLength={maxlength}
                required={required}
                disabled={disabled}
                className={`input-component ${styles.input} ${disabledStyles}`}
                style={style}
            />
        );
    }

    private onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        !this.props.disabled && this.props.onChange(e);
    }

}

export default Input;