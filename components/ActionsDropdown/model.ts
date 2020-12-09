import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index/index';

export interface IActionsDropdownComponentProps extends IBoxComponentProps{
    /** callback called when clicking a ActionsDropdown item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IActionsDropdownItemComponentProps extends IBoxComponentProps{

    /** data label returned in callback fn */
    dataLabel?: any;

    /** value returned in callback fn */
    value?: any;

    /** callback called when clicking a ActionsDropdown item */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IActionsDropdownArrowComponentProps extends IBoxComponentProps{
    /** direction of the Arrow */
    arrowDirection?: 'up' | 'down';

    /** color of the Arrow */
    arrowColor?: string;
}
