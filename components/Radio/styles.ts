import styled from 'styled-components';

// import variables from '../_utils/globals/variables';

import { IRadioComponentProps } from './model';

export const StyledRadioContainer = styled.div<Partial<IRadioComponentProps>>`
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

export const StyledRadio = styled.div`
    width: 18px;
    height: 18px;
    margin: 0 10px 0 0;
    padding: 4px;
    border: solid 1px #293346;
    background-color: #ffffff;
    border-radius: 50%;
`;

export const StyledDot = styled.div`
    width: 9px;
    height: 9px;
    background-color: #293346;
    border-radius: 50%;
`;
