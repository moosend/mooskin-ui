import styled, { keyframes } from 'styled-components';

// Models
import {
    ICommonSkeletonComponentProps,
    ISkeletonCircleComponentProps,
    ISkeletonComponentProps,
    ISkeletonTextComponentProps
} from './model';

// Components
import { Box } from '../Box/Box';

// import variables from '../_utils/globals/variables';

const breatheAnimation = (startColor?: string, endColor?: string) => keyframes`
    0% {
        border-color: ${startColor || '#EDF2F7'};
        background-color: ${startColor || '#EDF2F7'};
    }
    100% {
        border-color: ${endColor || '#A0AEC0'};
        background-color: ${endColor || '#A0AEC0'};
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const StyledCommonSkeleton = styled(Box)<ICommonSkeletonComponentProps>`
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
        visibility: ${(props) => (props.isLoaded ? 'visible' : 'hidden')};
    }
`;

StyledCommonSkeleton.displayName = 'StyledCommonSkeleton';

export const checkLoaded = (component: any, isLoaded?: boolean) => {
    if (isLoaded) {
        return styled.div`
            animation: ${fadeIn} ${(props) => `0.6s`};
        `;
    }

    return component;
};

export const StyledSkeleton = styled(StyledCommonSkeleton)<ISkeletonComponentProps>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
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
