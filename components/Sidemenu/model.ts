import { IBoxComponentProps } from '../Box/model';

export interface ISidemenuComponentProps extends IBoxComponentProps {
	/** active Sidemenu item */
	activeItem?: string | number;

	/** callback called when clicking a Sidemenu item */
	onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string | number) => void;
}

export interface ISidemenuItemComponentProps extends IBoxComponentProps {
	/** value returned in callback fn */
	value?: string | number;

	/** whether the item is active */
	active?: boolean;
}
