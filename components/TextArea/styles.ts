import styled from 'styled-components';

// Models
import { ITextAreaBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledTextArea = styled(Box)<ITextAreaBoxComponentProps>`
	padding: 11px;
	border-radius: 2px;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	border: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	font-size: 12px;
`;

StyledTextArea.displayName = 'StyledTextArea';
