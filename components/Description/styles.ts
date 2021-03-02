import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledDescription = styled(Box)<IBoxComponentProps>`
	margin-top: 10px;
	font-family: Hind;
	font-size: 12px;
	color: ${(props) => props.palette?.fontColors.description || variables.fontColors.description};
	width: fit-content;
	line-height: 1;
`;

StyledDescription.displayName = 'StyledDescription';
