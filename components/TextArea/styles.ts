import styled from 'styled-components';

// Models
import { ITextAreaBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledTextArea = styled(Box)<ITextAreaBoxComponentProps>`
    padding: 11px;
    border-radius: 3px;
    color: ${(props) => props.palette?.fontColors.common || variables.fontColors.common};
    border: solid 1px ${(props) => props.palette?.borderColors.common || variables.borderColors.common};
    background-color: ${(props) => props.palette?.backgroundColors.common || variables.backgroundColors.common};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    font-family: Hind;
    font-size: 12px;
`;

StyledTextArea.displayName = 'StyledTextArea';
