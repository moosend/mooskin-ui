import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { IInputComponentProps } from '../Input/model';
import { DatePickerValue } from '../DatePicker/model';

export interface IDateTimePickerCommonProps {
	value?: DatePickerValue;
	inputComponentProps?: IInputComponentProps;
	ampm?: boolean;
	/** Display format, passed to MUI as inputFormat. */
	format?: string;
}

type DateTimePickerPassthrough = Omit<DateTimePickerProps<Date, Date>, 'onChange' | 'renderInput' | 'value' | 'inputFormat'>;

export interface IDateTimePickerComponentProps extends IDateTimePickerCommonProps, DateTimePickerPassthrough {
	onChange?: (value: DatePickerValue) => void;
}

export interface IDateTimePickerKeyboardComponentProps extends IDateTimePickerCommonProps, DateTimePickerPassthrough {
	onChange?: (value: DatePickerValue) => void;
}
