import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledDescription = styled(Box)<IBoxComponentProps>`
	margin-top: 10px;
	font-size: 12px;
	color: ${(props) => props.palette?.fontColors.medgray1 || variables.fontColors.medgray1};
	width: fit-content;
`;

StyledDescription.displayName = 'StyledDescription';
