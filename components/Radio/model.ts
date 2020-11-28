import { IInputCallbackData } from '../index';

export interface IRadioComponentProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** radio id attribute */
    id?: string;

    /** provide to make the radio disabled */
    disabled?: boolean;

    /** wether the radio is selected or not */
    selected: boolean;

    /** value for this radio */
    value: string | number;

    /** Radio class */
    className?: string;

    /** override Radio styles */
    style?: React.CSSProperties;

    /** radio label */
    label: string;

    /** radio description */
    description?: string;
}
