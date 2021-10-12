import { IBoxComponentProps } from '../Box/model';

export interface ICommonSkeletonComponentProps extends IBoxComponentProps {
	/** The color at the animation start */
	startColor?: string;

	/** The color at the animation end */
	endColor?: string;

	/** The animation speed in seconds */
	speed?: number;

	/** If `true`, it'll render its children with a nice fade transition */
	isLoaded?: boolean;

	/** The fadeIn duration in seconds */
	// fadeDuration?: number;
}

export interface ISkeletonCircleComponentProps extends ICommonSkeletonComponentProps {
	/** size of the skeleton circle */
	size?: string;
}

export interface ISkeletonTextComponentProps extends ICommonSkeletonComponentProps {
	/** number of lines to show as text */
	lines?: number;

	/** width of the skeleton text */
	width?: string;
}
