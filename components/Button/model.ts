import { IButtonBoxComponentProps } from '../Box/model';

export interface IButtonComponentProps extends IButtonBoxComponentProps {
	/** Button href */
	href?: string;

	/** Anchor target, used when href is set */
	target?: '_blank' | '_self' | '_parent' | '_top' | string;

	/** Native tooltip text. Mapped to the title attribute. */
	tooltip?: string;

	/** Button size */
	buttonSize?: 'lg' | 'md' | 'sm';
	name?: string | undefined;
}
