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
    color: ${(props) => props.palette?.commonElement.fontColor || variables.commonElement.fontColor};
    border: solid 1px ${(props) => props.palette?.commonElement.borderColor || variables.commonElement.borderColor};
    background-color: ${(props) => props.palette?.commonElement.backgroundColor || variables.commonElement.backgroundColor};
    font-family: Hind;
    font-size: 12px;
`;

StyledTextArea.displayName = 'StyledTextArea';
