import * as React from 'react';
import { IBoxComponentProps } from '../Box/model';

import { IDrawerCloseButtonComponentProps, IDrawerComponentProps, IDrawerContentComponentProps, IDrawerOverlayComponentProps } from './model';

import {
    StyledDrawer,
    StyledDrawerBody,
    StyledDrawerCloseButton,
    StyledDrawerContentBottomIn,
    StyledDrawerContentBottomOut,
    StyledDrawerContentLeftIn,
    StyledDrawerContentLeftOut,
    StyledDrawerContentRightIn,
    StyledDrawerContentRightOut,
    StyledDrawerContentTopIn,
    StyledDrawerContentTopOut,
    StyledDrawerFooter,
    StyledDrawerHeader,
    StyledDrawerOverlayFadeIn,
    StyledDrawerOverlayFadeOut,
} from './styles';

const ContentByPosition = {
    bottom: {
        in: StyledDrawerContentBottomIn,
        out: StyledDrawerContentBottomOut
    },
    left: {
        in: StyledDrawerContentLeftIn,
        out: StyledDrawerContentLeftOut
    },
    right: {
        in: StyledDrawerContentRightIn,
        out: StyledDrawerContentRightOut
    },
    top: {
        in: StyledDrawerContentTopIn,
        out: StyledDrawerContentTopOut
    }
};

export const Drawer: React.FC<IDrawerComponentProps> = (props) => {

    const recurseChildren = (children: any): any => {
        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<IDrawerCloseButtonComponentProps>(child) && child.type === DrawerCloseButton){
                return React.cloneElement(child, {
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: child.props.onClick ? child.props.onClick : props.onClose
                } as any);
            }

            if (React.isValidElement<IDrawerOverlayComponentProps>(child) && child.type === DrawerOverlay){
                return React.cloneElement(child, {
                    children: recurseChildren((child.props as any).children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClick: props.closeOnOverlayClick ? child.props.onClick ? child.props.onClick : props.onClose : undefined
                } as any);
            }

            if (React.isValidElement<IDrawerContentComponentProps>(child) && child.type === DrawerContent){
                return React.cloneElement(child, {
                    children: recurseChildren((child.props as any).children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLElement>) => e.stopPropagation(),
                    placement: props.placement,
                    size: child.props.size ? child.props.size : props.size,
                } as any);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return (
        <StyledDrawer {...props}>
            {props.children && recurseChildren(props.children)}
        </StyledDrawer>
    );
};

Drawer.defaultProps = {
    className: '',
    closeOnOverlayClick: true,
    placement: 'right',
    size: 'sm',
    style: {}
};

/**
 * DrawerContent
 */
export const DrawerContent: React.FC<IDrawerContentComponentProps> = (props) => {
    const DrawerByPlacement = props.placement && ContentByPosition[props.placement];

    if (!DrawerByPlacement){
        return null;
    }

    const DrawerContentComponent = props.isOpen ? DrawerByPlacement.in : DrawerByPlacement.out;

    return (
        <DrawerContentComponent {...props}>
            {props.children}
        </DrawerContentComponent>
    );
};

DrawerContent.defaultProps = {
    className: '',
    style: {}
};

/**
 * DrawerHeader
 */
export const DrawerHeader: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledDrawerHeader {...props} boxAs="header">
            {props.children}
        </StyledDrawerHeader>
    );
};

DrawerHeader.defaultProps = {
    className: '',
    style: {}
};

/**
 * DrawerBody
 */
export const DrawerBody: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledDrawerBody {...props}>
            {props.children}
        </StyledDrawerBody>
    );
};

DrawerBody.defaultProps = {
    className: '',
    style: {}
};

/**
 * DrawerFooter
 */
export const DrawerFooter: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledDrawerFooter {...props} boxAs="footer">
            {props.children}
        </StyledDrawerFooter >
    );
};

DrawerFooter .defaultProps = {
    className: '',
    style: {}
};

/**
 * DrawerCloseButton
 */
export const DrawerCloseButton: React.FC<IDrawerCloseButtonComponentProps> = (props) => {
    return (
        <StyledDrawerCloseButton {...props} children="close" />
    );
};

DrawerCloseButton .defaultProps = {
    className: '',
    style: {}
};

/**
 * DrawerOverlay
 */
export const DrawerOverlay: React.FC<IDrawerOverlayComponentProps> = (props) => {

    const [show, setShow] = React.useState(props.isOpen);

    React.useEffect(() => {
        if (props.isOpen){
            setShow(true);
        } else {
            setTimeout(() => {
                setShow(false);
            }, 200);
        }
    }, [props.isOpen]);

    const DrawerOverlayComponent = props.isOpen ? StyledDrawerOverlayFadeIn : StyledDrawerOverlayFadeOut;

    if (show){
        return (
            <DrawerOverlayComponent {...props} />
        );
    }

    return null;

};

DrawerOverlay.defaultProps = {
    className: '',
    style: {}
};

export default Drawer;
