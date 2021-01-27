import { DateRangePickerProps } from 'react-date-range';
import { IDivBoxComponentProps } from '../Box/model';
import { IInputComponentProps } from '../Input/model';

export interface IDateRangePickerComponentProps extends DateRangePickerProps {
    inputProps?: IInputComponentProps;
    pickerWrapperProps: IDivBoxComponentProps;
    wrapperProps: IDivBoxComponentProps;
}

export interface IRangeSelection {
    endDate: Date;
    key: string;
    startDate: Date;
}
