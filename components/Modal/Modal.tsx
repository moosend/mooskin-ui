import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { IModalCloseButtonComponentProps, IModalComponentProps, IModalContentComponentProps, IModalOverlayComponentProps } from './model';

// Styled Components
import {
    StyledModal,
    StyledModalBody,
    StyledModalCloseButton,
    StyledModalContentFadeIn,
    StyledModalContentFadeOut,
    StyledModalFooter,
    StyledModalHeader,
    StyledModalOverlayFadeIn,
    StyledModalOverlayFadeOut
} from './styles';

export const Modal: React.FC<IModalComponentProps> = (props) => {

    const batchClickHandler = (e: React.MouseEvent<HTMLDivElement>, callback?: (e: React.MouseEvent<HTMLDivElement>) => void) => {
        props.onClose && props.onClose(e);
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<IModalCloseButtonComponentProps>(child) && child.type === ModalCloseButton){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    key: i,
                    onClickButton: (e) => batchClickHandler(e, child.props.onClickButton)
                } as IModalCloseButtonComponentProps);
            }

            if (React.isValidElement<IModalOverlayComponentProps>(child) && child.type === ModalOverlay){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClickOverlay: props.closeOnOverlayClick ?
                                (e) => batchClickHandler(e, child.props.onClickOverlay) :
                                undefined
                } as IModalOverlayComponentProps);
            }

            if (React.isValidElement<IModalContentComponentProps>(child) && child.type === ModalContent){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation();
                        child.props.onClick && child.props.onClick(e);
                    }
                } as IModalContentComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledModal {...props} children={recurseChildren(props.children)} />;
};

Modal.defaultProps = {
    className: '',
    closeOnOverlayClick: true,
    style: {}
};

Modal.displayName = 'Modal';

/**
 * ModalContent
 */
export const ModalContent: React.FC<IModalContentComponentProps> = (props) => {
    const ModalContentComponent = props.isOpen ? StyledModalContentFadeIn : StyledModalContentFadeOut;
    return <ModalContentComponent {...props} />;
};

ModalContent.defaultProps = {
    className: '',
    style: {}
};

ModalContent.displayName = 'ModalContent';

/**
 * ModalHeader
 */
export const ModalHeader: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledModalHeader boxAs="header" {...props} />;
};

ModalHeader.defaultProps = {
    className: '',
    style: {}
};

ModalHeader.displayName = 'ModalHeader';

/**
 * ModalBody
 */
export const ModalBody: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledModalBody {...props} />;
};

ModalBody.defaultProps = {
    className: '',
    style: {}
};

ModalBody.displayName = 'ModalBody';

/**
 * ModalFooter
 */
export const ModalFooter: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledModalFooter boxAs="footer" {...props} />;
};

ModalFooter .defaultProps = {
    className: '',
    style: {}
};

ModalFooter.displayName = 'ModalFooter';

/**
 * ModalCloseButton
 */
export const ModalCloseButton: React.FC<IModalCloseButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickButton && props.onClickButton(e);
        props.onClick && props.onClick(e);
    };
    return <StyledModalCloseButton {...props} children="close" onClick={onClick} />;
};

ModalCloseButton .defaultProps = {
    className: '',
    style: {}
};

ModalCloseButton.displayName = 'ModalCloseButton';

/**
 * ModalOverlay
 */
export const ModalOverlay: React.FC<IModalOverlayComponentProps> = (props) => {

    const [show, setShow] = React.useState(props.isOpen);

    React.useEffect(() => {
        if (props.isOpen){
            setShow(true);
        } else {
            setTimeout(() => {
                setShow(false);
            }, 120);
        }
    }, [props.isOpen]);

    const ModalOverlayComponent = props.isOpen ? StyledModalOverlayFadeIn : StyledModalOverlayFadeOut;

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickOverlay && props.onClickOverlay(e);
        props.onClick && props.onClick(e);
    };

    if (show){
        return <ModalOverlayComponent {...props} onClick={onClick} />;
    }

    return null;

};

ModalOverlay.defaultProps = {
    className: '',
    style: {}
};

ModalOverlay.displayName = 'ModalOverlay';

export default Modal;
