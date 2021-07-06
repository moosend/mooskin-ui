import styled from 'styled-components';

// Models
import { IButtonComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

const normalButtonSizes = {
	lg: '10px',
	md: '9px 10px',
	sm: '8px 10px',
};

const inverseButtonSizes = {
	lg: '8px',
	md: '7px 8px',
	sm: '6px 7px',
};

export const ButtonDefault = styled(Box)<IButtonComponentProps>`
	width: fit-content;
	border-radius: 2px;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	outline: 0;
	font-size: 12px;
	font-weight: 600;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

ButtonDefault.displayName = 'ButtonDefault';

export const StyledButtonNormal = styled(ButtonDefault)`
	background-color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1};
	color: ${(props) => props.palette?.fontColors.white || variables.fontColors.white};
	padding: ${(props) => normalButtonSizes[props.buttonSize || 'md']};
	border: none;
	outline: 0;
`;

StyledButtonNormal.displayName = 'StyledButtonNormal';

export const StyledButtonInverse = styled(ButtonDefault)`
	color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1};
	padding: ${(props) => inverseButtonSizes[props.buttonSize || 'md']};
	background-color: transparent;
	border: 2px solid ${(props) => props.palette?.borderColors.primary1 || variables.borderColors.primary1};
`;

StyledButtonInverse.displayName = 'StyledButtonInverse';

export const StyledButtonIcon = styled(Box)`
	font-family: 'Mooskin Icons Round';
	font-size: 13px;
	font-style: normal;
	color: inherit;
`;

StyledButtonIcon.displayName = 'StyledButtonIcon';
