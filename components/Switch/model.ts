import { IInputCallbackData } from '../_utils/types/commonTypes';

export interface ISwitchComponentProps {
    /** Override Switch id */
    id?: string;

    /** Override Switch active label */
    onLabel?: string;

    /** Override Switch inactive label */
    offLabel?: string;

    /** Override Switch disabled label */
    disabledLabel?: string;

    /** Provide to make the Switch disabled */
    disabled?: boolean;

    /** Switch status */
    on?: boolean;

    /** Switch label */
    label?: string;

    /** switch label width */
    labelWidth?: number;

    /** what data is being used, you know on what field changes are made */
    dataLabel?: string;

    /** Switch primary color */
    primaryColor?: string;

    /** Switch secondary color */
    secondaryColor?: string;

    /** Switch width */
    width?: number;

    /** switch class */
    className?: string;

    /** override switch styles */
    style?: React.CSSProperties;

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
