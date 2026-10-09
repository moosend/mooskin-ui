import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { TextFieldProps } from '@mui/material/TextField';

/** Value type for pickers that use AdapterDateFns. */
export type DatePickerValue = Date | null;

export interface IDatePickerCommonProps {
	value?: DatePickerValue;
	/** Display format, passed to MUI as inputFormat. */
	format?: string;
	inputProps?: Partial<TextFieldProps>;
}

type DatePickerPassthrough = Omit<DatePickerProps<Date, Date>, 'onChange' | 'renderInput' | 'value' | 'inputFormat'>;

export interface IDatePickerComponentProps extends IDatePickerCommonProps, DatePickerPassthrough {
	onChange?: (value: DatePickerValue) => void;
}

export interface IDatePickerKeyboardComponentProps extends IDatePickerCommonProps, DatePickerPassthrough {
	onChange?: (value: DatePickerValue) => void;
}
