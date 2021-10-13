import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ICommonSkeletonComponentProps, ISkeletonCircleComponentProps, ISkeletonTextComponentProps } from './model';

// Styled Components
import { StyledSkeleton, StyledSkeletonCircle, StyledSkeletonText } from './styles';

/**
 * Skeleton
 */
export const Skeleton: React.FC<ICommonSkeletonComponentProps> = withMooskinContext((props) => {
	if (props.isLoaded) {
		return <>{props.children}</>;
	}
	return <StyledSkeleton {...props} />;
});

Skeleton.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {}
};

Skeleton.displayName = 'Skeleton';

/**
 * SkeletonCircle
 */
export const SkeletonCircle: React.FC<ISkeletonCircleComponentProps> = withMooskinContext((props) => {
	if (props.isLoaded) {
		return <>{props.children}</>;
	}
	return <StyledSkeletonCircle {...props} />;
});

SkeletonCircle.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	size: '20px',
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {}
};

SkeletonCircle.displayName = 'Skeleton';

/**
 * SkeletonText
 */
export const SkeletonText: React.FC<ISkeletonTextComponentProps> = withMooskinContext((props) => {
	if (props.isLoaded) {
		return <>{props.children}</>;
	}

	const lines = [...Array(props.lines)];

	if (lines.length) {
		return (
			<>
				{lines.map((line, i) => {
					return <StyledSkeletonText {...props} key={i} w={i === lines.length - 1 ? '80%' : '100%'} />;
				})}
			</>
		);
	}
	return null;
});

SkeletonText.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	lines: 4,
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {}
};

SkeletonText.displayName = 'Skeleton';
