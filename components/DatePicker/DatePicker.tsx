import * as React from 'react';

import styles from './DatePicker.css';

import 'input-moment/dist/input-moment.css';

import InputMoment from 'input-moment';
import moment from 'moment';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

import Button from '../Button';
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

    /** Add now button to the Datepicker */
    nowButton?: boolean;

    /** prevent on selection a past date */
    preventPast?: boolean;

    /** allow manual date input */
    allowInput?: boolean;

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
    // date: moment.Moment;
    displayPicker: boolean;
    day?: string;
    month?: string;
    year?: string;
    hour?: string;
    minute?: string;
}

export default class DatePicker extends React.Component<IDateProps, IDateState>{

    static defaultProps = {
        className: '',
        format: 'DD MM YYYY, HH:mm',
        placeholder: 'Please select date...',
        style: {}
    };

    static displayName = 'DatePicker';

    // static getDerivedStateFromProps(nextProps: IDateProps){
    //     const day = parseInt(moment(nextProps.date).format('DD'), 10);
    //     const month = parseInt(moment(nextProps.date).format('MM'), 10);
    //     const year = parseInt(moment(nextProps.date).format('YYYY'), 10);
    //     const hour = parseInt(moment(nextProps.date).format('HH'), 10);
    //     const minute = parseInt(moment(nextProps.date).format('mm'), 10);
    //     return {day, month, year, hour, minute};
    // }

    datepickerRef = React.createRef<any>();
    dayInputRef = React.createRef<HTMLInputElement>();
    monthInputRef = React.createRef<HTMLInputElement>();
    yearInputRef = React.createRef<HTMLInputElement>();
    hourInputRef = React.createRef<HTMLInputElement>();
    minuteInputRef = React.createRef<HTMLInputElement>();

    constructor(props: IDateProps){
        super(props);

        this.state = {
            // date: DatePicker.setDate(this.props),
            day: this.props.date ? moment(this.props.date).format('DD') : '',
            displayPicker: false,
            hour: this.props.date ? moment(this.props.date).format('HH') : '',
            minute: this.props.date ? moment(this.props.date).format('mm') : '',
            month: this.props.date ? moment(this.props.date).format('MM') : '',
            year: this.props.date ? moment(this.props.date).format('YYYY') : '',
        };
    }

    componentDidMount(){
        if (this.props.preventPast && this.props.date && this.props.date.isBefore(moment())){
            this.props.onChange &&
            this.props.onChange({value: moment(), dataLabel: this.props.dataLabel});
        }
        setTimeout(() => {
            this.props.preventPast && this.preventPast();
        }, 10);
        if (this.props.allowInput){
            this.updateInputFields(this.props.date || moment());
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.props.preventPast && this.preventPast();
        }, 10);
    }

    componentWillReceiveProps(nextProps: IDateProps){
        if (nextProps.date !== this.props.date){
            this.props.allowInput && this.replaceTimeDisplays();
        }
    }

    render(){
        return this.renderDatePicker();
    }

    renderDatePicker = () => {

        const displayPicker = !this.state.displayPicker ? 'none' : 'block';
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        // const value = this.props.date ? moment(this.props.date).format(this.props.format) : undefined;
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
                <div className={styles.wrapper} style={{position: 'relative'}}>
                    {this.renderInputs()}
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                    <div className={styles.calendar} style={{display: displayPicker}} ref={this.datepickerRef}>
                        <InputMoment
                            moment={this.props.date || moment()}
                            onChange={this.onChange}
                            onSave={this.toggle}
                        />
                        {this.props.nowButton && this.renderNowButton()}
                        <div className={styles.cover} onClick={this.toggle}/>
                    </div>
                </div>
                <i onClick={this.toggle} className={`material-icons ${styles.icon}`} >event_available</i>
            </div>
        );
    }

    renderInputs = () => {
        const {allowInput} = this.props;
        const dateSeparator = <div style={{margin: '0 3px'}}>/</div>;
        const disabledClasses = !this.props.disabled ? '' : styles.disabled;
        const status = this.getStatus();
        const maxDays = this.state.minute && moment(this.state.month, 'MM').daysInMonth() || 31;
        const indexStyle = this.state.displayPicker ? {zIndex: 100} : {};
        if (allowInput){
            return (
                <div
                    className={styles.inputGroup}
                    onClick={this.onGroupClick}
                    style={indexStyle}
                    onBlur={this.onGroupBlur}
                    onFocus={this.onGroupFocus}
                >
                    <input
                        ref={this.dayInputRef}
                        type="number"
                        min={1}
                        max={maxDays}
                        maxLength={2}
                        value={this.state.day}
                        className={styles.smallInput}
                        style={{width: this.state.day && this.state.day.toString().length * 10}}
                        onChange={(e) => this.onInputChange(e, 'day', 2, {min: 1, max: maxDays}, this.monthInputRef.current)}
                        onFocus={this.selectText}
                    />
                    {dateSeparator}
                    <input
                        ref={this.monthInputRef}
                        type="number"
                        min={1}
                        max={12}
                        maxLength={2}
                        value={this.state.month}
                        className={styles.smallInput}
                        style={{width: this.state.month && this.state.month.toString().length * 10}}
                        onChange={(e) => this.onInputChange(e, 'month', 2, {min: 1, max: 12}, this.yearInputRef.current)}
                        onFocus={this.selectText}
                    />
                    {dateSeparator}
                    <input
                        ref={this.yearInputRef}
                        type="number"
                        value={this.state.year}
                        className={styles.smallInput}
                        maxLength={4}
                        style={{width: this.state.year && this.state.year.toString().length * 10, marginRight: 10}}
                        onChange={(e) => this.onInputChange(e, 'year', 4, {min: 0, max: 9999}, this.hourInputRef.current)}
                        onFocus={this.selectText}
                    />
                    {!this.props.dateOnly && this.renderTimeFields()}
                </div>
            );
        }
        return (
            <input
                readOnly
                value={this.props.date ? moment(this.props.date).format(this.props.format) : this.props.placeholder}
                onClick={this.toggle}
                className={`${styles.dateInput} ${disabledClasses} ${status}`}
                required={this.props.required}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onBlur={this.validateOnBlur}
            />
        );
    }

    renderTimeFields = () => {
        const timeSeparator = <div style={{margin: '0 3px'}}>:</div>;
        return (
            <>
                {this.renderHourField()}
                {timeSeparator}
                {this.renderMinuteField()}
            </>
        );
    }

    renderHourField = () => {
        return (
            <input
                ref={this.hourInputRef}
                type="number"
                min={0}
                max={23}
                maxLength={2}
                value={this.state.hour}
                className={styles.smallInput}
                style={{width: this.state.hour && this.state.hour.toString().length * 10}}
                onChange={(e) => this.onInputChange(e, 'hour', 2, {min: 0, max: 23}, this.minuteInputRef.current)}
                onFocus={this.selectText}
            />
        );
    }

    renderMinuteField = () => {
        return (
            <input
                ref={this.minuteInputRef}
                type="number"
                min={0}
                max={59}
                maxLength={2}
                value={this.state.minute}
                className={styles.smallInput}
                style={{width: this.state.minute && this.state.minute.toString().length * 10}}
                onChange={(e) => this.onInputChange(e, 'minute', 2, {min: 0, max: 59})}
                onFocus={this.selectText}
            />
        );
    }

    selectText = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }

    replaceTimeDisplays = () => {
        const timeCollection = this.datepickerRef.current.getElementsByClassName('time');
        const timeArray = timeCollection && Array.from(timeCollection);
        timeArray && timeArray.map((el: HTMLSpanElement, i) => {
            el.innerHTML = '<input/ >';
            const input = el.getElementsByTagName('input')[0];
            if (i === 0){
                this.changeInputAttr(input, 'hour');
            } else {
                this.changeInputAttr(input, 'minute');
            }
        });
    }

    changeInputAttr = (input: HTMLInputElement, type: 'minute' | 'hour') => {
        input.onfocus = (e) => this.selectText(e as any);
        input.className = styles.smallInput;
        input.type = 'number';
        input.style.width = '43px';
        input.style.color = '#fff';
        input.value = this.state[type] || '';
        input.oninput = (e: any) => {
            let value = e.target.value;
            const numberValue = parseInt(value, 10);
            const min = 0;
            const max = type === 'minute' ? 59 : 23;
            if (numberValue > max){
                value = max.toString();
            } else if (numberValue < min){
                value = min.toString();
            }
            if (type === 'minute'){
                this.setMinuteState(value);
            } else {
                this.setHourState(value);
            }
            input.value = value;
        };
        input.onblur = () => {
            if (input.value.length === 1){
                const newValue = `0${input.value}`;
                input.value = newValue;
                if (type === 'minute'){
                    this.setMinuteState(newValue);
                } else {
                    this.setHourState(newValue);
                }
            }
            this.onGroupBlur();
            setTimeout(() => {
                this.replaceTimeDisplays();
            }, 10);
        };
    }

    setMinuteState = (minute: string) => {
        this.setState({minute});
    }

    setHourState = (hour: string) => {
        this.setState({hour});
    }

    onInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        dataLabel: string,
        maxLength: number,
        minMax: {min: number, max: number},
        next?: HTMLInputElement | null
    ) => {
        if (e.target.value.length > maxLength){
            return;
        }
        let value = e.target.value;
        const numberValue = parseInt(value, 10);
        if (numberValue > minMax.max){
            value = minMax.max.toString();
        } else if (numberValue < minMax.min){
            value = minMax.min.toString();
        }
        if (next && e.target.value.length === maxLength){
            next.focus();
        }
        this.setState({[dataLabel]: value, displayPicker: this.state.displayPicker});
    }

    onGroupClick = () => {
        if (document.activeElement && document.activeElement.tagName === 'BODY'){
            this.dayInputRef.current && this.dayInputRef.current.focus();
        }
    }

    onGroupFocus = () => {
        this.setState({displayPicker: true});
    }

    onGroupBlur = () => {
        const format = 'DD - MM - YYYY / HH - mm';
        const {day, hour, minute, month, year} = this.state;
        const date = moment(`${day} - ${month} - ${year} / ${hour} - ${minute}`, format);
        this.onChange(date);
    }

    onChange = (date: moment.Moment) => {
        let value = this.props.dateOnly ? moment(date).startOf('day') : moment(date);
        value = this.props.preventPast && value.isBefore(moment()) ? moment() : value;
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value, dataLabel: this.props.dataLabel});
        this.updateInputFields(date);
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
        // this.setState({date: value});
    }

    updateInputFields = (date: moment.Moment) => {
        const day = moment(date).format('DD');
        const month = moment(date).format('MM');
        const year = moment(date).format('YYYY');
        const hour = moment(date).format('HH');
        const minute = moment(date).format('mm');
        this.setState({day, month, year, hour, minute});
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

    renderNowButton = () => {
        return (
            <div style={{display: 'flex', justifyContent: 'center', background: '#fff', padding: 15}}>
                <Button inverseStyle onClick={() => this.onChange(moment())}>Set Current Date and Time</Button>
            </div>
        );
    }

    preventPast = () => {
        const monthElement = this.datepickerRef.current && this.datepickerRef.current.getElementsByClassName('current-date');
        const dateStrings = monthElement && monthElement[0].innerText.split(' ');

        const monthString = dateStrings && dateStrings[0];
        const month = monthString && parseInt(moment(monthString, 'MMMM').format('MM'), 10);
        const year = dateStrings && parseInt(dateStrings[1], 10);

        const table = this.datepickerRef.current && this.datepickerRef.current.getElementsByTagName('table');
        const tBody = table && table[0].getElementsByTagName('tbody');
        const tds = tBody && tBody[0].getElementsByTagName('td');

        const tdArray: any = tds && Array.from(tds);

        // if (month < currentMonth){
        //     tBody[0].style.background = '#efefef';
        //     tBody[0].style.color = '#999';
        //     tBody[0].style.pointerEvents = 'none';
        // } else {
        //     tBody[0].style.background = '#fff';
        //     tBody[0].style.color = 'initial';
        //     tBody[0].style.pointerEvents = 'auto';
        tdArray && tdArray.forEach((date: any, i: any) => {
            // document.body.style.cursor = 'auto';
            const className = date.className;
            const day = parseInt(date.innerText, 10);
            let setMonth = month - 1;
            if (className.includes('prev-month')){
                setMonth = setMonth - 1;
            } else if (className.includes('next-month')){
                setMonth = setMonth + 1;
            }
            const cellDate = moment().set('year', year).set('month', setMonth).set('date', day);
            const isPastDate = cellDate.isBefore(moment());
            // console.log(cellDate.format('DD MM YYYY'), isPastDate);
            if (isPastDate){
                date.className = `${date.className} ${styles.disabledCell}`;
                date.onclick = (e: any) => {
                    e.stopPropagation();
                    e.preventDefault();
                };
                date.style.borderRadius = 0;
            } else {
                date.className = date.className.replace(`${styles.disabledCell}`, '');
            }
        });

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
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days.map((day, i) => {
            return <Option key={i} value={(i + 1).toString()}>{day}</Option>;
        });
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

DateSelect.displayName = 'DateSelect';
