import { IDivBoxComponentProps } from '../Box/model';

export interface IModalComponentProps extends IDivBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;

    /** call close callback when esc key is pressed */
    closeOnEsc?: boolean;

    /** call close callback when the overlay is clicked */
    closeOnOverlayClick?: boolean;

    /** close callback */
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModalContentComponentProps extends IDivBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;
}

export interface IModalOverlayComponentProps extends IDivBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;

    /** callback when clicking the Modal overlay */
    onClickOverlay?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModalCloseButtonComponentProps extends IDivBoxComponentProps {
    /** callback when clicking the Modal overlay */
    onClickButton?: (e: React.MouseEvent<HTMLElement>) => void;
}
