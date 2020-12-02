import * as React from 'react';

import { IStackComponentProps } from './model';

import {StyledStack} from './styles';

export const Stack: React.FC<IStackComponentProps> = (props) => {

    const getDividerSpacing = () => {
        switch (props.direction) {
            case 'row':
            case 'row-reverse':
                return {margin: `0 ${props.spacing}px`, alignSelf: 'stretch'};

            case 'column':
            case 'column-reverse':
                return {margin: `${props.spacing}px 0`};

            default:
                return {};
        }
    };

    const getChildSpacing = (index: number) => {
        switch (props.direction) {
            case 'row':
                return index ? {marginLeft: props.spacing} : {};
            case 'row-reverse':
                return index ? {marginRight: props.spacing} : {};

            case 'column':
                return index ? {marginTop: props.spacing} : {};
            case 'column-reverse':
                return index ? {marginBottom: props.spacing} : {};

            default:
                return {};
        }
    };

    const dividerSpacingHandler = (element: JSX.Element | React.ReactElement) => {
        const spacingStyles = props.spacing ? getDividerSpacing() : {};
        return (
            <div style={spacingStyles} className="stack-divider-wrapper">
                {React.cloneElement(element, {key: Math.random()})}
            </div>
        );
    };

    const childSpacingHandler = (element: JSX.Element | React.ReactElement, index: number) => {
        const margin = props.spacing ? getChildSpacing(index) : {};
        return React.cloneElement(element, {key: Math.random(), style: {...element.props.style, ...margin}});
    };

    const renderChildren = () => {
        return React.Children.map(props.children, (child, key) => {
            if (React.isValidElement(child)){
                if (props.divider) {
                    return (
                        <>
                            {key !== 0 && dividerSpacingHandler(props.divider)}
                            {React.cloneElement(child, {key})}
                        </>
                    );
                }
                return childSpacingHandler(child, key);
                // return React.cloneElement(child, {key});
            }
            return <div />;
        });
    };

    return (
        <StyledStack {...props} children={renderChildren()} />
    );
};

export const HStack: React.FC<IStackComponentProps> = (props) => {
    return (
        <Stack {...props} />
    );
};

HStack.defaultProps = {
    align: 'stretch',
    className: '',
    direction: 'row',
    justify: 'initial',
    spacing: 0,
    style: {},
    wrap: 'wrap'
};

HStack.displayName = 'HStack';

export const VStack: React.FC<IStackComponentProps> = (props) => {
    return (
        <Stack {...props} />
    );
};

VStack.defaultProps = {
    align: 'initial',
    className: '',
    direction: 'column',
    justify: 'center',
    spacing: 0,
    style: {},
    wrap: 'wrap'
};

VStack.displayName = 'VStack';
