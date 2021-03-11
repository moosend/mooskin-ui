import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import {
	ICommonSkeletonComponentProps,
	ISkeletonCircleComponentProps,
	ISkeletonTextComponentProps,
	ISkeletonWrapperComponent,
} from './model';

// Styled Components
import { StyledFadeInSkeleton, StyledSkeleton, StyledSkeletonCircle, StyledSkeletonText } from './styles';

/**
 * Skeleton
 */
export const Skeleton: React.FC<ICommonSkeletonComponentProps> = (props) => {
	return <SkeletonCommon {...props} component={StyledSkeleton} />;
};

Skeleton.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {},
};

Skeleton.displayName = 'Skeleton';

/**
 * SkeletonCircle
 */
export const SkeletonCircle: React.FC<ISkeletonCircleComponentProps> = (props) => {
	return <SkeletonCommon {...props} component={StyledSkeletonCircle} />;
};

SkeletonCircle.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	size: '20px',
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {},
};

SkeletonCircle.displayName = 'Skeleton';

/**
 * SkeletonText
 */
export const SkeletonText: React.FC<ISkeletonTextComponentProps> = (props) => {
	if (props.isLoaded) {
		return <SkeletonCommon {...props} component={StyledSkeletonText} />;
	}

	const lines = [...Array(props.lines)];

	if (lines.length) {
		return (
			<>
				{lines.map((line, i) => {
					return <SkeletonCommon {...props} component={StyledSkeletonText} key={i} w={i === lines.length - 1 ? '80%' : '100%'} />;
				})}
			</>
		);
	}
	return null;
};

SkeletonText.defaultProps = {
	className: '',
	endColor: '#A0AEC0',
	// fadeDuration: 0.4,
	isLoaded: false,
	lines: 4,
	speed: 0.8,
	startColor: '#EDF2F7',
	style: {},
};

SkeletonText.displayName = 'Skeleton';

export const SkeletonCommon: React.FC<ISkeletonWrapperComponent> = withMooskinContext((props) => {
	const [slowLoad, setSlowLoad] = React.useState<boolean | undefined>(false);
	const [isLoaded, setIsLoaded] = React.useState<boolean | undefined>(false);

	React.useEffect(() => {
		if (props.isLoaded) {
			if (isLoaded !== props.isLoaded) {
				setSlowLoad(true);
			}
			setIsLoaded(true);
		} else {
			setSlowLoad(false);
			setIsLoaded(false);
		}
	}, [props.isLoaded]);

	React.useEffect(() => {
		if (slowLoad) {
			setTimeout(() => {
				setSlowLoad(false);
			}, 600);
		}
	}, [slowLoad]);

	if (slowLoad) {
		return <StyledFadeInSkeleton {...props} />;
	}

	if (!slowLoad && isLoaded) {
		return <>{props.children}</>;
	}

	const ReturnComponent = props.component;

	return <ReturnComponent {...props} />;
});
