import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface IInputComponentProps extends IBoxComponentProps {
    /** override input value */
    value: string | number;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export interface IInputElementComponentProps extends IInputBoxComponentProps {
    /** min and max values for number values */
    minmax?: number[];

    /** numberType */
    numberType?: 'integer' | 'float';
}

export interface ICustomDropdown {
    icon: string;
    title: string;
    content: JSX.Element | Element | JSX.Element[] | Element[];
    open?: boolean;
    onClick?: () => boolean | void;
}
