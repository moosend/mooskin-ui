import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import type { ILabelComponentProps } from '../Label/model';
import { IInputComponentProps, IInputContainerComponentProps, IInputListComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Label } from '../Label/Label';

import variables from '../_utils/globals/variables';

export const StyledInputContainer = styled(Box)<IInputContainerComponentProps>`
	position: relative;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	display: flex;
	flex: 1;
	align-items: center;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : '')};
	border-radius: 2px;
	border: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	padding: 7px 15px 7px;
`;

StyledInputContainer.displayName = 'StyledInputContainer';

export const StyledInputBase = styled(Box)<IInputComponentProps>`
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
	border-radius: 2px;
	width: 100%;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	border: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	padding: 7px 15px 7px;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : '')};
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
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledInputIcon.displayName = 'StyledInputIcon';

export const StyledInputOptionList = styled(Box)<Partial<IInputListComponentProps>>`
	position: absolute;
	right: 0;
	height: auto;
	background: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	border-radius: 2px;
	z-index: 4;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);
	overflow: auto;
	max-height: 265px;
`;

StyledInputOptionList.displayName = 'StyledInputOptionList';

export const StyledInputOptionListTitle = styled(Label)<ILabelComponentProps>`
	margin: 15px;
	font-size: 14px;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledInputOptionListTitle.displayName = 'StyledInputOptionListTitle';

export const StyledInputListButtonClose = styled(Box)<IBoxComponentProps>`
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
	position: fixed;
	border-radius: 14px;
	bottom: 10px;
	left: 10px;
	right: 10px;
`;

StyledInputListButtonClose.displayName = 'StyledInputListButtonClose';
