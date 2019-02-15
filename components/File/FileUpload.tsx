import * as React from 'react';

import styles from './FileUpload.css';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

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

    /** with of the label within the fileupload container */
    labelWidth?: number;

    /** file upload input label */
    placeholder?: string;

    /** file upload button label */
    buttonLabel?: string;

    /** disabled file upload */
    disabled?: boolean;

    /** fileupload description (small italic bottom) */
    description?: string;

    /** status of the fileupload, error or success */
    status?: 'error' | 'success';

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

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

    static defaultProps = {
        buttonLabel: 'Upload',
        className: '',
        placeholder: 'No File Selected...',
        style: {}
    };

    static displayName = 'FileUpload';

    static getDerivedStateFromProps(nextProps: IFileProps) {
        return {file: nextProps.file};
    }

    constructor(props: IFileProps){
        super(props);

        this.state = {
            file: this.props.file,
            name: this.props.file && this.fileNames(this.props.file) || this.props.placeholder
        };
    }

    // componentWillReceiveProps(nextProps: IFileProps){
    //     this.setState({file: nextProps.file});
    // }

    render(){

        const {disabled, description, accept, style, id, label, buttonLabel, required, multiple} = this.props;
        const disabledFile = this.props.disabled ? styles.disabledFile : '';
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        const status = this.getStatus();
        const descStatus = this.getDescStatus();

        return (
            <div
                id={id}
                className={`file-upload-component ${styles.fileContainer} ${disabledFile}`}
                style={style}
            >
                {label && <label className={styles.label} style={spacing}>{label}</label>}
                <div style={{flexShrink: 1, flexGrow: 1, flexDirection: 'column'}}>
                    <div className={styles.contentContainer}>
                        <span className={`${styles.name} ${status}`}>{this.state.name}</span>
                        <span className={styles.button}>{buttonLabel}</span>
                        <input
                            accept={accept}
                            required={required}
                            disabled={disabled}
                            onChange={this.onChange}
                            type="file"
                            className={styles.input}
                            multiple={multiple}
                        />
                    </div>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            </div>
        );
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 1){
            const files = e.target.files;
            const fileNames = this.fileNames(files);
            !this.props.disabled && this.setState({file: files, name: fileNames});
            !this.props.disabled && this.props.onChange &&
            this.props.onChange(e, {value: files, dataLabel: this.props.dataLabel});
            if (this.props.status){
                this.props.validate &&
                this.props.validate({value: files, dataLabel: this.props.dataLabel, required: this.props.required});
            }
        } else{
            const file = e.target.files && e.target.files[0];
            if (file){
                !this.props.disabled && this.setState({file, name: file.name});
                !this.props.disabled && this.props.onChange &&
                this.props.onChange(e, {value: file, dataLabel: this.props.dataLabel});
                if (this.props.status){
                    this.props.validate &&
                    this.props.validate({value: file, dataLabel: this.props.dataLabel, required: this.props.required});
                }
            }
        }
    }

    fileNames = (files: any) => {
        const fileNames = [];
        for (let i = 0 ; i < files.length ; i++){
            fileNames.push(files[i].name);
        }
        const fileStrings = fileNames.join(', ');
        return fileStrings;
    }

    getStatus = () => {
        const fileStatus = this.props.status && this.props.status;
        if (fileStatus){
            if (fileStatus === 'error'){
                return styles.error;
            } else if (fileStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const fileStatus = this.props.status && this.props.status;
        if (fileStatus){
            if (fileStatus === 'error'){
                return styles.descError;
            } else if (fileStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }
}
