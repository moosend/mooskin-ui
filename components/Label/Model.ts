import { IBoxLabelComponentProps } from '../Box/model';

export interface ILabelComponentProps extends IBoxLabelComponentProps {
	disabled?: boolean;
	limit?: number;
}
