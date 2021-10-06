import { IButtonBoxComponentProps } from '../Box/model';

export interface IButtonComponentProps extends IButtonBoxComponentProps {
	/** Button href */
	href?: string;

	/** Button size */
	buttonSize?: 'lg' | 'md' | 'sm';
}
