import styled from 'styled-components';

// import variables from '../_utils/globals/variables';

import { ICheckboxComponentProps } from './model';

export const StyledCheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledCheckboxWrapper = styled.div<Partial<ICheckboxComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledCheckbox = styled.div<Partial<ICheckboxComponentProps>>`
    margin-right: 10px;
    font-size: 23px;
    color: ${(props) => (props.checked ? '#293346' : '#425579')};
    font-family: 'Mooskin Icons';
`;
