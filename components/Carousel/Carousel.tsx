import * as React from 'react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ICarouselComponentProps } from './model';

// Styled Components
import { StyledCarousel, StyledDot } from './styles';

/**
 * Carousel
 */
export const Carousel: React.FC<ICarouselComponentProps> = (props) => {
	const renderCustomDot = () => (props.customDot ? props.customDot : <StyledDot />);
	return <StyledCarousel customPaging={renderCustomDot} {...props} />;
};

Carousel.defaultProps = {
	accessibility: true,
	// arrows: true,
	autoplaySpeed: 3000,
	centerPadding: '50px',
	className: '',
	dots: true,
	dotsClass: 'slick-dots',
	draggable: true,
	easing: 'linear',
	// infinite: true,
	pauseOnHover: true,
	slide: 'div',
	slidesToScroll: 3,
	slidesToShow: 3,
	speed: 500,
	swipe: true,
};

Carousel.displayName = 'Carousel';

export const CustomDot: React.FC<IBoxComponentProps> = (props) => {
	return <StyledDot {...props} />;
};

CustomDot.defaultProps = {
	className: '',
	style: {},
};

CustomDot.displayName = 'CustomDot';
