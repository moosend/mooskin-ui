import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';

export interface ICheckboxComponentProps extends IBoxComponentProps {
	/** onClick event handler when a checkbox is clicked */
	onClickCheckbox?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;

	/** provide to make the Checkbox disabled */
	disabled?: boolean;

	/** wether the CheckSbox is checked or not */
	checked?: boolean;
}

export interface ICheckboxIconComponentProps extends IBoxComponentProps {
	/** provide to make the Checkbox disabled */
	disabled?: boolean;
	checked?: boolean;
}
