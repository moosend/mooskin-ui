import { IAnchorBoxComponentProps } from '../Box/model';

export interface IAnchorComponentProps extends IAnchorBoxComponentProps {
    /** Provide to make the Anchor disabled */
    disabled?: boolean;

    /** Callback that's called when the Anchor is clicked */
    onClickAnchor?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}
