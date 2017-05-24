import * as React from 'react';

import styles from './Input.css';

export interface IProps {

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

    /** override input size */
    size?: string;

    /** override input minlength */
    minlength?: string;

    /** override input maxlength */
    maxlength?: string;

    /** override input styles */
    style?: {[key: string]: string};

    /** callback that is called when the input changes */
    //onChange: (e?: React.KeyboardEvent<HTMLInputElement>) => void;

}

class Input extends React.Component<IProps, void> {

    public static defaultProps = {
        style: {}
    };

    public render(){

        const {disabled, required, type, name, value, placeholder, size, minlength, maxlength, style} = this.props;

        const disabledStyles = disabled ? styles.disabledInput : '';
        const hasSize = size ? parseInt(size) : 0; 
        const hasMin = minlength ? parseInt(minlength) : 0; 
        const hasMax = maxlength ? parseInt(maxlength) : 0; 

        return (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                size={hasSize}
                minLength={hasMin}
                maxLength={hasMax}
                required={required}
                disabled={disabled}
                style={style}
                className={`input-component ${styles.input} ${disabledStyles}`}
            />
        );
    }

    // private onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     !this.props.disabled && this.props.onChange(e);
    // }

}

export default Input;