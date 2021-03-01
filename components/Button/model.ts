import { IButtonBoxComponentProps } from '../Box/model';

export interface IButtonComponentProps extends IButtonBoxComponentProps {
	/** Provide to inverse the Button styles */
	inverseStyle?: boolean;

	/** Button href */
	href?: string;

	/** Button size */
	buttonSize?: 'lg' | 'md' | 'sm';
}
