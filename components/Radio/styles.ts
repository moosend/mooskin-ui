import styled from 'styled-components';

import Box from '../Box/Box';

import variables from '../_utils/globals/variables';

import { IRadioComponentProps } from './model';

export const StyledRadioContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const StyledRadioWrapper = styled(Box)<Partial<IRadioComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledRadio = styled(Box)<Partial<IRadioComponentProps>>`
    font-family: 'Mooskin Icons';
    margin-right: 10px;
    font-size: 23px;
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.secondary || variables.secondary};
`;
