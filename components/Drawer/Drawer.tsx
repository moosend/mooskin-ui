import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { IDrawerCloseButtonComponentProps, IDrawerComponentProps, IDrawerContentComponentProps, IDrawerOverlayComponentProps } from './model';

// Styled Components
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

    const batchClickHandler = (e: React.MouseEvent<HTMLDivElement>, callback?: (e: React.MouseEvent<HTMLDivElement>) => void) => {
        props.onClose && props.onClose(e);
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<IDrawerCloseButtonComponentProps>(child) && child.type === DrawerCloseButton){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    key: i,
                    onClickButton: (e) => batchClickHandler(e, child.props.onClickButton)
                } as IDrawerCloseButtonComponentProps);
            }

            if (React.isValidElement<IDrawerOverlayComponentProps>(child) && child.type === DrawerOverlay){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClickOverlay: props.closeOnOverlayClick ?
                                (e) => batchClickHandler(e, child.props.onClickOverlay) :
                                undefined
                } as IDrawerOverlayComponentProps);
            }

            if (React.isValidElement<IDrawerContentComponentProps>(child) && child.type === DrawerContent){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation();
                        child.props.onClick && child.props.onClick(e);
                    },
                    placement: props.placement,
                    size: child.props.size ? child.props.size : props.size,
                } as IDrawerContentComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledDrawer {...props} children={recurseChildren(props.children)} />;
};

Drawer.defaultProps = {
    className: '',
    closeOnOverlayClick: true,
    placement: 'right',
    size: 'sm',
    style: {}
};

Drawer.displayName = 'Drawer';

/**
 * DrawerContent
 */
export const DrawerContent: React.FC<IDrawerContentComponentProps> = (props) => {
    const DrawerByPlacement = props.placement && ContentByPosition[props.placement];

    if (!DrawerByPlacement){
        return null;
    }

    const DrawerContentComponent = props.isOpen ? DrawerByPlacement.in : DrawerByPlacement.out;

    return <DrawerContentComponent {...props} />;
};

DrawerContent.defaultProps = {
    className: '',
    style: {}
};

DrawerContent.displayName = 'DrawerContent';

/**
 * DrawerHeader
 */
export const DrawerHeader: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledDrawerHeader boxAs="header" {...props} />;
};

DrawerHeader.defaultProps = {
    className: '',
    style: {}
};

DrawerHeader.displayName = 'DrawerHeader';

/**
 * DrawerBody
 */
export const DrawerBody: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledDrawerBody {...props} />;
};

DrawerBody.defaultProps = {
    className: '',
    style: {}
};

DrawerBody.displayName = 'DrawerBody';

/**
 * DrawerFooter
 */
export const DrawerFooter: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledDrawerFooter boxAs="footer" {...props} />;
};

DrawerFooter .defaultProps = {
    className: '',
    style: {}
};

DrawerFooter.displayName = 'DrawerFooter';

/**
 * DrawerCloseButton
 */
export const DrawerCloseButton: React.FC<IDrawerCloseButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickButton && props.onClickButton(e);
        props.onClick && props.onClick(e);
    };
    return <StyledDrawerCloseButton {...props} children="close" onClick={onClick} />;
};

DrawerCloseButton .defaultProps = {
    className: '',
    style: {}
};

DrawerCloseButton.displayName = 'DrawerCloseButton';

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

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickOverlay && props.onClickOverlay(e);
        props.onClick && props.onClick(e);
    };

    if (show){
        return <DrawerOverlayComponent {...props} onClick={onClick} />;
    }

    return null;

};

DrawerOverlay.defaultProps = {
    className: '',
    style: {}
};

DrawerOverlay.displayName = 'DrawerOverlay';

export default Drawer;
