import styled from 'styled-components';

// Models
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { ISelectComponentProps, ISelectOptionComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledSelect = styled(Box)<ISelectComponentProps>`
	position: relative;
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

StyledSelect.displayName = 'StyledSelect';

export const StyledSelectFilter = styled(Box)<IInputBoxComponentProps>`
	padding: 7px 15px 7px;
	font-family: Hind;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: inherit;
	border: none;
	flex: 1;
`;

StyledSelectFilter.displayName = 'StyledSelectFilter';

export const StyledSelectContainer = styled(Box)<IBoxComponentProps>`
	display: flex;
	border-radius: 3px;
	border: solid 1px ${(props) => props.palette?.borderColors.common || variables.borderColors.common};
	background-color: ${(props) => props.palette?.backgroundColors.common || variables.backgroundColors.common};
	color: inherit;
	align-items: center;
`;

StyledSelectContainer.displayName = 'StyledSelectContainer';

export const StyledSelectPlaceholder = styled(Box)<IBoxComponentProps>`
	padding: 7px 15px 7px;
	font-family: Hind;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: inherit;
	flex: 1;
`;

StyledSelectPlaceholder.displayName = 'StyledSelectPlaceholder';

export const StyledSelectOptionList = styled(Box)<IBoxComponentProps>`
	position: absolute;
	top: 40px;
	left: 0;
	right: 0;
	color: inherit;
	background-color: ${(props) => props.palette?.backgroundColors.common || variables.backgroundColors.common};
	max-height: 160px;
	overflow-y: auto;

	/** Scrollbar */
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

StyledSelectOptionList.displayName = 'StyledSelectOptionList';

export const StyledSelectOverlay = styled(Box)<IBoxComponentProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
`;

StyledSelectOverlay.displayName = 'StyledSelectOverlay';

export const StyledSelectOption = styled(Box)<ISelectOptionComponentProps>`
	font-size: 12px;
	padding: 10px 15px;
	font-family: Hind;
	display: flex;
	justify-content: space-between;
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
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
	font-family: Hind;
	align-items: center;
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
`;

StyledPaginationPage.displayName = 'StyledPaginationPage';
