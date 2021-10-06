import { ITextAreaBoxComponentProps } from '../Box/model';

export interface ITextAreaComponentProps extends ITextAreaBoxComponentProps {
	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;
}
