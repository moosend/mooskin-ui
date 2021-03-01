import { IBoxComponentProps } from '../Box/model';

export interface ISelectorComponentProps extends IBoxComponentProps {
	/** active Selector item */
	activeItem?: string | number;

	/** callback called when clicking a Selector item */
	onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string | number) => void;
}

export interface ISelectorItemComponentProps extends IBoxComponentProps {
	/** value returned in callback fn */
	value?: string | number;

	/** whether the item is active */
	active?: boolean;
}
