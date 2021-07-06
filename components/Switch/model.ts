import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';

export interface ISwitchComponentProps extends IBoxComponentProps {
	/** text to be rendered within the switch */
	text: string;

	/** Provide to make the Switch disabled */
	disabled?: boolean;

	/** Switch status */
	active?: boolean;

	/** what data is being used, you know on what field changes are made */
	dataLabel?: string;

	/** callback that is called when the switch changes */
	onClickSwitch?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ISwitchHandleComponentProps extends IBoxComponentProps {
	/** switch width to calculate position */
	switchWidth?: any;

	/** Switch status */
	active?: boolean;

	/** what data is being used, you know on what field changes are made */
	dataLabel?: string;

	/** callback that is called when the switch changes */
	onClickSwitch?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
