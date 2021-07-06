import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ILabelComponentProps } from '../Label/model';
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
`;

StyledInputIcon.displayName = 'StyledInputIcon';

export const StyledInputOptionList = styled(Box)<Partial<IInputListComponentProps>>`
	position: absolute;
	right: 0;
	height: auto;
	background: #fff;
	border-radius: 2px;
	z-index: 4;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);
`;

StyledInputOptionList.displayName = 'StyledInputOptionList';

export const StyledInputOptionListTitle = styled(Label)<ILabelComponentProps>`
	margin: 15px;
	font-size: 14px;
`;

StyledInputOptionListTitle.displayName = 'StyledInputOptionListTitle';
