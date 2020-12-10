import * as React from 'react';

// Models
import { ISkeletonCircleComponentProps, ISkeletonComponentProps, ISkeletonTextComponentProps } from './model';

// Styled Components
import {checkLoaded, StyledSkeleton, StyledSkeletonCircle, StyledSkeletonText} from './styles';

/**
 * Skeleton
 */
export const Skeleton: React.FC<ISkeletonComponentProps> = (props) => {
    const EnhancedComponent = withLoader(checkLoaded(StyledSkeleton, props.isLoaded));
    return <EnhancedComponent {...props} />;
};

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
export const SkeletonCircle: React.FC<ISkeletonCircleComponentProps> = (props) => {
    const EnhancedComponent = withLoader(checkLoaded(StyledSkeletonCircle, props.isLoaded));
    return <EnhancedComponent {...props} />;
};

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
export const SkeletonText: React.FC<ISkeletonTextComponentProps> = (props) => {
    const EnhancedComponent = withLoader(checkLoaded(StyledSkeletonText, props.isLoaded));

    if (props.isLoaded){
        return <EnhancedComponent {...props} />;
    }

    const lines = [...Array(props.lines)];

    if (lines.length){
        return (
            <>
                {
                    lines.map((line, i) => {
                        return <EnhancedComponent {...props} key={i} w={i === lines.length - 1 ? '80%' : '100%'} />;
                    })
                }
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
    style: {}
};

SkeletonText.displayName = 'Skeleton';

/**
 * HoC for slow loading content
 */
export const withLoader = (
    Component: React.ComponentType<ISkeletonCircleComponentProps | ISkeletonComponentProps | ISkeletonTextComponentProps>
) => (props: ISkeletonCircleComponentProps | ISkeletonComponentProps | ISkeletonTextComponentProps) => {
    return (
        <Component {...props} />
    );
};

export default Skeleton;
