import type { ILabelComponentProps } from '../Label/Model';

export interface INumberLabelComponentProps extends ILabelComponentProps {
	/** abbreviate numerical value */
	abbreviate?: boolean;

	/** abbreviation accurancy */
	abbrAccuracy?: number;

	/** round numerical value */
	roundNumber?: boolean;

	/** rounding accuracy */
	roundAccuracy?: 'high' | 'low';
}
