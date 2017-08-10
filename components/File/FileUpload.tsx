import * as React from 'react';

import styles from './FileUpload.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface IFileProps{

    /** file upload id */
    id?: string;

    /** already selected file for upload */
    file?: File | FileList;

    /** wether the file upload field is required or not */
    required?: boolean;

    /** multiple file uploads */
    multiple?: boolean;

    /** what kind of file type does the file upload accept */
    accept?: string;

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
    file?: File | FileList;
    name?: string;
}

export default class FileUpload extends React.Component<IFileProps, IFileState>{

    public static defaultProps = {
        buttonLabel: 'Upload',
        className: '',
        placeholder: 'No File Selected...',
        style: {}
    };

    constructor(props: IFileProps){
        super(props);

        this.state = {
            file: this.props.file,
            name: this.props.file && this.fileNames(this.props.file) || this.props.placeholder
        };
    }

    public render(){

        const disabledFile = this.props.disabled ? styles.disabledFile : '';
        const labelStyles = this.props.label ? {} : {display: 'none'};

        return (
            <div
                id={this.props.id}
                className={`file-upload-component ${styles.fileContainer} ${disabledFile}`}
                style={this.props.style}
            >
                <label style={labelStyles} className={styles.label}>{this.props.label}</label>
                <span className={styles.name}>{this.state.name}</span>
                <span className={styles.button}>{this.props.buttonLabel}</span>
                <input
                    accept={this.props.accept}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                    type="file"
                    className={styles.input}
                    multiple={this.props.multiple}
                />
            </div>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 1){
            const files = e.target.files;
            const fileNames = this.fileNames(files);
            !this.props.disabled && this.setState({file: files, name: fileNames});
            !this.props.disabled && this.props.onChange &&
            this.props.onChange(e, {value: files, dataLabel: this.props.dataLabel});
        } else{
            const file = e.target.files && e.target.files[0];
            if (file){
                !this.props.disabled && this.setState({file, name: file.name});
                !this.props.disabled && this.props.onChange &&
                this.props.onChange(e, {value: file, dataLabel: this.props.dataLabel});
            }
        }
    }

    private fileNames = (files: any) => {
        const fileNames = [];
        for (let i = 0 ; i < files.length ; i++){
            fileNames.push(files[i].name);
        }
        const fileStrings = fileNames.join(', ');
        return fileStrings;
    }
}
