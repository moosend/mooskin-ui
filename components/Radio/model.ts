import { IDivBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface IRadioComponentProps extends IDivBoxComponentProps {
    onClickRadio?: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** provide to make the radio disabled */
    disabled?: boolean;

    /** wether the radio is selected or not */
    selected: boolean;

    /** value for this radio */
    value: string | number;
}

export interface IRadioIconComponentProps extends IDivBoxComponentProps {
    /** onClick event handler when clicking the radio Icon */
    onClickIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** provide to make the radio disabled */
    disabled?: boolean;
}
