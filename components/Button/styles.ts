import styled from 'styled-components';

import Box from '../Box/Box';

import variables from '../_utils/globals/variables';

import { IButtonComponentProps } from './model';

const normalButtonSizes = {
    lg: '10px',
    md: '9px 10px',
    sm: '8px 10px',
};

const inverseButtonSizes = {
    lg: '8px',
    md: '7px 8px',
    sm: '6px 7px',
};

export const ButtonDefault = styled(Box)<IButtonComponentProps>`
    min-width: 135px;
    width: fit-content;
    border-radius: 3px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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

export const ButtonNormal = styled(ButtonDefault)<IButtonComponentProps>`
    background-color: ${(props) =>
        !props.disabled ? props.theme.primaryColor || props.primaryColor : props.theme.backgroundDisabled || variables.backgroundDisabled};
    color: #ffffff;
    padding: ${(props) => normalButtonSizes[props.size || 'md']};
    border: none;
    outline: 0;
`;

export const ButtonInverse = styled(ButtonDefault)<IButtonComponentProps>`
    color: ${(props) =>
        !props.disabled ? props.theme.primaryColor || props.primaryColor : props.theme.backgroundDisabled || variables.backgroundDisabled};
    background-color: #ffffff;
    padding: ${(props) => inverseButtonSizes[props.size || 'md']};
    border: 2px solid
        ${(props) =>
            !props.disabled
                ? props.theme.primaryColor || props.primaryColor
                : props.theme.backgroundDisabled || variables.backgroundDisabled};
`;

export const ButtonIcon = styled(Box)`
    font-family: 'Mooskin Icons Round';
    font-size: 15px;
    font-style: normal;
    margin-right: 5px;
`;
