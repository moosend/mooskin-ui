import { IBoxComponentProps } from '../Box/model';

export interface IAlertComponentProps extends IBoxComponentProps {
    /** status of the Alert */
    status?: 'info' | 'warning' | 'success' | 'error';

    /** variant of the Alert box */
    variant?: 'subtle' | 'solid' | 'left-accent' | 'top-accent';
}

export interface IAlertCloseButtonComponentProps extends IAlertComponentProps {
    /** callback when clicking the close button */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
