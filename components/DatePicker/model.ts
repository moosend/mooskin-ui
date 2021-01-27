import {DatePickerProps, KeyboardDatePickerProps} from '@material-ui/pickers';
import { IInputComponentProps } from '../Input/model';

export interface IDatePickerCommonProps {
    inputComponentProps?: IInputComponentProps;
    pickerType: 'date' | 'date-keyboard';
}

export interface IDatePickerComponentProps extends IDatePickerCommonProps, DatePickerProps {}
export interface IDatePickerKeyboardComponentProps extends IDatePickerCommonProps, KeyboardDatePickerProps {}
