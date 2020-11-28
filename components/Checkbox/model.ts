import { IInputCallbackData } from '../index';

export interface ICheckboxComponentProps {
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** Checkbox id attribute */
    id?: string;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;

    /** Checkbox matches the selected prop from parent component */
    checked: boolean;

    /** value for this Checkbox */
    value: string | number;

    /** Checkbox class */
    className?: string;

    /** override Checkbox styles */
    style?: React.CSSProperties;

    /** Checkbox label */
    label: string;

    /** status of the checkbox, error or success (inherited from parent) */
    status?: 'error' | 'success';

    /** Checkbox description */
    description?: string;
}
