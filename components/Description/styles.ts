import styled from 'styled-components';

import Box from '../Box/Box';

import { IDescriptionComponentProps } from './model';

export const StyledDescription = styled(Box)<IDescriptionComponentProps>`
    margin-top: 10px;
    font-family: Hind;
    font-size: 12px;
    color: #9d9d9d;
    width: fit-content;
`;
