import styled from 'styled-components';

import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

import { ICheckboxComponentProps } from './model';

export const StyledCheckboxContainer = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const StyledCheckboxWrapper = styled(Box)<Partial<ICheckboxComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledCheckbox = styled(Box)<Partial<ICheckboxComponentProps>>`
    margin-right: 10px;
    font-size: 23px;
    color: ${(props) => (props.checked ? '#293346' : '#425579')};
    font-family: 'Mooskin Icons';
`;
