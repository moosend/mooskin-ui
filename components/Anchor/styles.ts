import styled from 'styled-components';

// Models
import { IAnchorComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" Variables
import variables from '../_utils/globals/variables';

export const StyledAnchor = styled(Box)<IAnchorComponentProps>`
	border-radius: 3px;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	outline: 0;
	font-size: 12px;
	&& {
		text-decoration: underline;
	}
	&:hover {
		text-decoration: none;
	}
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	color: ${(props) => props.palette?.fontColors.secondary2 || variables.fontColors.secondary2};
`;

StyledAnchor.displayName = 'StyledAnchor';
