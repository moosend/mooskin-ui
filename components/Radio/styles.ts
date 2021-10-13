import styled from 'styled-components';

// Models
import type { ILabelComponentProps } from '../Label/model';
import { IRadioIconComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Label } from '../Label/Label';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledRadio = styled(Box)`
	display: flex;
	width: fit-content;
	align-items: center;
`;

StyledRadio.displayName = 'StyledRadio';

export const StyledRadioIcon = styled(Box)<IRadioIconComponentProps>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	font-family: 'Mooskin Icons';
	padding-right: 10px;
	font-size: 23px;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) =>
		props.selected
			? props.palette?.fontColors.primary1 || variables.fontColors.primary1
			: props.palette?.fontColors.checkboxUnselected || variables.fontColors.checkboxUnselected};
`;

StyledRadioIcon.displayName = 'StyledRadioIcon';

export const StyledRadioLabel = styled(Label)<ILabelComponentProps>`
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	min-width: unset;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledRadioLabel.displayName = 'StyledRadioLabel';
