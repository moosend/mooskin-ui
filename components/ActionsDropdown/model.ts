import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IDivBoxComponentProps } from '../Box/model';

export interface IActionsDropdownComponentProps extends IDivBoxComponentProps{
    /** callback called when clicking a ActionsDropdown item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IActionsDropdownItemComponentProps extends IDivBoxComponentProps{
    /** data label returned in callback fn */
    dataLabel?: any;

    /** value returned in callback fn */
    value?: any;

    /** callback called when clicking a ActionsDropdown item */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IActionsDropdownArrowComponentProps extends IDivBoxComponentProps{
    /** direction of the Arrow */
    arrowDirection?: 'up' | 'down';

    /** color of the Arrow */
    arrowColor?: string;
}
