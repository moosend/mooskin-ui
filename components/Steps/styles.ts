import styled from 'styled-components';

// Models
import { IStepCommonComponentProps, IStepComponentProps, IStepHeaderComponentProps, IStepsComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledSteps = styled(Box)<IStepsComponentProps>`
    display: flex;
    flex-direction: column;
`;

StyledSteps.displayName = 'StyledSteps';

export const StyledStep = styled(Box)<IStepComponentProps>``;

StyledStep.displayName = 'StyledStep';

export const StyledStepHeader = styled(Box)<IStepHeaderComponentProps>`
    border-bottom: ${(props) => (props.active ? 'solid 2px #293346' : 'solid 2px #9d9d9d')};
    color: ${(props) =>
        props.active
            ? `${props.palette?.backgroundColors.toggle || variables.backgroundColors.secondaryToggle}`
            : `${props.palette?.fontColors.secondaryToggle || variables.fontColors.secondaryToggle}`};
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
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    position: relative;
`;

StyledStepHeader.displayName = 'StyledStepHeader';

export const StyledStepContent = styled(Box)<IStepCommonComponentProps>``;

StyledStepContent.displayName = 'StyledStepContent';

export const StyledStepArrow = styled(Box)<IStepCommonComponentProps>`
    font-family: 'Mooskin Icons';
    position: absolute;
    top: 10px;
    right: -5px;
    color: inherit;
    font-size: 12px;
`;

StyledStepArrow.displayName = 'StyledStepArrow';
