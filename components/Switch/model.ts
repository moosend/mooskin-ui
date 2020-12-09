import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';

export interface ISwitchComponentProps extends IBoxComponentProps {
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

    /** Switch width */
    width?: number;

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
