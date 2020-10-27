import styled from 'styled-components';

import variables from '../_utils/globals/variables';

export const DefaultButton = styled.button`
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

export const NormalButton = styled(DefaultButton)`
    background-color: ${(props) => {
        return !props.disabled ? props.theme.primary || variables.primary : props.theme.disabled || variables.disabled;
    }};
    color: #ffffff;
    padding: 10px;
    border: none;
    outline: 0;
`;

export const InversedButton = styled(DefaultButton)`
    color: ${(props) => {
        return !props.disabled ? props.theme.primary || variables.primary : props.theme.disabled || variables.disabled;
    }};
    background-color: #ffffff;
    padding: 9px;
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
