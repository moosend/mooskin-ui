export interface IAnchorComponentProps {
    /** Anchor id attribute */
    id?: string;

    /** Anchor className */
    className?: string;

    /** Override Anchor styles */
    style?: React.CSSProperties;

    /** Provide to make the Anchor disabled */
    disabled?: boolean;

    /** Anchor href */
    href: string;

    /** Anchor target */
    target?: string;

    /** Callback that's called when the Anchor is clicked */
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}
