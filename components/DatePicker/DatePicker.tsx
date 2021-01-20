import * as React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import {Input} from '../Input/Input';

import { IDatePickerComponentProps } from './model';

export const DatePicker: React.FC<IDatePickerComponentProps> = (props) => {

    const {inputProps} = props;

    const renderInput = (dateInputProps: any) => (
        <Input {...dateInputProps} {...inputProps}/>
    );

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker {...props} TextFieldComponent={renderInput} />
        </MuiPickersUtilsProvider>
    );
};

DatePicker.defaultProps = {
    ampm: false,
    format: 'dd MM yyyy HH:ss'
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
