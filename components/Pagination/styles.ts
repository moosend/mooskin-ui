import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IPaginationButtonComponentProps, IPaginationComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledPagination = styled(Box)<IPaginationComponentProps>`
    display: flex;
    align-items: center;
`;

StyledPagination.displayName = 'StyledPagination';

export const StyledPaginationButton = styled(Box)<IPaginationButtonComponentProps>`
    border-radius: 3px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    padding: ${(props) => (props.active ? '9px 12px' : '8px 11px')};
    color: ${(props) =>
        props.active
            ? `${props.palette?.toggleElement.fontColor || variables.toggleElement.fontColor}`
            : `${props.palette?.toggleElement.secondaryFontColor || variables.toggleElement.secondaryFontColor}`};
    background-color: ${(props) =>
        props.active
            ? `${props.palette?.toggleElement.backgroundColor || variables.toggleElement.backgroundColor}`
            : `${props.palette?.toggleElement.secondaryBackgroundColor || variables.toggleElement.secondaryBackgroundColor}`};
    border: ${(props) =>
        props.active ? 'none' : `solid 1px ${props.palette?.toggleElement.borderColor || variables.toggleElement.borderColor}`};
    :not(:last-child) {
        margin-right: 10px;
    }
`;

StyledPaginationButton.displayName = 'StyledPaginationButton';

export const StyledPaginationShowAll = styled(Box)<IBoxComponentProps>`
    font-family: Hind;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #3fbaca;
    border-bottom: 1px solid #3fbaca;
    cursor: pointer;
`;

StyledPaginationShowAll.displayName = 'StyledPaginationShowAll';
