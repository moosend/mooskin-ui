import styled from 'styled-components';

import Box from '../Box/Box';

import variables from '../_utils/globals/variables';

import { ICheckboxComponentProps } from './model';

export const StyledCheckboxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const StyledCheckboxWrapper = styled(Box)<Partial<ICheckboxComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledCheckbox = styled(Box)<Partial<ICheckboxComponentProps>>`
    font-family: 'Mooskin Icons';
    margin-right: 10px;
    font-size: 23px;
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.secondary || variables.secondary};
`;
