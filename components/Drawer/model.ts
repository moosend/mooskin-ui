import { IDivBoxComponentProps } from '../Box/model';

export type IContentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface IDrawerComponentProps extends IDivBoxComponentProps {
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
    onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IDrawerContentComponentProps extends IDivBoxComponentProps {
    /** whether the Drawer is open or not */
    isOpen?: boolean;

    /** size of the Drawer */
    size?: IContentSize;

    /** placement of the Drawer Content */
    placement?: 'bottom' | 'left' | 'right' | 'top';
}

export interface IDrawerOverlayComponentProps extends IDivBoxComponentProps {
    /** whether the Drawer is open or not */
    isOpen?: boolean;

    /** callback when clicking the drawer overlay */
    onClickOverlay?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IDrawerCloseButtonComponentProps extends IDivBoxComponentProps {
    /** callback when clicking the drawer overlay */
    onClickButton?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
