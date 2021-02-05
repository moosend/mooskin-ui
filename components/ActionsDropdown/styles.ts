import styled from 'styled-components';

// Models
import { IActionsDropdownArrowComponentProps, IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

export const StyledActionsDropdown = styled(Box)<IActionsDropdownComponentProps>`
    border-radius: 3px;
    background-color: #3fbaca;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledActionsDropdownItem = styled(Box)<IActionsDropdownItemComponentProps>`
    font-family: Montserrat;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    cursor: pointer;
    &:not(:last-child){
        padding: 10px 10px 0;
    }
    &:last-child{
        padding: 10px;
    }
`;

export const StyledActionsDropdownArrow = styled(Box)<IActionsDropdownArrowComponentProps>`
    position: absolute;
    top: ${(props) => props.arrowDirection === 'up' ? '-7px' : ''};
    bottom: ${(props) => props.arrowDirection === 'down' ? '-7px' : ''};
    right: 22px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: ${(props) => props.arrowDirection === 'up' ? `7px solid ${props.arrowColor || '#3fbaca'}` : 0};
    border-top: ${(props) => props.arrowDirection === 'down' ? `7px solid ${props.arrowColor || '#3fbaca'}` : 0};
`;
