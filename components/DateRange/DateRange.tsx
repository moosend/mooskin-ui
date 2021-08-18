import * as React from 'react';

import styles from './DateRange.css';

import 'input-moment/dist/input-moment.css';
import icons from '../../assets/mooskin-icons/mooskin-icons.css';

import InputMoment from 'input-moment';
import moment from 'moment';

import Button from '../Button';
import {H5} from '../Headings';
import Select, {Option} from '../Select';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export const rangeOptions = [
    {
        label: 'Specific Dates',
        setDate: {
            end: moment(),
            start: moment()
        },
        value: 'fixed'
    },
    {
        label: 'Last 7 Days',
        setDate: {
            end: moment(),
            start: moment().subtract(7, 'days')
        },
        value: '7-days'
    },
    {
        label: 'Last 14 Days',
        setDate: {
            end: moment(),
            start: moment().subtract(14, 'days')
        },
        value: '14-days'
    },
    {
        label: 'Last 28 Days',
        setDate: {
            end: moment(),
            start: moment().subtract(28, 'days')
        },
        value: '28-days'
    },
    {
        label: 'Last 30 Days',
        setDate: {
            end: moment(),
            start: moment().subtract(30, 'days')
        },
        value: '30-days'
    },
    {
        label: 'Yesterday',
        setDate: {
            end: moment().subtract(1, 'days'),
            start: moment().subtract(1, 'days')
        },
        value: 'yesterday'
    },
    {
        label: 'This week',
        setDate: {
            end: moment().endOf('isoWeek'),
            start: moment().startOf('isoWeek')
        },
        value: 'this-week'
    },
    {
        label: 'Week to date',
        setDate: {
            end: moment(),
            start: moment().startOf('isoWeek')
        },
        value: 'this-week-to-date'
    },
    {
        label: 'Last week',
        setDate: {
            end: moment().subtract(1, 'week').endOf('isoWeek'),
            start: moment().subtract(1, 'week').startOf('isoWeek')
        },
        value: 'last-week'
    },
    {
        label: 'This month',
        setDate: {
            end: moment().endOf('month'),
            start: moment().startOf('month')
        },
        value: 'this-month'
    },
    {
        label: 'Month to date',
        setDate: {
            end: moment(),
            start: moment().startOf('month')
        },
        value: 'this-month-to-date'
    },
    {
        label: 'Last month',
        setDate: {
            end: moment().subtract(1, 'month').endOf('month'),
            start: moment().subtract(1, 'month').startOf('month')
        },
        value: 'last-month'
    },
    {
        label: 'This quarter',
        setDate: {
            end: moment().endOf('quarter'),
            start: moment().startOf('quarter')
        },
        value: 'this-quarter'
    },
    {
        label: 'Quarter to date',
        setDate: {
            end: moment(),
            start: moment().startOf('quarter')
        },
        value: 'this-quarter-to-date'
    },
    {
        label: 'Last quarter',
        setDate: {
            end: moment().subtract(1, 'quarter').endOf('quarter'),
            start: moment().subtract(1, 'quarter').startOf('quarter')
        },
        value: 'last-quarter'
    },
    {
        label: 'This year',
        setDate: {
            end: moment().endOf('year'),
            start: moment().startOf('year')
        },
        value: 'this-year'
    },
    {
        label: 'Year to date',
        setDate: {
            end: moment(),
            start: moment().startOf('year')
        },
        value: 'this-year-to-date'
    },
    {
        label: 'Last year',
        setDate: {
            end: moment().subtract(1, 'year').endOf('year'),
            start: moment().subtract(1, 'year').startOf('year')
        },
        value: 'last-year'
    }
];

export interface IDateRangeProps{

    /** component id */
    id?: string;

    /** date passed will be the selected date */
    date: {start: moment.Moment | null, end: moment.Moment | null};

    /** show time pickers */
    showTime?: boolean;

    /** format the labeled date */
    format?: string;

    /** DateRange class */
    className?: string;

    /** daterange label */
    label?: string;

    /** with of the label within the daterange container */
    labelWidth?: number;

    /** wether this input is disabled or not */
    disabled?: boolean;

    /** daterange description (small italic bottom) */
    description?: string;

    /** override DateRange styles */
    style?: React.CSSProperties;

    /** add custom options to date range select */
    customOptions?: Array<{label: string, value: string, setDate: {start: moment.Moment, end: moment.Moment}}>;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (data: IInputCallbackData) => void;
}

export interface IDateRangeState{
    displayPicker: boolean;
    option: string;
    date: {start: moment.Moment | null, end: moment.Moment | null};
    alteredLeft: number;
}

export default class DateRange extends React.Component<IDateRangeProps, IDateRangeState>{

    static defaultProps = {
        className: '',
        date: {start: moment(), end: moment()},
        format: 'DD MMM YYYY',
        placeholder: 'Please select date...',
        showTime: false,
        style: {}
    };

    static displayName = 'DateRange';

    daterangeRef = React.createRef<any>();

    constructor(props: IDateRangeProps){
        super(props);

        this.state = {
            alteredLeft: 0,
            date: this.setInitialDate(),
            displayPicker: false,
            option: ''
        };
    }

    componentDidUpdate(prevProps: IDateRangeProps, prevState: IDateRangeState){
        if ((prevState.option !== this.state.option) && (this.state.option !== 'fixed')){
            this.setNewRange();
        }

        if (
            prevState.displayPicker === true &&
            this.state.displayPicker === false &&
            this.props.date &&
            this.props.date.end !== null &&
            this.props.date.start !== null
        ){
            this.setState({date: this.props.date});
        }

        if (prevState.displayPicker === false && this.state.displayPicker === true){
            const elemBounding = this.daterangeRef.current.getBoundingClientRect();
            const boundingRight = elemBounding.right;
            const windowWidth = (window.innerWidth || document.documentElement.clientWidth) - 30;
            if (boundingRight >= windowWidth) {
                this.setState({alteredLeft: boundingRight - windowWidth});
            }
        }
    }

    render(){
        return this.renderDateRange();
    }

    renderDateRange = () => {

        const displayPicker = !this.state.displayPicker ? 'none' : 'block';
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        // const value = this.props.date ? moment(this.props.date).format(this.props.format) : undefined;
        const {description} = this.props;

        return(
            <div
                id={this.props.id}
                className={`daterange-component ${this.props.className} ${styles.dateRange} ${this.props.showTime ? '' : 'hideTime'}`}
                style={this.props.style}
            >
                {this.props.label && <label className={styles.label} style={spacing} >{this.props.label}</label>}
                <div className={styles.wrapper} style={{position: 'relative'}}>
                    {this.renderInput()}
                    {description && <i className={`${styles.description}`}>{description}</i>}
                    <div className={styles.rangeCalendar} style={{display: displayPicker, left: 0 - this.state.alteredLeft}} ref={this.daterangeRef}>
                        <Select
                            selected={this.state.option}
                            alternate
                            alternateStyleColor
                            className={styles.dateRangeSelect}
                            onChange={this.onSelectChange}
                        >
                            {this.renderOptions()}
                        </Select>
                        <div style={{display: 'flex', background: '#fff', justifyContent: 'space-around', borderTop: '1px solid #bebebe'}}>
                            <H5 style={{margin: 5}}>Start</H5>
                            <H5 style={{margin: 5}}>End</H5>
                        </div>
                        <div style={{display: 'flex'}}>
                            <InputMoment
                                moment={moment(this.state.date.start || '') || moment()}
                                onChange={(date: moment.Moment) => this.onStartDateChange(date)}
                            />
                            <div style={{width: 1, background: '#bebebe'}} />
                            <InputMoment
                                moment={moment(this.state.date.end || '') || moment()}
                                onChange={(date: moment.Moment) => this.onEndDateChange(date)}
                            />
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button inverseStyle onClick={this.onRemove}>Remove</Button>
                            <Button style={{marginLeft: 10}} onClick={this.onApply}>Apply</Button>
                        </div>
                        <div className={styles.cover} onClick={this.toggle}/>
                    </div>
                </div>
                <i onClick={this.toggle} className={`${icons.mooskinIcons} ${styles.icon}`} >event_available</i>
            </div>
        );
    }

    renderInput = () => {
        const disabledClasses = !this.props.disabled ? '' : styles.disabled;
        const {date, format} = this.props;
        const start = date && date.start && moment(date.start).format(format);
        const end = date && date.end && moment(date.end).format(format);
        const value = start === null || end === null ? 'No Dates Selected' : `${start} - ${end}`;
        return (
            <input
                readOnly
                value={value}
                onClick={this.toggle}
                className={`${styles.dateInput} ${disabledClasses}`}
                disabled={this.props.disabled}
            />
        );
    }

    onStartDateChange = (date: moment.Moment) => {
        console.log(date);
        if (this.state.date.end && date.isAfter(this.state.date.end)){
            this.setState({date: { end: date, start: this.state.date.end}, option: 'fixed'});
        } else {
            this.setState({date: {...this.state.date, start: date}, option: 'fixed'});
        }
    }

    onEndDateChange = (date: moment.Moment) => {
        console.log(date);
        if (this.state.date.start && date.isBefore(this.state.date.start)){
            this.setState({date: { end: this.state.date.start, start: date}, option: 'fixed'});
        } else {
            this.setState({date: {...this.state.date, end: date}, option: 'fixed'});
        }
    }

    onApply = () => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value: this.state.date, dataLabel: this.props.dataLabel});
        this.setState({displayPicker: false, alteredLeft: 0});
    }

    onRemove = () => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value: {start: null, end: null}, dataLabel: this.props.dataLabel});
        this.setState({displayPicker: false, date: {start: moment(), end: moment()}, alteredLeft: 0});
    }

    toggle = () => {
        this.setState({displayPicker: !this.state.displayPicker, alteredLeft: 0});
    }

    renderOptions = () => {
        const options = this.props.customOptions ? rangeOptions.concat(this.props.customOptions) : rangeOptions;
        return options.map((option) => {
            return (
                <Option key={option.value} value={option.value}>{option.label}</Option>
            );
        });
    }

    onSelectChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        this.setState({option: data.value});
    }

    setNewRange = () => {
        const options = this.props.customOptions ? rangeOptions.concat(this.props.customOptions) : rangeOptions;
        const option = options.find((item) => {
            return item.value === this.state.option;
        });
        option && option.setDate && !this.props.disabled &&
        this.setState({date: option.setDate});
    }

    setInitialDate = () => {
        if (this.props.date && this.props.date.end && this.props.date.start){
            return {
                end: this.props.date.end,
                start: this.props.date.start
            };
        }
        return {start: moment(), end: moment()};
    }

}
