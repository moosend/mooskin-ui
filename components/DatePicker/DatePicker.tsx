import * as React from 'react';

import styles from './DatePicker.css';

import 'input-moment/dist/input-moment.css';

import InputMoment from 'input-moment';
import moment from 'moment';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

export interface IDateProps{

    /** component id */
    id?: string;

    /** date passed will be the selected date */
    date?: any;

    /** datepicker placeholder */
    placeholder?: string;

    /** format the labeled date */
    format?: string;

    /** DatePicker class */
    className?: string;

    /** datepicker label */
    label?: string;

    /** with of the label within the datepicker container */
    labelWidth?: number;

    /** wether this input is disabled or not */
    disabled?: boolean;

    /** wether this input is required or not */
    required?: boolean;

    /** datepicker description (small italic bottom) */
    description?: string;

    /** status of the input, error or success */
    status?: 'error' | 'success';

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** override DatePicker styles */
    style?: React.CSSProperties;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (data: IInputCallbackData) => void;
}

export interface IDateState{
    date: any;
    displayPicker: boolean;
}

export default class DatePicker extends React.Component<IDateProps, IDateState>{

    static defaultProps = {
        className: '',
        format: 'DD MMM YYYY, H:mm',
        style: {}
    };

    constructor(props: IDateProps){
        super(props);

        this.state = {
            date: moment(this.props.date) || moment(),
            displayPicker: false
        };
    }

    render(){

        const displayPicker = !this.state.displayPicker ? 'none' : 'block';
        const disabledClasses = !this.props.disabled ? '' : styles.disabled;
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        // const value = this.props.date ? moment(this.props.date).format(this.props.format) : undefined;
        const status = this.getStatus();
        const descStatus = this.getDescStatus();
        const description = this.props.description;

        return(
            <div
                id={this.props.id}
                className={`datepicker-component ${this.props.className} ${styles.datePicker}`}
                style={this.props.style}
            >
                {this.props.label && <label className={styles.label} style={spacing} >{this.props.label}</label>}
                <div className={styles.wrapper}>
                    <input
                        readOnly
                        value={moment(this.state.date).format(this.props.format)}
                        onClick={this.toggle}
                        className={`${styles.dateInput} ${disabledClasses} ${status}`}
                        required={this.props.required}
                        disabled={this.props.disabled}
                        placeholder={this.props.placeholder}
                        onBlur={this.validateOnBlur}
                    />
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                    <div className={styles.calendar} style={{display: displayPicker}}>
                        <InputMoment
                            moment={this.state.date}
                            onChange={this.onChange}
                            onSave={this.toggle}
                        />
                        <div className={styles.cover} onClick={this.toggle}/>
                    </div>
                </div>
            </div>
        );
    }

    onChange = (date: any) => {
        this.setState({date});
        // !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value: this.state.date.format('x'), dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value: this.state.date.format('x'), dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
    }

    toggle = () => {
        this.setState({displayPicker: !this.state.displayPicker});
    }

    getStatus = () => {
        const dateStatus = this.props.status && this.props.status;
        if (dateStatus){
            if (dateStatus === 'error'){
                return styles.error;
            } else if (dateStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const dateStatus = this.props.status && this.props.status;
        if (dateStatus){
            if (dateStatus === 'error'){
                return styles.descError;
            } else if (dateStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    validateOnBlur = () => {
        this.props.validate &&
        this.props.validate({value: this.props.date, dataLabel: this.props.dataLabel, required: this.props.required});
    }

}
