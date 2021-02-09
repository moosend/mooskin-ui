import styled from 'styled-components';

// Models
import { ILoadingBarComponentProps } from './model';

// Components
import Box from '../Box/Box';

// "CSS" variables
// import variables from '../_utils/globals/variables';

export const StyledLoadingBar = styled(Box)<ILoadingBarComponentProps>`
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: ${(props) => `${props.progress}%`};
    box-shadow: ${(props) => `${getBgColor(props.error)} 0px 0px 10px, ${getBgColor(props.error)} 0px 0px 5px`};
    background-color: ${(props) => {
        console.log(props, getBgColor(props.error));
        return getBgColor(props.error);
    }};
    transition: all 500ms ease 0s;
`;

StyledLoadingBar.displayName = 'StyledLoadingBar';

const getBgColor = (error?: boolean) => (error ? '#F11949' : '#2998FF');
