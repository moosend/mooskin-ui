import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';

export interface IActionsDropdownComponentProps extends IBoxComponentProps {
	/** callback called when clicking a ActionsDropdown item */
	onClickItem?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IActionsDropdownItemComponentProps extends IBoxComponentProps {
	/** data label returned in callback fn */
	dataLabel?: any;

	/** value returned in callback fn */
	value?: any;
}
