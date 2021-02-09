import styled from 'styled-components';

// Models
import { IButtonComponentProps } from './model';

// Components
import Box from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

const normalButtonSizes = {
    lg: '10px',
    md: '9px 10px',
    sm: '8px 10px'
};

const inverseButtonSizes = {
    lg: '8px',
    md: '7px 8px',
    sm: '6px 7px'
};

export const ButtonDefault = styled(Box)<IButtonComponentProps>`
    min-width: 135px;
    width: fit-content;
    border-radius: 3px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    outline: 0;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        text-decoration: ${(props) => (!props.disabled ? 'underline' : '')};
    }
`;

ButtonDefault.displayName = 'ButtonDefault';

export const StyledButtonNormal = styled(ButtonDefault)`
    background-color: ${(props) =>
        !props.disabled
            ? props.palette?.button.backgroundColor || variables.button.backgroundColor
            : props.palette?.button.disabledBackgroundColor || variables.button.disabledBackgroundColor};
    color: ${(props) => props.palette?.button.fontColor || variables.button.fontColor};
    padding: ${(props) => normalButtonSizes[props.buttonSize || 'md']};
    border: none;
    outline: 0;
`;

StyledButtonNormal.displayName = 'StyledButtonNormal';

export const StyledButtonInverse = styled(ButtonDefault)`
    color: ${(props) =>
        !props.disabled
            ? props.palette?.button.backgroundColor || variables.button.backgroundColor
            : props.palette?.button.disabledBackgroundColor || variables.button.disabledBackgroundColor};
    padding: ${(props) => inverseButtonSizes[props.buttonSize || 'md']};
    background-color: transparent;
    border: 2px solid
        ${(props) =>
            !props.disabled
                ? props.palette?.button.backgroundColor || variables.button.backgroundColor
                : props.palette?.button.disabledBackgroundColor || variables.button.disabledBackgroundColor};
`;

StyledButtonInverse.displayName = 'StyledButtonInverse';

export const StyledButtonIcon = styled(Box)`
    font-family: 'Mooskin Icons Round';
    font-size: 15px;
    font-style: normal;
    color: inherit;
    text-decoration: none;
`;

StyledButtonIcon.displayName = 'StyledButtonIcon';