import * as React from 'react';

import styles from './TextArea.css';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

export interface ITextAreaProps {

    /** override textarea id */
    id?: string;

    /** provide to make the textarea field disabled */
    disabled?: boolean;

    /** provide to make the textarea field required */
    required?: boolean;

    /** specify textarea columns */
    cols?: number;

    /** specify textarea rows */
    rows?: number;

    /** override textarea name */
    name?: string;

    /** override textarea value */
    value?: string;

    /** override textarea placeholder */
    placeholder?: string;

    /** override textarea minlength */
    minlength?: number;

    /** override textarea maxlength */
    maxlength?: number;

    /** textarea label */
    label?: string;

    /** textarea description (small italic bottom) */
    description?: string;

    /** spacing between label and textarea */
    labelWidth?: number;

    /** toggle readonly textarea */
    readonly?: boolean;

    /** override textarea styles */
    style?: React.CSSProperties;

    /** override textarea class */
    className?: string;

    /** status of the textarea, error or success */
    status?: 'error' | 'success' | undefined;

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the textarea changes */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, data: IInputCallbackData) => void;

}

class TextArea extends React.Component<ITextAreaProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    id: string;

    constructor(props: ITextAreaProps){
        super(props);

        this.id = this.props.id || this.generateId();

    }

    render(){

        const disabledtextarea = this.props.disabled ? styles.disabledTextArea : '';
        const status = this.getStatus();

        return (
            <div
                className={`textarea-component ${styles.areaContainer}${this.props.className}`}
                style={this.props.style}
            >
                {this.props.label && this.getLabel()}
                <div className={styles.textAreaDiv}>
                    <textarea
                        id={this.id}
                        onChange={this.onChange}
                        name={name}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        cols={this.props.cols}
                        rows={this.props.rows}
                        minLength={this.props.minlength}
                        maxLength={this.props.maxlength}
                        required={this.props.required}
                        disabled={this.props.disabled}
                        readOnly={this.props.readonly}
                        className={`textarea ${styles.textarea} ${disabledtextarea} ${status}`}
                        onBlur={this.validateOnBlur}
                    />
                    {this.props.description && this.getDescription()}
                </div>
            </div>
        );
    }

    getLabel = () => {
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        return (
            <label
                className={styles.textareaLabel}
                style={spacing}
                htmlFor={this.id}
            >
                {this.props.label}
            </label>
        );
    }

    getDescription = () => {
        const descStatus = this.getDescStatus();
        return (
            <i
                className={`${styles.description} ${descStatus}`}
            >
                {this.props.description}
            </i>
        );
    }

    onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: e.target.value, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate({
                dataLabel: this.props.dataLabel,
                required: this.props.required,
                value: e.target.value
            });
        }
    }

    validateOnBlur = () => {
            this.props.validate &&
            this.props.validate({
                dataLabel: this.props.dataLabel,
                required: this.props.required,
                value: this.props.value
            });
    }

    getStatus = () => {
        const textStatus = this.props.status && this.props.status;
        if (textStatus){
            if (textStatus === 'error'){
                return styles.error;
            } else if (textStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const textStatus = this.props.status && this.props.status;
        if (textStatus){
            if (textStatus === 'error'){
                return styles.descError;
            } else if (textStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }
}

export default TextArea;
