import * as React from 'react';

// Date-FNS
import DateFnsUtils from '@date-io/date-fns';

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Time Picker
import {
    DateTimePicker as DateTimePickerUI,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

// Components
import {Input} from '../Input/Input';

const ComponentByType = {
    'date-time': DateTimePickerUI,
    'date-time-keyboard': KeyboardDateTimePicker
};

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = (props) => {

    const renderInput = (dateInputProps: any) => <Input style={{width: '100%'}} {...dateInputProps} {...props.inputComponentProps}/>;

    const type: PickerType = props.pickerType ? props.pickerType : 'date-time';

    const PickerComponent = ComponentByType[type];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <PickerComponent {...props} TextFieldComponent={renderInput} />
        </MuiPickersUtilsProvider>
    );
};

DateTimePicker.defaultProps = {
    ampm: false,
    format: 'dd/MM/yyyy HH:ss',
    pickerType: 'date-time',
    variant: 'inline'
};

DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;
