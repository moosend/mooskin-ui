import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface ISidemenuComponentProps extends IBoxComponentProps{
    /** active Sidemenu item */
    activeItem?: any;

    /** callback called when clicking a Sidemenu item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ISidemenuItemComponentProps extends IBoxComponentProps{

    /** data label returned in callback fn */
    dataLabel?: any;

    /** value returned in callback fn */
    value?: any;

    /** whether the item is active */
    active?: boolean;

    /** callback called when clicking a Sidemenu item */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
