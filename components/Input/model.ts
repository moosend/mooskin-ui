import { IDivBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index/index';

export interface IInputContainerComponentProps extends IDivBoxComponentProps {
    /** provide to make the input field disabled */
    disabled?: boolean;

    /** value to be passed down to the input */
    value: any;

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

    /** callback that is called when the input changes */
    onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export interface IInputIconComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the icon */
    onClickIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IInputOverlayComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the icon */
    onClickOverlay?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IInputEmojiComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the emoji */
    onChangeEmoji?: (value: string) => void;
}

export interface IInputListComponentProps extends IDivBoxComponentProps {
    /** icon to be shown for toggling the dropdown */
    icon: string;

    /** onclick event handler when clicking on the component */
    onClickOption?: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;
}

export interface IInputOptionComponentProps extends IDivBoxComponentProps {
    /** value of the clicked element */
    value: string;

    /** onclick event handler when clicking on the component */
    onClickOption?: (value: string) => void;
}
