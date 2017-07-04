import * as React from 'react';

import styles from './TextArea.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

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
    spacing?: number;

    /** override textarea styles */
    style?: {[key: string]: string|number};

    /** override textarea class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the textarea changes */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, data: IInputCallbackData) => void;

}

export interface ITextAreaState{
    value: string;
}

class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: ITextAreaProps){
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
            name,
            placeholder,
            minlength,
            maxlength,
            style,
            className,
            label,
            cols,
            rows,
            description,
        } = this.props;

        const disabledtextarea = disabled ? styles.disabledTextArea : '';
        const spacing = label ?
                        !this.props.spacing ?
                        {marginLeft: '5px'} :
                        {marginLeft: `${this.props.spacing}px`} :
                        {};
        const textareaStyle = {...spacing, ...style};

        return (
            <div className={`textarea-component ${className}`} style={style}>
                <label className={styles.textareaLabel}>
                    {label}
                    <textarea
                        onChange={this.onChange}
                        id={id}
                        name={name}
                        value={this.state.value}
                        placeholder={placeholder}
                        cols={cols}
                        rows={rows}
                        minLength={minlength}
                        maxLength={maxlength}
                        required={required}
                        disabled={disabled}
                        className={`textarea ${styles.textarea} ${disabledtextarea}`}
                        style={textareaStyle}
                    />
                    <i>{description}</i>
                </label>
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({value: e.target.value});
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: this.props.value, dataLabel: this.props.dataLabel});
    }

}

export default TextArea;
