import styled from 'styled-components';

import { IBoxComponentProps } from '../Box/model';
import { IListComponentProps } from './model';

import Box from '../Box/Box';

export const StyledList = styled(Box)<IListComponentProps>`
    display: grid;
    grid-column-gap: ${(props) => props.spacing}px;
    grid-row-gap: ${(props) => props.spacing}px;
    grid-template-columns: ${(props) => props.cols && `repeat(${props.cols}, auto)`};
`;

export const StyledListItem = styled(Box)<IBoxComponentProps>`
    display: flex;
    padding: 15px;
`;

export const StyledListItemCommon = styled(Box)<IBoxComponentProps>`
    display: flex;
`;

export const StyledListItemHead = styled(Box)``;

export const StyledListItemBody = styled(StyledListItemCommon)`
    flex: 1;
    flex-direction: column;
    padding: 0 20px;
`;

export const StyledListItemEnd = styled(StyledListItemCommon)`
    align-items: center;
`;
