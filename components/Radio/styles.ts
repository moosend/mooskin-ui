import styled from 'styled-components';

// Models
import { ILabelComponentProps } from '../Label/model';
import { IRadioComponentProps } from './model';

// Components
import Box from '../Box/Box';
import Label from '../Label/Label';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledRadio = styled(Box)`
    display: flex;
    width: fit-content;
`;

StyledRadio.displayName = 'StyledRadio';

export const StyledRadioWrapper = styled(Box)<Partial<IRadioComponentProps>>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    width: fit-content;
    display: flex;
    align-items: center;
`;

StyledRadioWrapper.displayName = 'StyledRadioWrapper';

export const StyledRadioIcon = styled(Box)<Partial<IRadioComponentProps>>`
    font-family: 'Mooskin Icons';
    padding-right: 10px;
    font-size: 23px;
    cursor: pointer;
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.secondary || variables.secondary};
`;

StyledRadioIcon.displayName = 'StyledRadioIcon';

export const StyledRadioLabel = styled(Label)<ILabelComponentProps>`
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

StyledRadioLabel.displayName = 'StyledRadioLabel';
