import {DateTimePickerProps, KeyboardDateTimePickerProps} from '@material-ui/pickers';
import { IInputComponentProps } from '../Input/model';

export interface IDateTimePickerCommonProps {
    inputComponentProps?: IInputComponentProps;
    pickerType: 'date-time' | 'date-time-keyboard';
}

export interface IDateTimePickerComponentProps extends IDateTimePickerCommonProps, DateTimePickerProps {}
export interface IDateTimePickerKeyboardComponentProps extends IDateTimePickerCommonProps, KeyboardDateTimePickerProps {}
