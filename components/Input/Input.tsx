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
    minlength?: number;

    /** override input maxlength */
    maxlength?: number;

    /** input label */
    label?: string;

    /** input description (small italic bottom) */
    description?: string;

    /** spacing between label and input */
    spacing?: number;

    /** override input styles */
    style?: {[key: string]: string|number};

    /** override input class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

}

export interface IInputState{
    value: string;
}

class Input extends React.Component<IProps, IInputState> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: IProps){
        super(props);

        this.state = {
            value: this.props.value ? this.props.value : ''
        };
    }

    public render(){

        const {
            id,
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
            description,
        } = this.props;

        const disabledInput = disabled ? styles.disabledInput : '';
        const spacing = label ?
                        !this.props.spacing ?
                        {marginLeft: '20px'} :
                        {marginLeft: `${this.props.spacing}px`} :
                        {};
        const inputStyle = {...spacing, ...style};

        return (
            <div className={`input-component ${className}`}>
                <label className={styles.inputLabel}>
                    {label}
                    <input
                        onChange={this.onChange}
                        id={id}
                        type={type}
                        name={name}
                        value={this.state.value}
                        placeholder={placeholder}
                        minLength={minlength}
                        maxLength={maxlength}
                        required={required}
                        disabled={disabled}
                        className={`input ${styles.input} ${disabledInput}`}
                        style={inputStyle}
                    />
                    <i>{description}</i>
                </label>
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: this.props.value, dataLabel: this.props.dataLabel});
    }

}

export default Input;
