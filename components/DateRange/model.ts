import { DateRangePickerProps } from 'react-date-range';
import { IBoxComponentProps } from '../Box/model';
import { IInputComponentProps } from '../Input/model';

export interface IDateRangePickerComponentProps extends DateRangePickerProps {
	inputProps?: IInputComponentProps;
	pickerWrapperProps?: IBoxComponentProps;
	wrapperProps?: IBoxComponentProps;
}

export interface IRangeSelection {
	endDate: Date;
	key: string;
	startDate: Date;
}
