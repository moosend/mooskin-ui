import { ITextAreaBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface ITextAreaComponentProps extends ITextAreaBoxComponentProps {
    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the textarea changes */
    onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>, data: IInputCallbackData) => void;
}
