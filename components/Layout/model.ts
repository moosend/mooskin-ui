import { IBoxComponentProps } from '../Box/model';

export interface ILayoutComponentProps extends IBoxComponentProps {
	/** number of cols in a Layout */
	cols?: number;

	/** spacing between blocks */
	spacing?: number;
}
