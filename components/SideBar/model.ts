import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface ISidebarComponentProps extends IBoxComponentProps{
    /** active sidebar item */
    activeItem?: any;

    /** callback called when clicking a sidebar item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ISidebarItemComponentProps extends IBoxComponentProps{

    /** data label returned in callback fn */
    dataLabel?: any;

    /** value returned in callback fn */
    value?: any;

    /** whether the item is active */
    active?: boolean;

    /** callback called when clicking a sidebar item */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
