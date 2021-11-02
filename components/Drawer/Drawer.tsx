import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IDrawerComponentProps, IDrawerContentComponentProps, IDrawerOverlayComponentProps } from './model';

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
	StyledDrawerOverlayFadeOut
} from './styles';

// Transitions
import { Transition } from 'react-transition-group';
const DrawerOverlayComponents = {
	entered: StyledDrawerOverlayFadeIn,
	entering: StyledDrawerOverlayFadeIn,
	exited: null,
	exiting: StyledDrawerOverlayFadeOut,
	unmounted: null
};

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

export const Drawer: React.FC<IDrawerComponentProps> = withMooskinContext((props) => {
	const batchClickHandler = (e: React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		props.onClose && props.onClose(e);
		callback && callback(e);
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IBoxComponentProps>(child) && child.type === DrawerCloseButton) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.onClick)
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IDrawerOverlayComponentProps>(child) && child.type === DrawerOverlay) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
					key: i,
					onClick: props.closeOnOverlayClick ? (e) => batchClickHandler(e, child.props.onClick) : child.props.onClick
				} as IDrawerOverlayComponentProps);
			}

			if (React.isValidElement<IDrawerContentComponentProps>(child) && child.type === DrawerContent) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
					key: i,
					onClick: (e: React.MouseEvent<HTMLElement>) => {
						e.stopPropagation();
						child.props.onClick && child.props.onClick(e);
					},
					placement: child.props.placement ? child.props.placement : props.placement,
					size: child.props.size ? child.props.size : props.size
				} as IDrawerContentComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return <StyledDrawer {...props} children={recurseChildren(props.children)} />;
});

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
export const DrawerContent: React.FC<IDrawerContentComponentProps> = withMooskinContext((props) => {
	const DrawerByPlacement = props.placement && ContentByPosition[props.placement];

	if (!DrawerByPlacement) {
		return null;
	}

	const DrawerContentComponent = props.isOpen ? DrawerByPlacement.in : DrawerByPlacement.out;

	return <DrawerContentComponent {...props} />;
});

DrawerContent.defaultProps = {
	className: '',
	style: {}
};

DrawerContent.displayName = 'DrawerContent';

/**
 * DrawerHeader
 */
export const DrawerHeader: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledDrawerHeader boxAs="header" {...props} />;
});

DrawerHeader.defaultProps = {
	className: '',
	style: {}
};

DrawerHeader.displayName = 'DrawerHeader';

/**
 * DrawerBody
 */
export const DrawerBody: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledDrawerBody {...props} />;
});

DrawerBody.defaultProps = {
	className: '',
	style: {}
};

DrawerBody.displayName = 'DrawerBody';

/**
 * DrawerFooter
 */
export const DrawerFooter: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledDrawerFooter boxAs="footer" {...props} />;
});

DrawerFooter.defaultProps = {
	className: '',
	style: {}
};

DrawerFooter.displayName = 'DrawerFooter';

/**
 * DrawerCloseButton
 */
export const DrawerCloseButton: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledDrawerCloseButton {...props} children="close" className={`notranslate ${props.className}`} />;
});

DrawerCloseButton.defaultProps = {
	className: '',
	style: {}
};

DrawerCloseButton.displayName = 'DrawerCloseButton';

/**
 * DrawerOverlay
 */
export const DrawerOverlay: React.FC<IDrawerOverlayComponentProps> = withMooskinContext((props) => {
	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.isOpen} timeout={145}>
			{(state) => {
				const DrawerOverlayComponent = DrawerOverlayComponents[state];
				if (DrawerOverlayComponent) {
					return <DrawerOverlayComponent boxShadow="base" round="xs" {...props} />;
				}
				return null;
			}}
		</Transition>
	);
});

DrawerOverlay.defaultProps = {
	className: '',
	style: {}
};

DrawerOverlay.displayName = 'DrawerOverlay';
