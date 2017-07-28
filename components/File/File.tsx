import * as React from 'react';

import styles from './File.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface IFileProps{

    /** wether the file upload field is required or not */
    required?: boolean;

    /** what kind of file type does the file upload accept */
    accept?: string;

    /** file upload description (lower italic) */
    description?: string;

    /** file upload label */
    label?: string;

    /** file upload input label */
    placeholder?: string;

    /** file upload button label */
    buttonLabel?: string;

    /** disabled file upload */
    disabled?: boolean;

    /** override File styles */
    style?: React.CSSProperties;

    /** override File class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export interface IFileState{
    value?: string;
}

export default class File extends React.Component<IFileProps, IFileState>{

    public static defaultProps = {
        buttonLabel: 'Upload',
        className: '',
        placeholder: 'No File Selected...',
        style: {}
    };

    constructor(props: IFileProps){
        super(props);

        this.state = {
            value: this.props.placeholder
        };
    }

    public render(){

        const disabledFile = this.props.disabled ? styles.disabledFile : '';
        const labelStyles = this.props.label ? {} : {display: 'none'};

        return (
            <div
                className={`file-upload-component ${styles.fileContainer}`}
                style={this.props.style}
            >
                <label style={labelStyles} className={styles.label}>{this.props.label}</label>
                <span className={styles.name}>{this.state.value}</span>
                <span className={styles.button}>{this.props.buttonLabel}</span>
                <input
                    accept={this.props.accept}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                    type="file"
                    className={`${styles.input} ${disabledFile}`}
                />
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filename = (e.target.value).replace(/\\/g, '').replace('C:fakepath', '');
        !this.props.disabled && this.setState({value: filename});
        !this.props.disabled && this.props.onChange &&
        this.props.onChange(e, {value: this.state.value, dataLabel: this.props.dataLabel});
    }
}
