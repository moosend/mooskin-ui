import styled from 'styled-components';

// Models
import { ILabelComponentProps } from '../Label/model';
import { ICheckboxComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Label } from '../Label/Label';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledCheckbox = styled(Box)`
	display: flex;
	width: fit-content;
	align-items: center;
`;

StyledCheckbox.displayName = 'StyledCheckbox';

export const StyledCheckboxIcon = styled(Box)<Partial<ICheckboxComponentProps>>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	font-family: 'Mooskin Icons';
	padding-right: 10px;
	font-size: 23px;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.primary1 || variables.fontColors.primary1};
`;

StyledCheckboxIcon.displayName = 'StyledCheckboxIcon';

export const StyledCheckboxLabel = styled(Label)<ILabelComponentProps>`
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	min-width: unset;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';
