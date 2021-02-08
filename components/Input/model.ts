import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index/index';

export interface IInputContainerComponentProps extends IBoxComponentProps {
    /** provide to make the input field disabled */
    disabled?: boolean;

    /** value to be passed down to the input */
    value?: string | number;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export interface IInputComponentProps extends IInputBoxComponentProps {
    /** provide to make the input field disabled */
    disabled?: boolean;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** min and max values for number values */
    minmax?: number[];

    /** numberType */
    numberType?: 'integer' | 'float';

    /** whether its wrapped by its container */
    wrapped?: boolean;
}

export interface IInputEmojiComponentProps extends IBoxComponentProps {
    /** onclick event handler when clicking on the emoji */
    onChangeEmoji?: (value: string) => void;
}

export interface IInputListComponentProps extends IBoxComponentProps {
    /** icon to be shown for toggling the dropdown */
    icon: string;
}

export interface IInputOptionComponentProps extends IBoxComponentProps {
    /** value of the clicked element */
    value: string;
}
