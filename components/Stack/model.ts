import { IBoxComponentProps } from '../Box/model';

export interface IStackComponentProps extends IBoxComponentProps {
	/** Divider element added between children */
	divider?: React.ReactElement;

	/** The space between each stack item */
	spacing?: number | string;
}
