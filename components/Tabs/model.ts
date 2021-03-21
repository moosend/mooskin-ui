import { IBoxComponentProps } from '../Box/model';

export interface ITabsComponentProps extends IBoxComponentProps {
	/** number of the active item or items */
	activeItem?: number | string;

	/** onclick callback when the item is clicked */
	onClickTab?: (e: React.MouseEvent<HTMLElement>, value?: number | string) => void;

	children?: React.ReactElement<ITabCommonComponentProps> | Array<React.ReactElement<ITabCommonComponentProps>>;
}

export interface ITabCommonComponentProps extends IBoxComponentProps {
	/** whether the current item is active */
	active?: boolean;
}

export interface ITabComponentProps extends ITabCommonComponentProps {
	/** identifier for togglin the tabbed item */
	activeId?: string | number;
}
