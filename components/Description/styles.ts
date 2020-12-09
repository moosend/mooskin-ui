import styled from 'styled-components';

import Box from '../Box/Box';

import variables from '../_utils/globals/variables';

import { IDescriptionComponentProps } from './model';

export const StyledDescription = styled(Box)<IDescriptionComponentProps>`
    margin-top: 10px;
    font-family: Hind;
    font-size: 12px;
    color: ${(props) => props.theme.inputFont || variables.inputFont};
    width: fit-content;
`;
