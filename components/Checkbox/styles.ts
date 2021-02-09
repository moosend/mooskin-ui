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

StyledCheckbox.displayName = 'StyledCheckbox';

export const StyledCheckboxWrapper = styled(Box)<Partial<ICheckboxComponentProps>>`
    width: fit-content;
    display: flex;
    align-items: center;
`;

StyledCheckboxWrapper.displayName = 'StyledCheckboxWrapper';

export const StyledCheckboxIcon = styled(Box)<Partial<ICheckboxComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-family: 'Mooskin Icons';
    padding-right: 10px;
    font-size: 23px;
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    color: ${(props) => props.palette?.commonElement.fontColor || variables.commonElement.fontColor};
`;

StyledCheckboxIcon.displayName = 'StyledCheckboxIcon';

export const StyledCheckboxLabel = styled(Label)<ILabelComponentProps>`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    min-width: unset;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    color: ${(props) => props.palette?.commonElement.fontColor || variables.commonElement.fontColor};
`;

StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';
