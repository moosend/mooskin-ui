import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { ICommonSkeletonComponentProps, ISkeletonCircleComponentProps, ISkeletonTextComponentProps } from './model';

// Styled Components
import { StyledSkeleton, StyledSkeletonCircle, StyledSkeletonText } from './styles';

/**
 * Skeleton
 */
export const Skeleton: React.FC<ICommonSkeletonComponentProps> = withMooskinContext(
	({
		className: _className = '',
		endColor: _endColor = '#A0AEC0',
		// fadeDuration= 0.4,
		isLoaded = false,
		speed: _speed = 0.8,
		startColor: _startColor = '#EDF2F7',
		style: _style = {},
		...props
	}) => {
		if (isLoaded) {
			return <>{props.children}</>;
		}
		return <StyledSkeleton w="fit-content" {...props} />;
	},
);

Skeleton.displayName = 'Skeleton';

/**
 * SkeletonCircle
 */
export const SkeletonCircle: React.FC<ISkeletonCircleComponentProps> = withMooskinContext(
	({
		className: _className = '',
		endColor: _endColor = '#A0AEC0',
		// fadeDuration= 0.4,
		isLoaded = false,
		size: _size = '20px',
		speed: _speed = 0.8,
		startColor: _startColor = '#EDF2F7',
		style: _style = {},
		...props
	}) => {
		if (isLoaded) {
			return <>{props.children}</>;
		}
		return <StyledSkeletonCircle {...props} />;
	},
);

SkeletonCircle.displayName = 'Skeleton';

/**
 * SkeletonText
 */
export const SkeletonText: React.FC<ISkeletonTextComponentProps> = withMooskinContext(
	({
		className: _className = '',
		endColor: _endColor = '#A0AEC0',
		// fadeDuration: 0.4,
		isLoaded = false,
		lines = 4,
		speed: _speed = 0.8,
		startColor: _startColor = '#EDF2F7',
		style: _style = {},
		...props
	}) => {
		if (isLoaded) {
			return <>{props.children}</>;
		}

		const linesInternal = [...Array(lines)];

		if (linesInternal.length) {
			return (
				<>
					{linesInternal.map((line, i) => (
						<StyledSkeletonText {...props} key={i} w={i === linesInternal.length - 1 ? '80%' : '100%'} />
					))}
				</>
			);
		}
		return null;
	},
);

SkeletonText.displayName = 'Skeleton';
