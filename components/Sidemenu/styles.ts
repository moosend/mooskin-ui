import styled from 'styled-components';

// Models
import { ISidemenuComponentProps, ISidemenuItemComponentProps } from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

export const StyledSidemenu = styled(Box)<ISidemenuComponentProps>`
    border-left: 1px solid #e2e2e2;
    display: flex;
    flex-direction: column;
`;

export const StyledSidemenuItem = styled(Box)<ISidemenuItemComponentProps>`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: ${(props) => props.active ? 'bold' : '500'};
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #293346;
    margin-left: ${(props) => props.active ? '-2px' : '0'};
    padding-left: 9px;
    border-left: ${(props) => props.active ? '3px solid #3fbaca' : ''};
    transition: 0.3s all ease;
    cursor: pointer;
    :not(:last-child){
        margin-bottom: 32px;
    }
`;
