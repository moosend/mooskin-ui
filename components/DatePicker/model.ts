import {DateTimePickerProps} from '@material-ui/pickers';
import { IInputComponentProps } from '../Input/model';

export interface IDatePickerComponentProps extends DateTimePickerProps {
    inputProps?: IInputComponentProps;
}
