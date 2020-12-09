import { IBoxComponentProps } from '../Box/model';

export interface IButtonComponentProps extends IBoxComponentProps {
    /** Provide to inverse the Button styles */
    inverseStyle?: boolean;

    /** Provide to make the Button disabled */
    disabled?: boolean;

    /** Button type */
    type?: string;

    /** Button href */
    href?: string;

    /** Button size */
    size?: 'lg' | 'md' | 'sm';

    /** Callback that's called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}
