import styled from 'styled-components';

// import variables from '../_utils/globals/variables';

import { IRadioComponentProps } from './model';

export const StyledRadioContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledRadioWrapper = styled.div<Partial<IRadioComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledRadio = styled.div<Partial<IRadioComponentProps>>`
    margin-right: 10px;
    font-size: 23px;
    color: ${(props) => (props.selected ? '#293346' : '#425579')};
    font-family: 'Mooskin Icons';
`;
