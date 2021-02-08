import styled, {keyframes} from 'styled-components';

// Helpers
import { getNumberOrStringValue } from '../Box/styles';

// Models
import { ILoaderComponentProps } from './model';

// Components
import Box from '../Box/Box';

// "CSS" Variables
// import variables from '../_utils/globals/variables';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled(Box)<ILoaderComponentProps>`
    border: ${(props) => getNumberOrStringValue(props.spinnerWidth)} solid #f3f3f3;
    border-top: ${(props) => getNumberOrStringValue(props.spinnerWidth)} solid #5ccdde;
    border-radius: 50%;
    width: ${(props) => getNumberOrStringValue(props.size)};
    height: ${(props) => getNumberOrStringValue(props.size)};
    animation: ${spin} 2s linear infinite;
`;

StyledLoader.displayName = 'StyledLoader';
