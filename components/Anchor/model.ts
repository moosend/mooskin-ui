import { IBoxComponentProps } from '../Box/model';

export interface IAnchorComponentProps extends IBoxComponentProps {
    /** Provide to make the Anchor disabled */
    disabled?: boolean;

    /** Anchor href */
    href: string;

    /** Anchor target */
    target?: string;

    /** Callback that's called when the Anchor is clicked */
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}
