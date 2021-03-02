import styled from 'styled-components';

// Components
import ReactSlick from 'react-slick';
import { Box } from '../Box/Box';
import { IBoxComponentProps } from '../index';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledCarousel = styled(ReactSlick)<IBoxComponentProps>`
	.slick-active div {
		opacity: 1;
	}
`;

export const StyledDot = styled(Box)<IBoxComponentProps>`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${(props) => props.palette?.backgroundColors.toggle || variables.backgroundColors.toggle};
	opacity: 0.2;
`;

StyledDot.displayName = 'StyledDot';
