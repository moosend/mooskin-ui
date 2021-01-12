import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface IRadioComponentProps extends IBoxComponentProps {
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

export interface IRadioButtonComponentProps extends IBoxComponentProps {
    /** onClick event handler when clicking the radio button */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** provide to make the radio disabled */
    disabled?: boolean;
}
