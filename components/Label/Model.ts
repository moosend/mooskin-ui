export interface ILabelComponentProps {
    /** Override Label id */
    id?: string;

    /** Label children */
    children: string;

    /** Make Label disabled */
    disabled?: boolean;

    /** Label width */
    width?: number;

    /** Label primary color */
    primaryColor?: string;

    /** Label class */
    className?: string;

    /** override Label styles */
    style?: React.CSSProperties;

    /** callback that is called when the Label is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
