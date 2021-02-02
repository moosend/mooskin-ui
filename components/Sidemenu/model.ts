import { IDivBoxComponentProps } from '../Box/model';

export interface ISidemenuComponentProps extends IDivBoxComponentProps{
    /** active Sidemenu item */
    activeItem?: string;

    /** callback called when clicking a Sidemenu item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string) => void;
}

export interface ISidemenuItemComponentProps extends IDivBoxComponentProps{
    /** value returned in callback fn */
    value?: string;

    /** whether the item is active */
    active?: boolean;

    /** callback called when clicking a Sidemenu item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: string) => void;
}
