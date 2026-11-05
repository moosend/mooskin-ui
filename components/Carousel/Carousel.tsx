import * as React from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { IBoxComponentProps } from '../Box/model';
import type { ICarouselComponentProps } from './model';

// Styled Components
import { StyledCarousel, StyledDot } from './styles';

import variables from '../_utils/globals/variables';
/**
 * Carousel
 */
export const Carousel: React.FC<ICarouselComponentProps> = ({
	accessibility: _accessibility = true,
	// arrows= true,
	autoplaySpeed: _autoplaySpeed = 3000,
	centerPadding: _centerPadding = '50px',
	className: _className = '',
	dots = true,
	dotsClass: _dotsClass = 'slick-dots',
	draggable: _draggable = true,
	easing: _easing = 'linear',
	// infinite= true,
	pauseOnHover: _pauseOnHover = true,
	slide: _slide = 'div',
	slidesToScroll = 3,
	slidesToShow = 3,
	speed: _speed = 500,
	swipe: _swipe = true,
	...props
}) => {
	const renderCustomDot = () => (props.customDot ? props.customDot : <StyledDot />);
	return (
		<StyledCarousel
			opacity={1}
			slidesToScroll={slidesToScroll}
			dots={dots}
			slidesToShow={slidesToShow}
			customPaging={renderCustomDot}
			{...props}
		/>
	);
};

Carousel.displayName = 'Carousel';

export const CustomDot: React.FC<IBoxComponentProps> = withMooskinContext(
	({ className: _className = '', style: _style = {}, ...props }) => (
		<StyledDot
			borderRadius="50%"
			bgColor={props.palette?.backgroundColors.primary2 || variables.backgroundColors.primary2}
			opacity={0.2}
			w={[15, 15, 9, 9]}
			h={[15, 15, 9, 9]}
			{...props}
		/>
	),
);

CustomDot.displayName = 'CustomDot';
