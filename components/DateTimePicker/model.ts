import { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { IInputComponentProps } from '../Input/model';

export type PickerType = 'date-time' | 'date-time-keyboard';

export interface IDateTimePickerCommonProps {
	inputComponentProps?: IInputComponentProps;
	pickerType?: PickerType;
	ampm?: boolean;
	format?: string;
}

export interface IDateTimePickerComponentProps<TInputDate = unknown, TDate = unknown>
	extends IDateTimePickerCommonProps,
		DateTimePickerProps<TInputDate, TDate> {}

export interface IDateTimePickerKeyboardComponentProps<TInputDate = unknown, TDate = unknown>
	extends IDateTimePickerCommonProps,
		DateTimePickerProps<TInputDate, TDate> {}
