import styled from 'styled-components';

// Models
import { IStepCommonComponentProps, IStepComponentProps, IStepsComponentProps } from './model';

// Components
import Box from '../Box/Box';

export const StyledSteps = styled(Box)<IStepsComponentProps>`
    display: flex;
    flex-direction: column;
`;

export const StyledStep = styled(Box)<IStepComponentProps>``;

export const StyledStepHeader = styled(Box)<IStepCommonComponentProps>`
    border-bottom: ${(props) => props.active ? 'solid 2px #293346' : 'solid 2px #9d9d9d'};
    color: ${(props) => props.active ? '#293346' : '#9d9d9d'};
    width: 200px;
    height: 40px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
`;

export const StyledStepContent = styled(Box)<IStepCommonComponentProps>``;

export const StyledStepArrow = styled(Box)<IStepCommonComponentProps>`
    font-family: 'Mooskin Icons';
    position: absolute;
    top: 10px;
    right: -5px;
    color: inherit;
    font-size: 12px;
`;
