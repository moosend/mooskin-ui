import styled, { css } from 'styled-components';

// Models
import { IBoxComponentProps } from '../index';
import { IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

const fadeIn = css`
	0% {
		opacity: 0;
		transform: translate(0, -20px);
	}
	100% {
		opacity: 1;
		transform: translate(0);
	}
`;

export const StyledActionsDropdown = styled(Box)<IActionsDropdownComponentProps>`
	background-color: ${(props) => props.palette?.backgroundColors.dropdown || variables.backgroundColors.dropdown};
	display: flex;
	flex-direction: column;
	z-index: 2;
`;

StyledActionsDropdown.displayName = 'StyledActionsDropdown';

export const StyledActionsDropdownFadeIn = styled(StyledActionsDropdown)`
	animation: ${fadeIn} 0.15s;
`;

StyledActionsDropdownFadeIn.displayName = 'StyledActionsDropdownFadeIn';

export const StyledActionsDropdownFadeOut = styled(StyledActionsDropdown)`
	opacity: 0;
	animation: ${fadeIn} 0.15s reverse;
`;

StyledActionsDropdownFadeOut.displayName = 'StyledActionsDropdownFadeOut';

export const StyledActionsDropdownItem = styled(Box)<IActionsDropdownItemComponentProps>`
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	white-space: nowrap;
	color: ${(props) => props.palette?.fontColors.dropdown || variables.fontColors.dropdown};
	cursor: pointer;
	&:not(:last-child) {
		padding: 10px 10px 0;
	}
	&:last-child {
		padding: 10px;
	}
`;

StyledActionsDropdownItem.displayName = 'StyledActionsDropdownItem';

// :after is a workaround to remove box-shadow from the bottom of the rotated arrow box
export const StyledActionsDropdownArrow = styled(Box)<IBoxComponentProps>`
	box-shadow: rgb(0 0 0 / 2%) 3px 2px 8px -2px, rgb(0 0 0 / 7%) 2px 2px 2px 0px;
	position: absolute;
	top: -6px;
	right: 22px;
	width: 12px;
	height: 12px;
	transform: rotate(225deg);
	z-index: -1;
	background-color: ${(props) => props.palette?.backgroundColors.dropdown || variables.backgroundColors.dropdown};
	/* &:after {
		content: '';
		position: absolute;
		top: 0px;
		right: -8px;
		width: 17px;
		height: 24px;
		transform: rotate(45deg);
		z-index: -1;
		background-color: ${(props) => props.palette?.backgroundColors.dropdown || variables.backgroundColors.dropdown};
	} */
`;

StyledActionsDropdownArrow.displayName = 'StyledActionsDropdownArrow';

export const StyledActionsDropdownButtonClose = styled(Box)<IBoxComponentProps>`
	width: auto;
	height: 56px;
	background-color: ${(props) => props.palette?.backgroundColors.dropdown || variables.backgroundColors.dropdown};
	color: ${(props) => props.palette?.fontColors.dropdown || variables.fontColors.dropdown};
	font-weight: 400;
	font-size: 20px;
	padding: 16px;
	text-align: center;
	cursor: pointer;
	z-index: 11;
`;

StyledActionsDropdownButtonClose.displayName = 'StyledActionsDropdownButtonClose';

export const StyledActionDropdownOverlay = styled(Box)<IBoxComponentProps>`
	overflow: auto;
	left: 0px;
	top: 0px;
	z-index: 5;
	background-color: rgba(0, 0, 0, 0.48);
`;

StyledActionDropdownOverlay.displayName = 'StyledActionDropdownOverlay';
