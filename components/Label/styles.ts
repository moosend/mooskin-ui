import styled from 'styled-components';

import { ILabelComponentProps } from './model';

export const StyledLabel = styled.div<ILabelComponentProps>`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.label || props.primaryColor};
    display: flex;
    align-self: center;
    cursor: ${(props) => (!props.disabled ? (props.onClick ? 'pointer' : 'unset') : 'not-allowed')};
    /* flex-basis: ${(props) => props.width || 150}; */
    min-width: ${(props) => props.width || 150}px;
`;
