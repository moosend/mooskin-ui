export interface IButtonComponentProps {
    /** Provide to inverse the Button styles */
    inverseStyle?: boolean;

    /** Button id attribute */
    id?: string;

    /** Button className */
    className?: string;

    /** Override Button styles */
    style?: React.CSSProperties;

    /** Provide to make the Button disabled */
    disabled?: boolean;

    /** Button type */
    type?: string;

    /** Button href */
    href?: string;

    /** See Material Icons for icon type */
    icon?: string;

    /** Button size */
    size?: 'lg' | 'md' | 'sm';

    /** Callback that's called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}
