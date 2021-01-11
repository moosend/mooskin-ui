import styled from 'styled-components';

// Models
import { IAnchorBoxComponentProps } from '../Box/model';

// Components
import Box from '../Box/Box';

// "CSS" Variables
import variables from '../_utils/globals/variables';

export const StyledAnchor = styled(Box)<IAnchorBoxComponentProps>`
    border-radius: 3px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    outline: 0;
    font-family: Montserrat;
    font-size: 12px;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
    color: ${(props) => props.disabled ? props.theme.disabledfont || variables.disabledfont : props.theme.primary || variables.primary};
`;
