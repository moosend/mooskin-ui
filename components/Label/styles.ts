import styled from 'styled-components';

// Models
import { ILabelComponentProps } from './Model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledLabel = styled(Box)<ILabelComponentProps>`
	font-size: 14px;
	font-weight: 500;
	display: flex;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	cursor: ${(props) => (!props.disabled ? (props.onClick ? 'pointer' : 'unset') : 'not-allowed')};
`;

StyledLabel.displayName = 'StyledLabel';
