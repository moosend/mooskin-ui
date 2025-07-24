import styled, { css } from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IModalComponentProps, IModalContentComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

const overlayFadeIn = css`
	0% {
		background-color: rgba(0, 0, 0, 0);
	}
	100% {
		background-color: rgba(0, 0, 0, 0.48);
	}
`;

const contentFadeIn = css`
	0% {
		opacity: 0;
		transform: translate(0, -60px);
	}
	100% {
		opacity: 1;
		transform: translate(0);
	}
`;

const contentFadeOut = css`
	0% {
		opacity: 1;
		transform: translate(0);
	}
	100% {
		opacity: 0;
		transform: translate(0, 60px);
	}
`;

export const StyledModal = styled(Box)<IModalComponentProps>``;

StyledModal.displayName = 'StyledModal';

export const StyledModalContent = styled(Box)<IModalContentComponentProps>`
	position: relative;
	margin: auto;
	width: 100%;
	max-width: 100%;
	/* max-height: 100vh; */
	height: 100vh;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	z-index: 1400;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	background: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	outline: 0px;
	opacity: 1;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

StyledModalContent.displayName = 'StyledModalContent';

export const StyledModalContentFadeIn = styled(StyledModalContent)`
	animation: ${contentFadeIn} 0.15s forwards;
`;

StyledModalContentFadeIn.displayName = 'StyledModalContentFadeIn';

export const StyledModalContentFadeOut = styled(StyledModalContent)`
	animation: ${contentFadeOut} 0.15s forwards;
`;

StyledModalContentFadeOut.displayName = 'StyledModalContentFadeOut';

export const StyledModalHeader = styled(Box)<IBoxComponentProps>`
	flex: 0 1 0%;
	padding: 1rem 1.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	width: 100%;
	color: inherit;
`;

StyledModalHeader.displayName = 'StyledModalHeader';

export const StyledModalBody = styled(Box)<IBoxComponentProps>`
	padding: 0.5rem 1.5rem;
	flex: 1 1 0%;
	/* overflow: auto; */
	width: 100%;
	color: inherit;
`;

StyledModalBody.displayName = 'StyledModalBody';

export const StyledModalFooter = styled(Box)<IBoxComponentProps>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 1rem 1.5rem;
	width: 100%;
	color: inherit;
`;

StyledModalFooter.displayName = 'StyledModalFooter';

export const StyledModalCloseButton = styled(Box)<IBoxComponentProps>`
	font-family: 'Mooskin Icons';
	width: 32px;
	height: 32px;
	font-size: 32px;
	color: inherit;
	cursor: pointer;
	border-radius: 2px;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledModalCloseButton.displayName = 'StyledModalCloseButton';

export const StyledModalOverlay = styled(Box)<IBoxComponentProps>`
	overflow: auto;
	display: flex;
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 1400;
	background-color: rgba(0, 0, 0, 0.48);
`;

StyledModalOverlay.displayName = 'StyledModalOverlay';

export const StyledModalOverlayFadeIn = styled(StyledModalOverlay)`
	background-color: rgba(0, 0, 0, 0.48);
	animation: ${overlayFadeIn} 0.15s;
`;

StyledModalOverlayFadeIn.displayName = 'StyledModalOverlayFadeIn';

export const StyledModalOverlayFadeOut = styled(StyledModalOverlay)`
	background-color: rgba(0, 0, 0, 0);
	animation: ${overlayFadeIn} 0.15s reverse;
`;

StyledModalOverlayFadeOut.displayName = 'StyledModalOverlayFadeOut';
