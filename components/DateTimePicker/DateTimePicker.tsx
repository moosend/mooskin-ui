import * as React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

import {Input} from '../Input/Input';

import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps } from './model';

const ComponentByType = {
    'date-time': DateTimePicker,
    'date-time-keyboard': KeyboardDateTimePicker
};

export const DatePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = (props) => {

    const renderInput = (dateInputProps: any) => <Input style={{width: '100%'}} {...dateInputProps} {...props.inputComponentProps}/>;

    const PickerComponent = ComponentByType[props.pickerType];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <PickerComponent {...props} TextFieldComponent={renderInput} />
        </MuiPickersUtilsProvider>
    );
};

DatePicker.defaultProps = {
    ampm: false,
    format: 'dd/MM/yyyy HH:ss',
    pickerType: 'date-time',
    variant: 'inline'
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
