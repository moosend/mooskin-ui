import styled from 'styled-components';

// Models
import { ILabelComponentProps } from '../Label/model';
import { ICheckboxComponentProps } from './model';

// Components
import Box from '../Box/Box';
import Label from '../Label/Label';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledCheckbox = styled(Box)`
    display: flex;
    width: fit-content;
`;

export const StyledCheckboxWrapper = styled(Box)<Partial<ICheckboxComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledCheckboxButton = styled(Box)<Partial<ICheckboxComponentProps>>`
    font-family: 'Mooskin Icons';
    padding-right: 10px;
    font-size: 23px;
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.secondary || variables.secondary};
`;

export const StyledCheckboxLabel = styled(Label)<ILabelComponentProps>`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    min-width: unset;
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.secondary || variables.secondary};
`;
