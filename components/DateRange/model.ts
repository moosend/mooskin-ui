import type { DateRangePickerProps } from 'react-date-range';
import type { IBoxComponentProps } from '../Box/model';
import type { IInputComponentProps } from '../Input/model';

export interface IDateRangePickerComponentProps extends DateRangePickerProps {
	inputProps?: IInputComponentProps;
	pickerWrapperProps?: IBoxComponentProps;
	wrapperProps?: IBoxComponentProps;
	inputContainerPrpps?: IBoxComponentProps;
	customComponent?: JSX.Element;
	format?: string;
}

export interface IRangeSelection {
	endDate: Date;
	key: string;
	startDate: Date;
}
