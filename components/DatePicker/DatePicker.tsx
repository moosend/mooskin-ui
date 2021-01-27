import * as React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    DatePicker as DatePickerUI,
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

import {Input} from '../Input/Input';

import { IDatePickerComponentProps, IDatePickerKeyboardComponentProps } from './model';

const ComponentByType = {
    'date': DatePickerUI,
    'date-keyboard': KeyboardDatePicker
};

export const DatePicker: React.FC<IDatePickerComponentProps | IDatePickerKeyboardComponentProps> = (props) => {

    const {inputProps} = props;

    const renderInput = (dateInputProps: any) => <Input style={{width: '100%'}} {...dateInputProps} {...inputProps}/>;

    const PickerComponent = ComponentByType[props.pickerType];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <PickerComponent {...props} TextFieldComponent={renderInput} />
        </MuiPickersUtilsProvider>
    );
};

DatePicker.defaultProps = {
    format: 'dd/MM/yyyy HH:ss',
    pickerType: 'date',
    variant: 'inline',
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
