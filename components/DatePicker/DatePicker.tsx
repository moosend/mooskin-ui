import * as React from 'react';

import styles from './DatePicker.css';

import 'input-moment/dist/input-moment.css';

import InputMoment from 'input-moment';
import moment from 'moment';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

import Select, {Option} from '../Select';

export interface IDateProps{

    /** component id */
    id?: string;

    /** date passed will be the selected date */
    date?: moment.Moment;

    /** datepicker placeholder */
    placeholder?: string;

    /** format the labeled date */
    format?: string;

    /** DatePicker class */
    className?: string;

    /** datepicker label */
    label?: string;

    /** wether the datepicker should be for date only */
    dateOnly?: boolean;

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
    date: moment.Moment;
    displayPicker: boolean;
}

export default class DatePicker extends React.Component<IDateProps, IDateState>{

    static defaultProps = {
        className: '',
        format: 'DD MMM YYYY, H:mm',
        style: {}
    };

    static setDate = (props: IDateProps) => {
        if (props.dateOnly){
            return moment(props.date).startOf('day') || moment().startOf('day');
        }
        return moment(props.date) || moment();
    }

    static getDerivedStateFromProps(nextProps: IDateProps){
        return {date: DatePicker.setDate(nextProps)};
    }

    constructor(props: IDateProps){
        super(props);

        this.state = {
            date: DatePicker.setDate(this.props),
            displayPicker: false
        };
    }

    render(){
        return this.renderDatePicker();
    }

    renderDatePicker = () => {
        const displayPicker = !this.state.displayPicker ? 'none' : 'block';
        const disabledClasses = !this.props.disabled ? '' : styles.disabled;
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        // const value = this.props.date ? moment(this.props.date).format(this.props.format) : undefined;
        const status = this.getStatus();
        const descStatus = this.getDescStatus();
        const description = this.props.description;

        this.toggleButtons();

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
        const value = this.props.dateOnly ? moment(this.state.date).startOf('day') :
                    moment(this.state.date);
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
        this.setState({date: value});
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

    toggleButtons = () => {
        const options: any = document.getElementsByClassName('options');
        const optionsArray = this.state.displayPicker && options && Array.from(options);

        optionsArray && this.changeTimeOptions(optionsArray);
    }

    changeTimeOptions = (elements: any[]) => {
        for (let index = 0; index < elements.length; index ++){
            this.props.dateOnly ? elements[index].style.display = 'none' :
            elements[index].style.display = 'inline-block';
        }
    }

}

export interface IDateSelectValue {
    id?: string;
    dataLabel?: string;
    label?: string;
    format?: string;
    type: 'hour' | 'minute' | 'month' | 'week' | 'ordinal';
    placeholder?: string;
    description?: string;
    value?: string | number;
    labelTop?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export const DateSelect: React.StatelessComponent<IDateSelectValue> = (props) => {

    const renderDateSelect = () => {
        const {id, dataLabel, value, labelTop, label, className, placeholder, description, style} = props;
        const options = renderOptions();
        const selected = value || value === 0 ? value.toString() : '';
        return (
            <Select
                selected={selected}
                onChange={onSelectChange}
                label={label}
                id={id}
                dataLabel={dataLabel}
                placeholder={placeholder}
                description={description}
                labelTop={labelTop}
                className={`date-select-component ${className}`}
                style={style}
            >
                {options}
            </Select>
        );
    };

    const renderOptions = () => {
        const {type} = props;
        if (type && type === 'hour'){
            return renderHourOption();
        } else if (type && type === 'minute'){
            return renderMinuteOptions();
        } else if (type && type === 'month'){
            return renderDayOptions();
        } else if (type && type === 'week'){
            return renderWeekOptions();
        } else if (type && type === 'ordinal'){
            return renderOrdinalOptions();
        } else {
            throw new Error('Item type is not valid!');
        }
    };

    const renderHourOption = () => {
        const {format} = props;
        const options = [];
        if (format && format === '24-Hour'){
            while (options.length < 24){
                options.push(renderHoursClockBased(options.length));
            }
        } else if (format && format === '12-Hour') {
            while (options.length < 12){
                options.push(renderHoursClockBased(options.length, 'AM'));
            }
            while (options.length < 24){
                options.push(renderHoursClockBased(options.length, 'PM'));
            }
        } else {
            throw new Error('Hour format not valid!');
        }
        return options;
    };

    const renderHoursClockBased = (clock: number, period?: string) => {
        if (period){
            if (period === 'AM'){
                const text = clock.toString().length === 1 ? `0${clock} ${period}` : `${clock.toString()} ${period}`;
                return <Option key={clock} value={clock.toString()}>{text}</Option>;
            } else if (period === 'PM'){
                const text = (clock - 12).toString().length === 1 ? `0${clock - 12} ${period}` :
                    `${(clock - 12).toString()} ${period}`;
                return <Option key={clock} value={clock.toString()}>{text}</Option>;
            }
        }
        const otherText = clock.toString().length === 1 ? `0${clock}` : clock.toString();
        return <Option key={clock} value={clock.toString()}>{otherText}</Option>;
    };

    const renderMinuteOptions = () => {
        const options = [];
        for (let i = 0 ; i < 60 ; i++) {
            const text = i.toString().length === 1 ? `0${i}` : i.toString();
            options.push(
                <Option key={i} value={i.toString()}>{text}</Option>
            );
        }
        return options;
    };

    const renderDayOptions = () => {
        const options = [];
        const format = getDayFormat() || 31;
        const days = moment(format.toString(), 'M').daysInMonth();
        for (let i = 1 ; i <= days ; i++) {
            const text = moment({ month: format - 1, day: i }).format('Do');
            options.push(
                <Option key={i} value={i.toString()}>{text}</Option>
            );
        }
        return options;
    };

    const getDayFormat = () => {
        const {format} = props;
        if (format && parseInt(format, 10)){
            return parseInt(format, 10);
        } else {
            throw new Error('Day format not valid!');
        }
    };

    const renderWeekOptions = () => {
        const options = [];
        for (let i = 1 ; i <= 7 ; i++){
            let text: string = 'Monday';
            switch (i) {
                case 1:
                    text = 'Monday';
                    break;
                case 2:
                    text = 'Tuesday';
                    break;
                case 3:
                    text = 'Wednesday';
                    break;
                case 4:
                    text = 'Thursday';
                    break;
                case 5:
                    text = 'Friday';
                    break;
                case 6:
                    text = 'Saturday';
                    break;
                case 7:
                    text = 'Sunday';
                    break;
                default:
                    break;
            }
            options.push(
                <Option key={i} value={i.toString()}>{text}</Option>
            );
        }
        return options;
    };

    const renderOrdinalOptions = () => {
        const options = [];
        for (let i = 1 ; i <= 6 ; i++){
            let text: string = 'First';
            switch (i) {
                case 1:
                    text = 'First';
                    break;
                case 2:
                    text = 'Second';
                    break;
                case 3:
                    text = 'Third';
                    break;
                case 4:
                    text = 'Fourth';
                    break;
                case 5:
                    text = 'Fifth';
                    break;
                case 6:
                    text = 'Last';
                    break;
                default:
                    break;
            }
            const value = i === 6 ? -1 : i;
            options.push(
                <Option key={i} value={value.toString()}>{text}</Option>
            );
        }
        return options;
    };

    const onSelectChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        props.onChange && props.onChange(e, {value: parseInt(data.value, 10), dataLabel: props.dataLabel});
    };

    return renderDateSelect();
};
