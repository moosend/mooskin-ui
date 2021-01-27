import { IDivBoxComponentProps } from '../Box/model';

export interface ICommonSkeletonComponentProps extends IDivBoxComponentProps {
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

export interface ISkeletonComponentProps extends ICommonSkeletonComponentProps {
    /** Height of the skeleton bar */
    height?: string;

    /** width of the skeleton bar */
    width?: string;
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
