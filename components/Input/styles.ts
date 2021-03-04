import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IInputComponentProps, IInputContainerComponentProps, IInputListComponentProps, IInputOptionComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledInputContainer = styled(Box)<IInputContainerComponentProps>`
	position: relative;
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
	display: flex;
	flex: 1;
	align-items: center;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	border-radius: 3px;
	border: solid 1px ${(props) => props.palette?.borderColors.common || variables.borderColors.common};
	background-color: ${(props) => props.palette?.backgroundColors.common || variables.backgroundColors.common};
	padding: 7px 15px 7px;
`;

StyledInputContainer.displayName = 'StyledInputContainer';

export const StyledInputBase = styled(Box)<IInputComponentProps>`
	font-family: Hind;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	flex: 1;
`;

StyledInputBase.displayName = 'StyledInputBase';

export const StyledInputSolo = styled(StyledInputBase)<IInputComponentProps>`
	border-radius: 3px;
	width: 100%;
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
	border: solid 1px ${(props) => props.palette?.borderColors.common || variables.borderColors.common};
	background-color: ${(props) => props.palette?.backgroundColors.common || variables.backgroundColors.common};
	padding: 7px 15px 7px;
`;

StyledInputSolo.displayName = 'StyledInputSolo';

export const StyledInputWrapped = styled(StyledInputBase)<IInputComponentProps>`
	color: inherit;
	border: none;
	background-color: transparent;
`;

StyledInputWrapped.displayName = 'StyledInputWrapped';

export const StyledInputOverlay = styled(Box)<IBoxComponentProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
`;

StyledInputOverlay.displayName = 'StyledInputOverlay';

export const StyledInputIcon = styled(Box)<IBoxComponentProps>`
	font-family: 'Mooskin Icons';
	font-size: 20px;
	display: flex;
	align-items: center;
	color: inherit;
`;

StyledInputIcon.displayName = 'StyledInputIcon';

export const StyledInputOptionList = styled(Box)<Partial<IInputListComponentProps>>`
	position: absolute;
	right: 0;
	height: auto;
	background: #fff;
	border-radius: 3px;
	z-index: 4;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);
`;

StyledInputOptionList.displayName = 'StyledInputOptionList';

export const StyledInputOptionListTitle = styled(Box)<IBoxComponentProps>`
	padding: 5px;
	color: #bebebe;
	border-bottom: 1px solid #f1f1f1;
	background-color: #f5f7f9;
	text-align: center;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

StyledInputOptionListTitle.displayName = 'StyledInputOptionListTitle';

export const StyledInputOption = styled(Box)<IInputOptionComponentProps>`
	padding: 3px 5px;
	:not(:last-child) {
		border-bottom: 1px solid #f1f1f1;
	}
`;

StyledInputOption.displayName = 'StyledInputOption';
