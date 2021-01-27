import styled from 'styled-components';

import { ILayoutComponentProps } from './model';

import Box from '../Box/Box';

export const StyledLayout = styled(Box)<ILayoutComponentProps>`
    display: grid;
    grid-column-gap: ${(props) => props.spacing}px;
    grid-row-gap: ${(props) => props.spacing}px;
    grid-template-columns: ${(props) => props.cols && `repeat(${props.cols}, auto)`};
`;
