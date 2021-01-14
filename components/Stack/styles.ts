import styled from 'styled-components';

// Models
import { IStackComponentProps } from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

export const StyledStack = styled(Box)<IStackComponentProps>`
    display: flex;
    /* width: ${(props) => props.direction === 'column' || props.direction === 'column-reverse' ? 'fit-content' : 'unset'}; */
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    flex-direction: ${(props) => props.direction};
    flex-wrap: ${(props) => props.flexWrap};
`;
