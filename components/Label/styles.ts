import styled from 'styled-components';

// Models
import { ILabelComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledLabel = styled(Box)<ILabelComponentProps>`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.palette?.label.fontColor || variables.label.fontColor};
    display: flex;
    cursor: ${(props) => (!props.disabled ? (props.onClick ? 'pointer' : 'unset') : 'not-allowed')};
`;

StyledLabel.displayName = 'StyledLabel';
