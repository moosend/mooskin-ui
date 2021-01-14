import { IDivBoxComponentProps } from '../Box/model';

export interface IBaseAlertComponentProps extends IDivBoxComponentProps {
    /** status of the Alert */
    status?: 'info' | 'warning' | 'success' | 'error';

    /** variant of the Alert box */
    variant?: 'subtle' | 'solid' | 'left-accent' | 'top-accent';
}
