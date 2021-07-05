import styled, { keyframes } from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IContentSize, IDrawerComponentProps, IDrawerContentComponentProps, IDrawerOverlayComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

const overlayFadeIn = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0);
    }
    100% {
        background-color: rgba(0, 0, 0, 0.48);
    }
`;

const contentRightFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0%) translateZ(0px);
    }
`;

const contentLeftFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0%) translateZ(0px);
    }
`;

const contentBottomFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0%) translateZ(0px);
    }
`;

const contentTopFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0%) translateZ(0px);
    }
`;

export const getContentSize = (size?: IContentSize) => {
	switch (size) {
		case 'xs':
			return '20%';

		case 'sm':
			return '35%';

		case 'md':
			return '50%';

		case 'lg':
			return '65%';

		case 'xl':
			return '80%';

		case 'full':
			return '100%';

		default:
			break;
	}
};

export const StyledDrawer = styled(Box)<IDrawerComponentProps>``;

StyledDrawer.displayName = 'StyledDrawer';

export const StyledDrawerContent = styled(Box)<IDrawerContentComponentProps>`
	position: fixed;
	width: 100%;
	max-width: 100%;
	max-height: 100vh;
	height: 100vh;
	display: flex;
	flex-direction: column;
	z-index: 1400;
	color: inherit;
	outline: 0px;
	opacity: 1;
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

StyledDrawerContent.displayName = 'StyledDrawerContent';

export const StyledDrawerContentRight = styled(StyledDrawerContent)`
	right: 0px;
	top: 0px;
	max-width: ${(props) => getContentSize(props.size)};
`;

StyledDrawerContentRight.displayName = 'StyledDrawerContentRight';

export const StyledDrawerContentRightIn = styled(StyledDrawerContentRight)`
	animation: ${contentRightFadeIn} 0.3s;
`;

StyledDrawerContentRightIn.displayName = 'StyledDrawerContentRightIn';

export const StyledDrawerContentRightOut = styled(StyledDrawerContentRight)`
	animation: ${contentRightFadeIn} 0.3s reverse;
`;

StyledDrawerContentRightOut.displayName = 'StyledDrawerContentRightOut';

export const StyledDrawerContentLeft = styled(StyledDrawerContent)`
	left: 0px;
	top: 0px;
	max-width: ${(props) => getContentSize(props.size)};
`;

StyledDrawerContentLeft.displayName = 'StyledDrawerContentLeft';

export const StyledDrawerContentLeftIn = styled(StyledDrawerContentLeft)`
	animation: ${contentLeftFadeIn} 0.3s;
`;

StyledDrawerContentLeftIn.displayName = 'StyledDrawerContentLeftIn';

export const StyledDrawerContentLeftOut = styled(StyledDrawerContentLeft)`
	animation: ${contentLeftFadeIn} 0.3s reverse;
`;

StyledDrawerContentLeftOut.displayName = 'StyledDrawerContentLeftOut';

export const StyledDrawerContentTop = styled(StyledDrawerContent)`
	left: 0px;
	top: 0px;
	max-height: ${(props) => getContentSize(props.size)};
`;

StyledDrawerContentTop.displayName = 'StyledDrawerContentTop';

export const StyledDrawerContentTopIn = styled(StyledDrawerContentTop)`
	animation: ${contentTopFadeIn} 0.3s;
`;

StyledDrawerContentTopIn.displayName = 'StyledDrawerContentTopIn';

export const StyledDrawerContentTopOut = styled(StyledDrawerContentTop)`
	animation: ${contentTopFadeIn} 0.3s reverse;
`;

StyledDrawerContentTopOut.displayName = 'StyledDrawerContentTopOut';

export const StyledDrawerContentBottom = styled(StyledDrawerContent)`
	left: 0px;
	bottom: 0px;
	max-height: ${(props) => getContentSize(props.size)};
`;

StyledDrawerContentBottom.displayName = 'StyledDrawerContentBottom';

export const StyledDrawerContentBottomIn = styled(StyledDrawerContentBottom)`
	animation: ${contentBottomFadeIn} 0.3s;
`;

StyledDrawerContentBottomIn.displayName = 'StyledDrawerContentBottomIn';

export const StyledDrawerContentBottomOut = styled(StyledDrawerContentBottom)`
	animation: ${contentBottomFadeIn} 0.3s reverse;
`;

StyledDrawerContentBottomOut.displayName = 'StyledDrawerContentBottomOut';

export const StyledDrawerHeader = styled(Box)<IBoxComponentProps>`
	flex: 0 1 0%;
	padding: 1rem 1.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	width: 100%;
	color: inherit;
`;

StyledDrawerHeader.displayName = 'StyledDrawerHeader';

export const StyledDrawerBody = styled(Box)<IBoxComponentProps>`
	padding: 0.5rem 1.5rem;
	flex: 1 1 0%;
	overflow: auto;
	width: 100%;
	color: inherit;
`;

StyledDrawerBody.displayName = 'StyledDrawerBody';

export const StyledDrawerFooter = styled(Box)<IBoxComponentProps>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 1rem 1.5rem;
	width: 100%;
	color: inherit;
`;

StyledDrawerFooter.displayName = 'StyledDrawerFooter';

export const StyledDrawerCloseButton = styled(Box)<IBoxComponentProps>`
	font-family: 'Mooskin Icons';
	width: 32px;
	height: 32px;
	font-size: 32px;
	cursor: pointer;
	border-radius: 9px;
	color: inherit;
	&:hover {
		background: rgba(30, 30, 30, 0.1);
	}
`;

StyledDrawerCloseButton.displayName = 'StyledDrawerCloseButton';

export const StyledDrawerOverlay = styled(Box)<IDrawerOverlayComponentProps>`
	display: flex;
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 1400;
	justify-content: center;
`;

StyledDrawerOverlay.displayName = 'StyledDrawerOverlay';

export const StyledDrawerOverlayFadeIn = styled(StyledDrawerOverlay)`
	background-color: rgba(0, 0, 0, 0.48);
	animation: ${overlayFadeIn} 0.3s;
`;

StyledDrawerOverlayFadeIn.displayName = 'StyledDrawerOverlayFadeIn';

export const StyledDrawerOverlayFadeOut = styled(StyledDrawerOverlay)`
	background-color: rgba(0, 0, 0, 0);
	animation: ${overlayFadeIn} 0.3s reverse;
`;

StyledDrawerOverlayFadeOut.displayName = 'StyledDrawerOverlayFadeOut';
