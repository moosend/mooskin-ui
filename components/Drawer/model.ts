import { IBoxComponentProps } from '../Box/model';

export type IContentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface IDrawerComponentProps extends IBoxComponentProps {
    /** whether the Drawer is open or not */
    isOpen?: boolean;

    /** placement of the Drawer */
    placement?: 'bottom' | 'left' | 'right' | 'top';

    /** size of the Drawer */
    size?: IContentSize;

    /** call close callback when esc key is pressed */
    closeOnEsc?: boolean;

    /** call close callback when the overlay is clicked */
    closeOnOverlayClick?: boolean;

    /** close callback */
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;

    /** open callback */
    onOpen?: () => void;
}

export interface IDrawerContentComponentProps extends IBoxComponentProps {
    /** whether the Drawer is open or not */
    isOpen?: boolean;

    /** size of the Drawer */
    size?: IContentSize;

    /** placement of the Drawer Content */
    placement?: 'bottom' | 'left' | 'right' | 'top';
}

export interface IDrawerOverlayComponentProps extends IBoxComponentProps {
    /** whether the Drawer is open or not */
    isOpen?: boolean;

    /** open callback */
    onOpen?: () => void;
}
