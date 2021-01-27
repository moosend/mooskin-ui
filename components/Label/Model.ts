import { IDivBoxComponentProps } from '../Box/model';

export interface ILabelComponentProps extends IDivBoxComponentProps {
    /** Label children */
    children: string;

    /** Make Label disabled */
    disabled?: boolean;

    /** Label width */
    width?: number;

    /** callback that is called when the Label is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
