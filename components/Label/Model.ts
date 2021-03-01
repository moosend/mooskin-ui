import { IBoxLabelComponentProps } from '../Box/model';

export interface ILabelComponentProps extends IBoxLabelComponentProps {
	/** Label children */
	children: string | number;

	/** Make Label disabled */
	disabled?: boolean;

	/** callback that is called when the Label is clicked */
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
