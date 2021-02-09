import { DateTimePickerProps, KeyboardDateTimePickerProps } from '@material-ui/pickers';
import { IInputComponentProps } from '../Input/model';

export type PickerType = 'date-time' | 'date-time-keyboard';

export interface IDateTimePickerCommonProps {
    inputComponentProps?: IInputComponentProps;
    pickerType?: PickerType;
}

export interface IDateTimePickerComponentProps extends IDateTimePickerCommonProps, DateTimePickerProps {}
export interface IDateTimePickerKeyboardComponentProps extends IDateTimePickerCommonProps, KeyboardDateTimePickerProps {}
