import { IDivBoxComponentProps } from '../Box/model';

export interface ISelectorComponentProps extends IDivBoxComponentProps{
    /** active Selector item */
    activeItem?: string;

    /** callback called when clicking a Selector item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string) => void;
}

export interface ISelectorItemComponentProps extends IDivBoxComponentProps{
    /** value returned in callback fn */
    value?: string;

    /** whether the item is active */
    active?: boolean;

    /** callback called when clicking a Selector item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string) => void;
}
