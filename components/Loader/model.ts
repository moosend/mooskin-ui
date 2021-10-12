import { IBoxComponentProps } from '../Box/model';

export interface ILoaderComponentProps extends IBoxComponentProps {
	/** Size of the loader */
	size?: number | string;

	/** width of the spinner */
	spinnerWidth?: string | number;
}
