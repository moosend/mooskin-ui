import styled from 'styled-components';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { ITableComponentProps } from './model';

// Components
import Box from '../Box/Box';

export const StyledTable = styled(Box)<ITableComponentProps>`
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`;

export const StyledTableHeader = styled(Box)<IDivBoxComponentProps>`
    display: flex;
    padding: 10px 0;
`;

export const StyledTableHeaderItem = styled(Box)<IDivBoxComponentProps>`
    font-family: Montserrat;
    font-size: 11px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #425579;
    display: flex;
    align-items: center;
`;

export const StyledTableRow = styled(Box)<IDivBoxComponentProps>`
    display: flex;
    padding: 35px 0;
    align-items: center;
    border-top: solid 1px #e2e2e2;
    border-bottom: solid 1px #e2e2e2;
    :last-child {
        border: none;
    }
`;

export const StyledTableRowItem = styled(Box)<IDivBoxComponentProps>`
    font-family: Hind;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: left;
    color: #2d2d2d;
    display: flex;
    align-items: center;
`;
