import styled from 'styled-components';

// Models
import { IAnchorComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" Variables
import variables from '../_utils/globals/variables';

export const StyledAnchor = styled(Box)<IAnchorComponentProps>`
    border-radius: 3px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    outline: 0;
    font-family: Montserrat;
    font-size: 12px;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
    color: ${(props) =>
        props.disabled
            ? props.palette?.anchor.disabledFontColor || variables.anchor.disabledFontColor
            : props.palette?.anchor.fontColor || variables.anchor.fontColor};
`;

StyledAnchor.displayName = 'StyledAnchor';
