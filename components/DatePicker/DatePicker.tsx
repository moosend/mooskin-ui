import * as React from 'react';

// import '../../node_modules/input-moment/dist/input-moment.css';
import 'input-moment/dist/input-moment.css';
import styles from './DatePicker.css';

import InputMoment from 'input-moment';
import moment from 'moment';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface IDateProps{

    /** date passed will be the selected date */
    date?: any;

    /** format the labeled date */
    format?: string;

    /** DatePicker class */
    className?: string;

    /** datepicker label */
    label?: string;

    /** wether this input is disabled or not */
    disabled?: boolean;

    /** wether this input is required or not */
    required?: boolean;

    /** override DatePicker styles */
    style?: React.CSSProperties;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (data: IInputCallbackData) => void;
}

export interface IDateState{
    date: string;
    displayPicker: boolean;
}

export default class DatePicker extends React.Component<IDateProps, IDateState>{

    public static defaultProps = {
        className: '',
        format: 'DD MMM YYYY, H:mm',
        style: {}
    };

    constructor(props: IDateProps){
        super(props);

        this.state = {
            date: this.props.date || moment(),
            displayPicker: false
        };
    }

    public render(){

        const displayPicker = !this.state.displayPicker ? 'none' : 'block';
        const labelStyles = !this.props.label ? {display: 'none'} : {};
        const disabledClasses = !this.props.disabled ? '' : styles.disabled;

        return(
            <div
                className={`datepicker-component ${this.props.className} ${styles.datePicker}`}
                style={this.props.style}
            >
                <label className={styles.label} style={labelStyles}>{this.props.label}</label>
                <div className={styles.wrapper}>
                    <input
                        readOnly
                        value={moment(this.state.date).format(this.props.format)}
                        onClick={this.toggle}
                        className={`${styles.dateInput} ${disabledClasses}`}
                        required={this.props.required}
                        disabled={this.props.disabled}
                    />
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

    private onChange = (date: any) => {
        this.setState({date});
        // !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange({value: this.state.date, dataLabel: this.props.dataLabel});
    }

    private toggle = () => {
        this.setState({displayPicker: !this.state.displayPicker});
    }

}
