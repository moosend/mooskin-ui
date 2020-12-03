import { IBoxComponentProps } from '../Box/model';

export interface ILabelComponentProps extends IBoxComponentProps {
    /** Label children */
    children: string;

    /** Make Label disabled */
    disabled?: boolean;

    /** Label width */
    width?: number;

    /** Label primary color */
    primaryColor?: string;

    /** callback that is called when the Label is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
