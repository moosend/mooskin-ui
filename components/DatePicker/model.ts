import {DatePickerProps, KeyboardDatePickerProps} from '@material-ui/pickers';
import { IInputComponentProps } from '../Input/model';

export type PickerType = 'date' | 'date-keyboard';

export interface IDatePickerCommonProps {
    inputComponentProps?: IInputComponentProps;
    pickerType?: PickerType;
}

export interface IDatePickerComponentProps extends IDatePickerCommonProps, DatePickerProps {}
export interface IDatePickerKeyboardComponentProps extends IDatePickerCommonProps, KeyboardDatePickerProps {}
