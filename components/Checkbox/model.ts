import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface ICheckboxComponentProps extends IBoxComponentProps {
    onClickCheckbox?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;

    /** wether the Checkbox is checked or not */
    checked: boolean;

    /** value for this Checkbox */
    value: string | number;
}

export interface ICheckboxButtonComponentProps extends IBoxComponentProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;
}
