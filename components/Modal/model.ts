import { IBoxComponentProps } from '../Box/model';

export interface IModalComponentProps extends IBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;

    /** call close callback when esc key is pressed */
    closeOnEsc?: boolean;

    /** call close callback when the overlay is clicked */
    closeOnOverlayClick?: boolean;

    /** close callback */
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IModalContentComponentProps extends IBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;
}

export interface IModalOverlayComponentProps extends IBoxComponentProps {
    /** whether the Modal is open or not */
    isOpen?: boolean;

    /** open callback */
    onOpen?: () => void;
}
