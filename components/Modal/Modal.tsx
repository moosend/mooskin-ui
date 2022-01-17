import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IModalComponentProps, IModalContentComponentProps, IModalOverlayComponentProps } from './model';

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

// Transitions
import { Transition } from 'react-transition-group';
const ModalOverlayComponents = {
	entered: StyledModalOverlayFadeIn,
	entering: StyledModalOverlayFadeIn,
	exited: null,
	exiting: StyledModalOverlayFadeOut,
	unmounted: null
};

/**
 * Modal
 */
export const Modal: React.FC<IModalComponentProps> = withMooskinContext((props) => {
	const batchClickHandler = (e: React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		props.onClose && props.onClose(e);
		callback && callback(e);
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ModalCloseButton) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.onClick)
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IModalOverlayComponentProps>(child) && child.type === ModalOverlay) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
					key: i,
					onClick: props.closeOnOverlayClick ? (e) => batchClickHandler(e, child.props.onClick) : child.props.onClick
				} as IModalOverlayComponentProps);
			}

			if (React.isValidElement<IModalContentComponentProps>(child) && child.type === ModalContent) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					isOpen: child.props.isOpen ? child.props.isOpen : props.isOpen,
					key: i,
					onClick: (e: React.MouseEvent<HTMLElement>) => {
						e.stopPropagation();
						child.props.onClick && child.props.onClick(e);
					}
				} as IModalContentComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return <StyledModal {...props} children={recurseChildren(props.children)} />;
});

Modal.defaultProps = {
	className: '',
	closeOnOverlayClick: true,
	style: {}
};

Modal.displayName = 'Modal';

/**
 * ModalContent
 */
export const ModalContent: React.FC<IModalContentComponentProps> = withMooskinContext((props) => {
	const ModalContentComponent = props.isOpen ? StyledModalContentFadeIn : StyledModalContentFadeOut;
	return <ModalContentComponent {...props} />;
});

ModalContent.defaultProps = {
	className: '',
	style: {}
};

ModalContent.displayName = 'ModalContent';

/**
 * ModalHeader
 */
export const ModalHeader: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledModalHeader boxAs="header" {...props} />;
});

ModalHeader.defaultProps = {
	className: '',
	style: {}
};

ModalHeader.displayName = 'ModalHeader';

/**
 * ModalBody
 */
export const ModalBody: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledModalBody {...props} />;
});

ModalBody.defaultProps = {
	className: '',
	style: {}
};

ModalBody.displayName = 'ModalBody';

/**
 * ModalFooter
 */
export const ModalFooter: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledModalFooter boxAs="footer" {...props} />;
});

ModalFooter.defaultProps = {
	className: '',
	style: {}
};

ModalFooter.displayName = 'ModalFooter';

/**
 * ModalCloseButton
 */
export const ModalCloseButton: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledModalCloseButton {...props} children="close" className={`notranslate ${props.className}`} />;
});

ModalCloseButton.defaultProps = {
	className: '',
	style: {}
};

ModalCloseButton.displayName = 'ModalCloseButton';

/**
 * ModalOverlay
 */
export const ModalOverlay: React.FC<IModalOverlayComponentProps> = withMooskinContext((props) => {
	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.isOpen} timeout={150}>
			{(state) => {
				const ModalOverlayComponent = ModalOverlayComponents[state];
				if (ModalOverlayComponent) {
					return <ModalOverlayComponent boxShadow="base" round="xs" {...props} />;
				}
				return null;
			}}
		</Transition>
	);
});

ModalOverlay.defaultProps = {
	className: '',
	style: {}
};

ModalOverlay.displayName = 'ModalOverlay';
