export interface ICarouselComponentProps {
	/** Enable tabbing and arrow key navigation */
	accessibility?: boolean;

	/** Adjust the slide's height automatically */
	adaptiveHeight?: boolean;

	/** Index change callback. `index => ...` */
	afterChange?: (index: number) => void;

	/** Custom dots templates. Works same as customPaging */
	appendDots?: (dots: any) => any;

	/** display arrows */
	arrows?: boolean;

	/** Delay between each auto scroll (in milliseconds) */
	autoplaySpeed?: number;

	/** autoplays slides */
	autoplay?: boolean;

	/** Index change callback. `(oldIndex, newIndex) => ...` */
	beforeChange?: (oldIndex: number, newIndex: number) => void;

	/** Center current slide */
	centerMode?: boolean;

	centerPadding?: string;

	/** CSS class for inner slider div */
	className?: string;

	/** CSS class for dots */
	dotsClass?: string;

	/** display dots */
	dots?: boolean;

	/** Enable scrollable via dragging on desktop */
	draggable?: boolean;

	easing?: string;

	fade?: boolean;

	/** Go to slide on click */
	focusOnSelect?: boolean;

	/** Infinitely wrap around contents */
	infinite?: boolean;

	/** Index of first slide */
	initialSlide?: number;

	/** componentWillMount callback. */
	onInit?: () => void;

	/** componentDidUpdate callback. */
	onReInit?: () => void;

	/** Prevents autoplay while hovering on dots */
	pauseOnDotsHover?: boolean;

	/** Prevents autoplay while focused on slides */
	pauseOnFocus?: boolean;

	/** Prevents autoplay while hovering on track */
	pauseOnHover?: boolean;

	/** Slide container type */
	slide?: string;

	/** How many slides to scroll at once */
	slidesToScroll?: number;

	/** How many slides to show in one frame */
	slidesToShow?: number;

	/** Animation speed in milliseconds */
	speed?: number;

	/** Enable/disable swiping to change slides */
	swipe?: boolean;

	/** custom component to replace slide dots */
	customDot?: React.ReactElement;
}
