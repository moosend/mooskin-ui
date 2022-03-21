import styled, { keyframes } from 'styled-components';

// Models
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { ISelectComponentProps, ISelectOptionComponentProps, ISelectOptionListProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

const fadeIn = keyframes`
	0% {
		opacity: 0;
		transform: translate(0, -20px);
	}
	100% {
		opacity: 1;
		transform: translate(0);
	}
`;

export const StyledSelect = styled(Box)<ISelectComponentProps>`
	position: relative;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

StyledSelect.displayName = 'StyledSelect';

export const StyledSelectFilter = styled(Box)<IInputBoxComponentProps>`
	padding: 7px 15px 7px;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: inherit;
	border: none;
	background-color: transparent;
	flex: 1;
	z-index: 2;
	min-width: 0;
`;

StyledSelectFilter.displayName = 'StyledSelectFilter';

export const StyledSelectContainer = styled(Box)<IBoxComponentProps>`
	display: flex;
	border-radius: 2px;
	border: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	color: inherit;
	align-items: center;
`;

StyledSelectContainer.displayName = 'StyledSelectContainer';

export const StyledSelectPlaceholder = styled(Box)<IBoxComponentProps>`
	padding: 7px 15px 7px;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: inherit;
	flex: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

StyledSelectPlaceholder.displayName = 'StyledSelectPlaceholder';

export const StyledSelectOptionList = styled(Box)<ISelectOptionListProps>`
	position: absolute;
	top: 40px;
	left: 0;
	right: 0;
	color: inherit;
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	max-height: 160px;
	overflow-y: auto;
	z-index: 2;

	/** Scrollbar */
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: ${(props) => props.palette?.backgroundColors.gray1};
	}
	::-webkit-scrollbar-thumb {
		background: ${(props) => props.palette?.backgroundColors.medgray1};
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${(props) => props.palette?.backgroundColors.darkgray3};
	}
`;

export const StyledSelectOptionListFadeIn = styled(StyledSelectOptionList)`
	animation: ${fadeIn} 0.15s;
`;

StyledSelectOptionListFadeIn.displayName = 'StyledSelectOptionListFadeIn';

export const StyledSelectOptionListFadeOut = styled(StyledSelectOptionList)`
	opacity: 0;
	animation: ${fadeIn} 0.15s reverse;
`;

StyledSelectOptionListFadeOut.displayName = 'StyledSelectOptionListFadeOut';

StyledSelectOptionList.displayName = 'StyledSelectOptionList';

export const StyledSelectOverlay = styled(Box)<IBoxComponentProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;

StyledSelectOverlay.displayName = 'StyledSelectOverlay';

export const StyledSelectOption = styled(Box)<ISelectOptionComponentProps>`
	font-size: 14px;
	padding: 10px 15px;
	display: flex;
	justify-content: space-between;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	:first-child {
		padding-top: 13px;
	}
	&:not(:last-child) {
		padding: 10px 15px 0;
	}
	&:last-child {
		padding: 10px 15px;
	}
`;

StyledSelectOption.displayName = 'StyledSelectOption';

export const StyledSelectIcon = styled(Box)<IBoxComponentProps>`
	font-family: 'Mooskin Icons';
	font-size: 20px;
	display: flex;
	align-items: center;
	padding: 0 15px;
	color: inherit;
`;

StyledSelectIcon.displayName = 'StyledSelectIcon';

export const StyledSelectPagination = styled(Box)<IBoxComponentProps>`
	display: flex;
	justify-content: space-around;
	border-top: 1px solid #e2e2e2;
	margin: 8px 10px 0px;
	padding: 5px 0;
`;

StyledSelectPagination.displayName = 'StyledSelectPagination';

export const StyledPaginationPage = styled(Box)<IBoxComponentProps>`
	font-size: 12px;
	align-items: center;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledPaginationPage.displayName = 'StyledPaginationPage';
