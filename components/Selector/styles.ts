import styled from 'styled-components';

// Models
import { ISelectorComponentProps, ISelectorItemComponentProps } from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

export const StyledSelector = styled(Box)<ISelectorComponentProps>`
    padding: 6px;
    border-radius: 22px;
    background-color: #293346;
    display: flex;
`;

export const StyledSelectorItem = styled(Box)<ISelectorItemComponentProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 32px;
    border-radius: 22px;
    background-color: ${(props) => props.active ? '#ffffff' : '#293346'};
    color: ${(props) => props.active ? '#293346' : ' #ffffff'};
    font-family: Hind;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    transition: 0.3s ease all;
    opacity: ${(props) => props.active ? 1 : 0.5};
    cursor: pointer;
    &:not(:last-child){
        margin-right: 4px;
    }
`;
