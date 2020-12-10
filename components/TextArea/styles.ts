import styled from 'styled-components';

import { Box } from '../index';

import variables from '../_utils/globals/variables';

export const StyledTextArea = styled(Box)<React.HTMLProps<HTMLTextAreaElement>>`
    padding: 11px;
    border-radius: 3px;
    border: solid 1px ${(props) => props.theme.inputBorder || variables.inputBorder};
    background-color: ${(props) => props.theme.inputBackground || variables.inputBackground};
    font-family: Hind;
    font-size: 12px;
    color: ${(props) => props.theme.inputFont || variables.inputFont};
`;
