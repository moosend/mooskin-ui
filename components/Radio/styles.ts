import styled from 'styled-components';

// Models
import { ILabelComponentProps } from '../Label/model';
import { IRadioComponentProps } from './model';

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

export const StyledRadioIcon = styled(Box)<Partial<IRadioComponentProps>>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	font-family: 'Mooskin Icons';
	padding-right: 10px;
	font-size: 23px;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
`;

StyledRadioIcon.displayName = 'StyledRadioIcon';

export const StyledRadioLabel = styled(Label)<ILabelComponentProps>`
	font-family: Montserrat;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	min-width: unset;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
`;

StyledRadioLabel.displayName = 'StyledRadioLabel';
