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

    /** toggle readonly textarea */
    readonly?: boolean;

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

    private id: string;

    constructor(props: ITextAreaProps){
        super(props);

        this.id = this.props.id || this.generateId();

        this.state = {
            value: this.props.value ? this.props.value : ''
        };
    }

    public render(){

        const {
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
            readonly,
            description,
        } = this.props;

        const disabledtextarea = disabled ? styles.disabledTextArea : '';
        const spacing = label ?
                        !this.props.spacing ?
                        {marginRight: '5px'} :
                        {marginRight: `${this.props.spacing}px`} :
                        {display: 'none'};

        return (
            <div className={`textarea-component ${className} ${styles.areaContainer}`}>
                <label className={styles.textareaLabel} style={spacing} htmlFor={this.id}>
                    {label}
                </label>
                <div>
                    <textarea
                        id={this.id}
                        onChange={this.onChange}
                        name={name}
                        value={this.state.value}
                        placeholder={placeholder}
                        cols={cols}
                        rows={rows}
                        minLength={minlength}
                        maxLength={maxlength}
                        required={required}
                        disabled={disabled}
                        readOnly={readonly}
                        className={`textarea ${styles.textarea} ${disabledtextarea}`}
                        style={style}
                    />
                    <i>{description}</i>
                </div>
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({value: e.target.value});
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: this.state.value, dataLabel: this.props.dataLabel});
    }

    private generateId = () => {
        return Date.now().toString();
    }

}

export default TextArea;
