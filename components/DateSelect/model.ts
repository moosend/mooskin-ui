import { ISelectComponentProps } from '../Select/model';

export interface IDateSelectComponentProps extends ISelectComponentProps {
	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;

	format?: string;

	type: 'hour' | 'minute' | 'month' | 'week' | 'ordinal';

	placeholder?: string;
}
