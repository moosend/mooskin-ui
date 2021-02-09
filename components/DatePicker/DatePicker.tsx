import * as React from 'react';

// Date-FNS
import DateFnsUtils from '@date-io/date-fns';

// Models
import { IDatePickerComponentProps, IDatePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Picker
import { DatePicker as DatePickerUI, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// Components
import { Input } from '../Input/Input';

const ComponentByType = {
    'date': DatePickerUI,
    'date-keyboard': KeyboardDatePicker
};

/**
 * DatePicker
 */
export const DatePicker: React.FC<IDatePickerComponentProps | IDatePickerKeyboardComponentProps> = (props) => {
    const { inputProps } = props;

    const renderInput = (dateInputProps: any) => <Input style={{ width: '100%' }} {...dateInputProps} {...inputProps} />;

    const type: PickerType = props.pickerType ? props.pickerType : 'date';

    const PickerComponent = ComponentByType[type];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <PickerComponent {...props} TextFieldComponent={renderInput} />
        </MuiPickersUtilsProvider>
    );
};

DatePicker.defaultProps = {
    format: 'dd/MM/yyyy',
    pickerType: 'date',
    variant: 'inline'
};

DatePicker.displayName = 'DatePicker';

export default DatePicker;
