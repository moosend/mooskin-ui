import { IDivBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface IInputComponentProps extends IDivBoxComponentProps {
    /** override input value */
    value: string | number;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChangeasd?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export interface IInputElementComponentProps extends IInputBoxComponentProps {
    /** min and max values for number values */
    minmax?: number[];

    /** numberType */
    numberType?: 'integer' | 'float';
}
