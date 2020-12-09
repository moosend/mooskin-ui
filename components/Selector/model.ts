import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index/index';

export interface ISelectorComponentProps extends IBoxComponentProps{
    /** active Selector item */
    activeItem?: any;

    /** callback called when clicking a Selector item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ISelectorItemComponentProps extends IBoxComponentProps{

    /** data label returned in callback fn */
    dataLabel?: any;

    /** value returned in callback fn */
    value?: any;

    /** whether the item is active */
    active?: boolean;

    /** callback called when clicking a Selector item */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
