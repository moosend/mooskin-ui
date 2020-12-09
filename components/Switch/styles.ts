import styled from 'styled-components';

import variables from '../_utils/globals/variables';

import Box from '../Box/Box';

import { ISwitchComponentProps } from './model';

export const SwitchStyled = styled(Box)<ISwitchComponentProps>`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 27px;
    padding: 0 8px;
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
    border-radius: 36px;
    transition: background-color 0.3s;
    background-color: ${(props) => {
        return !props.disabled
            ? props.on
                ? props.theme.primary || variables.primary
                : props.theme.inputBorder || variables.inputBorder
            : props.theme.disabledBackground || variables.disabledBackground;
    }};
`;

export const SwitchHandle = styled(Box)<ISwitchComponentProps>`
    position: absolute;
    content: '';
    top: 4px;
    left: 4px;
    height: 19px;
    width: 19px;
    background-color: white;
    transition: transform 0.3s;
    border-radius: 50%;
    z-index: 1;
    transform: ${(props) => (props.on ? `translate(${props.width ? props.width - 27 : 63}px)` : '')};
`;

export const SwitchLabel = styled(Box)<ISwitchComponentProps>`
    font-family: Hind;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
`;

export const SwitchLabelNormal = styled(SwitchLabel)<ISwitchComponentProps>`
    align-self: ${(props) => (props.on ? 'flex-start' : 'flex-end')};
`;

export const SwitchLabelDisabled = styled(SwitchLabel)<ISwitchComponentProps>`
    color: ${(props) => props.theme.disabledfont || variables.disabledfont};
    align-self: center;
`;
