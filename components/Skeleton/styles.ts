import styled, { css } from 'styled-components';

// Models
import { ICommonSkeletonComponentProps, ISkeletonCircleComponentProps, ISkeletonTextComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// import variables from '../_utils/globals/variables';

const breatheAnimation = (startColor?: string, endColor?: string) => css`
	0% {
		border-color: ${startColor || '#EDF2F7'};
		background-color: ${startColor || '#EDF2F7'};
	}
	100% {
		border-color: ${endColor || '#A0AEC0'};
		background-color: ${endColor || '#A0AEC0'};
	}
`;

export const StyledCommonSkeleton = styled(Box)<ICommonSkeletonComponentProps>`
	color: inherit;
	font-family: inherit;
	font-size: inherit;
	display: inherit;
	align-items: inherit;
	justify-content: inherit;
	opacity: 0.7;
	border-radius: 2px;
	border-color: ${(props) => props.startColor};
	background-color: ${(props) => props.endColor};
	animation: ${(props) => `${props.speed}s`} linear infinite alternate ${(props) => breatheAnimation(props.startColor, props.endColor)};
	box-shadow: none;
	background-clip: padding-box;
	cursor: default;
	color: transparent;
	pointer-events: none;
	user-select: none;
	* {
		visibility: ${(props) => (props.isLoaded ? 'visible' : 'visible')};
	}
`;

StyledCommonSkeleton.displayName = 'StyledCommonSkeleton';

export const StyledSkeleton = styled(StyledCommonSkeleton)<ICommonSkeletonComponentProps>`
	width: fit-content;
`;

StyledSkeleton.displayName = 'StyledSkeleton';

export const StyledSkeletonCircle = styled(StyledCommonSkeleton)<ISkeletonCircleComponentProps>`
	border-radius: 50%;
	height: ${(props) => props.size};
	width: ${(props) => props.size};
`;

StyledSkeletonCircle.displayName = 'StyledSkeletonCircle';

export const StyledSkeletonText = styled(StyledCommonSkeleton)<ISkeletonTextComponentProps>`
	height: 0.5rem;
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

StyledSkeletonText.displayName = 'StyledSkeletonText';
