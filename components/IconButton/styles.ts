import styled from 'styled-components';

// Models
import { IIconButtonComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledIconButton = styled(Box)<IIconButtonComponentProps>`
	font-family: 'Mooskin Icons';
	font-size: 21px;
	font-style: normal;
	color: ${(props) => props.palette?.fontColors.primary2 || variables.fontColors.primary2};
	text-decoration: none;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

StyledIconButton.displayName = 'StyledIconButton';
