import * as React from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ICarouselComponentProps } from './model';

// Styled Components
import { StyledCarousel, StyledDot } from './styles';

import variables from '../_utils/globals/variables';
/**
 * Carousel
 */
export const Carousel: React.FC<ICarouselComponentProps> = ({
	accessibility = true,
	// arrows= true,
	autoplaySpeed = 3000,
	centerPadding = '50px',
	className = '',
	dots = true,
	dotsClass = 'slick-dots',
	draggable = true,
	easing = 'linear',
	// infinite= true,
	pauseOnHover = true,
	slide = 'div',
	slidesToScroll = 3,
	slidesToShow = 3,
	speed = 500,
	swipe = true,
	...props
}) => {
	const renderCustomDot = () => (props.customDot ? props.customDot : <StyledDot />);
	return <StyledCarousel opacity={1} customPaging={renderCustomDot} {...props} />;
};

Carousel.displayName = 'Carousel';

export const CustomDot: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledDot
			borderRadius="50%"
			bgColor={props.palette?.backgroundColors.primary2 || variables.backgroundColors.primary2}
			opacity={0.2}
			w={[15, 15, 9, 9]}
			h={[15, 15, 9, 9]}
			{...props}
		/>
	);
});

CustomDot.displayName = 'CustomDot';
