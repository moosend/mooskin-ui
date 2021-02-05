import styled, {keyframes} from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import {
    IContentSize,
    IDrawerComponentProps,
    IDrawerContentComponentProps,
    IDrawerOverlayComponentProps
} from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

const overlayFadeIn = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0);
    }
    100% {
        background-color: rgba(0, 0, 0, 0.48);
    }
`;

const contentRightFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0%) translateZ(0px);
    }
`;

const contentLeftFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0%) translateZ(0px);
    }
`;

const contentBottomFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0%) translateZ(0px);
    }
`;

const contentTopFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%) translateZ(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(0%) translateZ(0px);
    }
`;

export const getContentSize = (size?: IContentSize) => {
    switch (size) {
        case 'xs':
            return '20%';

        case 'sm':
            return '35%';

        case 'md':
            return '50%';

        case 'lg':
            return '65%';

        case 'xl':
            return '80%';

        case 'full':
            return '100%';

        default:
            break;
    }
};

export const StyledDrawer = styled(Box)<IDrawerComponentProps>``;

export const StyledDrawerContent = styled(Box)<IDrawerContentComponentProps>`
    position: fixed;
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1400;
    color: inherit;
    outline: 0px;
    background: rgb(255, 255, 255);
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const StyledDrawerContentRight = styled(StyledDrawerContent)`
    right: 0px;
    top: 0px;
    max-width: ${(props) => getContentSize(props.size)};
`;

export const StyledDrawerContentRightIn = styled(StyledDrawerContentRight)`
    animation: ${contentRightFadeIn} 0.3s;
`;

export const StyledDrawerContentRightOut = styled(StyledDrawerContentRight)`
    animation: ${contentRightFadeIn} 0.3s reverse;
`;

export const StyledDrawerContentLeft = styled(StyledDrawerContent)`
    left: 0px;
    top: 0px;
    max-width: ${(props) => getContentSize(props.size)};
`;

export const StyledDrawerContentLeftIn = styled(StyledDrawerContentLeft)`
    animation: ${contentLeftFadeIn} 0.3s;
`;

export const StyledDrawerContentLeftOut = styled(StyledDrawerContentLeft)`
    animation: ${contentLeftFadeIn} 0.3s reverse;
`;

export const StyledDrawerContentTop = styled(StyledDrawerContent)`
    left: 0px;
    top: 0px;
    max-height: ${(props) => getContentSize(props.size)};
`;

export const StyledDrawerContentTopIn = styled(StyledDrawerContentTop)`
    animation: ${contentTopFadeIn} 0.3s;
`;

export const StyledDrawerContentTopOut = styled(StyledDrawerContentTop)`
    animation: ${contentTopFadeIn} 0.3s reverse;
`;

export const StyledDrawerContentBottom = styled(StyledDrawerContent)`
    left: 0px;
    bottom: 0px;
    max-height: ${(props) => getContentSize(props.size)};
`;

export const StyledDrawerContentBottomIn = styled(StyledDrawerContentBottom)`
    animation: ${contentBottomFadeIn} 0.3s;
`;

export const StyledDrawerContentBottomOut = styled(StyledDrawerContentBottom)`
    animation: ${contentBottomFadeIn} 0.3s reverse;
`;

export const StyledDrawerHeader = styled(Box)<IBoxComponentProps>`
    flex: 0 1 0%;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    width: 100%;
`;

export const StyledDrawerBody = styled(Box)<IBoxComponentProps>`
    padding: 0.5rem 1.5rem;
    flex: 1 1 0%;
    overflow: auto;
    width: 100%;
`;

export const StyledDrawerFooter = styled(Box)<IBoxComponentProps>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
    width: 100%;
`;

export const StyledDrawerCloseButton = styled(Box)<IBoxComponentProps>`
    font-family: 'Mooskin Icons';
    width: 32px;
    height: 32px;
    font-size: 32px;
    cursor: pointer;
    border-radius: 9px;
    :hover {
        background: rgba(30, 30, 30, 0.1);
    }
`;

export const StyledDrawerOverlay = styled(Box)<IDrawerOverlayComponentProps>`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1400;
    justify-content: center;
`;

export const StyledDrawerOverlayFadeIn = styled(StyledDrawerOverlay)`
    background-color: rgba(0, 0, 0, 0.48);
    animation: ${overlayFadeIn} 0.3s;
`;

export const StyledDrawerOverlayFadeOut = styled(StyledDrawerOverlay)`
    background-color: rgba(0, 0, 0, 0);
    animation: ${overlayFadeIn} 0.3s reverse;
`;
