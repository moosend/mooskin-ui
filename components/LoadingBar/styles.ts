import styled from 'styled-components';

// Models
import { ILoadingBarComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';
import { IStyledTheme } from '../index';

export const StyledLoadingBar = styled(Box)<ILoadingBarComponentProps>`
	position: fixed;
	top: 0;
	left: 0;
	height: 2px;
	width: ${(props) => `${props.progress}%`};
	box-shadow: ${(props) => `${getBgColor(props.error, props.palette)} 0px 0px 10px, ${getBgColor(props.error, props.palette)} 0px 0px 5px`};
	background-color: ${(props) => getBgColor(props.error, props.palette)};
	transition: all 500ms ease 0s;
`;

StyledLoadingBar.displayName = 'StyledLoadingBar';

const getBgColor = (error?: boolean, palette?: IStyledTheme) =>
	error
		? palette
			? palette.backgroundColors.primary4
			: variables.backgroundColors.primary4
		: palette
		? palette.backgroundColors.primary1
		: variables.backgroundColors.primary1;
