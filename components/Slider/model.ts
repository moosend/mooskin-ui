import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IInputComponentProps } from '../Input/model';

export interface ISliderComponentProps extends IInputComponentProps {
	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;

	/** callback that is called when the Slider changes */
	onChangeSlider?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}
