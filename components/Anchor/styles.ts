import styled from 'styled-components';

import Box from '../Box/Box';

import variables from '../_utils/globals/variables';

import { IAnchorComponentProps } from './model';

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
    opacity: ${(props) => props.disabled ? 0.6 : 1};
    color: ${(props) => props.theme.primary || variables.primary};
`;
