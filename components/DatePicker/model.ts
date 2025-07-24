import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { IInputComponentProps } from '../Input/model';
import { TextFieldProps } from '@mui/material/TextField';
import dayjs from 'dayjs';

export interface IDatePickerCommonProps {
	value: dayjs.Dayjs | null;
	inputComponentProps?: IInputComponentProps;
	format?: string;
	inputProps?: Partial<TextFieldProps>;
}

export interface IDatePickerComponentProps<TInputDate = any, TDate = any>
	extends IDatePickerCommonProps,
		Omit<DatePickerProps<dayjs.Dayjs, dayjs.Dayjs>, 'onChange' | 'renderInput'> {
	onChange?: (value: dayjs.Dayjs | null) => void;
}
export interface IDatePickerKeyboardComponentProps<TInputDate = any, TDate = any>
	extends IDatePickerCommonProps,
		Omit<DatePickerProps<dayjs.Dayjs, dayjs.Dayjs>, 'onChange'> {
	onChange?: (value: dayjs.Dayjs | null) => void;
}
