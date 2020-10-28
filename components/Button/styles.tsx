import * as React from 'react';
import styled from 'styled-components';

import variables from '../_utils/globals/variables';

import { IButtonComponentProps } from './model';

const normalButtonSizes = {
    lg: '10px',
    md: '9px 10px',
    sm: '8px 10px'
};

const inverseButtonSizes = {
    lg: '9px',
    md: '8px 9px',
    sm: '7px 9px'
};

const Button: React.FC<IButtonComponentProps> = (props) => {
    return <button>{props.children}</button>;
};

export const DefaultButton = styled(Button)<IButtonComponentProps>`
    min-width: 135px;
    width: fit-content;
    border-radius: 3px;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
    outline: 0;
    font-family: Montserrat;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        text-decoration: underline;
    }
`;

export const NormalButton = styled(DefaultButton)<IButtonComponentProps>`
    background-color: ${(props) => {
        return !props.disabled ? props.theme.primary || variables.primary : props.theme.disabled || variables.disabled;
    }};
    color: #ffffff;
    padding: ${(props) => normalButtonSizes[props.size || 'md']};
    border: none;
    outline: 0;
`;

export const InverseButton = styled(DefaultButton)<IButtonComponentProps>`
    color: ${(props) => {
        return !props.disabled ? props.theme.primary || variables.primary : props.theme.disabled || variables.disabled;
    }};
    background-color: #ffffff;
    padding: ${(props) => inverseButtonSizes[props.size || 'md']};
    border: 1px solid ${(props) => {
        return !props.disabled ? props.theme.primary || variables.primary : props.theme.disabled || variables.disabled;
    }};
`;

export const ButtonIcon = styled.i`
    font-family: 'Mooskin Icons';
    font-size: 15px;
    font-style: normal;
    margin-right: 5px;
`;
