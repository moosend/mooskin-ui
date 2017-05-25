import * as React from 'react';

import styles from './Input.css';

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

    /** override input size */
    size?: string;

    /** override input minlength */
    minlength?: string;

    /** override input maxlength */
    maxlength?: string;

    /** override input styles */
    style?: {[key: string]: string};

    /** override input class */
    className?: string;

    /** callback that is called when the input changes */
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;

}

class Input extends React.Component<IProps, void> {

    public static defaultProps = {
        style: {},
        className: ''
    };

    public render(){

        const {id, disabled, required, type, name, value, placeholder, size, minlength, maxlength, style, className} = this.props;

        const disabledInput = disabled ? styles.disabledInput : '';
        let hasSize;
        let hasMin;
        let hasMax;

        if(size){
            hasSize = parseInt(size);
        }

        if(minlength){
            hasMin = parseInt(minlength);
        }

        if(maxlength){
            hasMax = parseInt(maxlength);
        }

        return (
            <input
                onChange={this.onChange}
                id={id}
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
                className={`input-component ${styles.input} ${disabledInput} ${className}`}
            />
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !this.props.disabled && this.props.onChange && this.props.onChange(e);
    }

}

export default Input;