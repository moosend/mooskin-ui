import * as React from 'react';

import { IAlertCloseButtonComponentProps, IAlertComponentProps } from './model';

import { StyledAlert, StyledAlertCloseButton, StyledAlertDescription, StyledAlertIcon, StyledAlertTitle } from './styles';

const AlertIcons = {
    error: 'error',
    info: 'announcement',
    success: 'check_circle',
    warning: 'warning'
};

/**
 * Alert
 */
export const Alert: React.FC<IAlertComponentProps> = (props) => {

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (
                React.isValidElement<IAlertComponentProps>(child) && (
                    child.type === AlertIcon ||
                    child.type === AlertTitle ||
                    child.type === AlertDescription ||
                    child.type === AlertCloseButton
                )
            ){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    key: i,
                    status: child.props.status ? child.props.status : props.status,
                    variant: child.props.variant ? child.props.variant : props.variant
                } as IAlertComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledAlert {...props} children={recurseChildren(props.children)} />;
};

Alert.defaultProps = {
    className: '',
    status: 'info',
    style: {},
    variant: 'subtle'
};

Alert.displayName = 'Alert';

/**
 * AlertIcon
 */
export const AlertIcon: React.FC<IAlertComponentProps> = (props) => {
    return <StyledAlertIcon {...props} children={props.status && AlertIcons[props.status]} />;
};

AlertIcon.defaultProps = {
    className: '',
    style: {}
};

AlertIcon.displayName = 'AlertIcon';

/**
 * AlertTitle
 */
export const AlertTitle: React.FC<IAlertComponentProps> = (props) => {
    return <StyledAlertTitle {...props} />;
};

AlertTitle.defaultProps = {
    className: '',
    style: {}
};

AlertTitle.displayName = 'AlertTitle';

/**
 * AlertDescription
 */
export const AlertDescription: React.FC<IAlertComponentProps> = (props) => {
    return <StyledAlertDescription {...props} />;
};

AlertDescription.defaultProps = {
    className: '',
    style: {}
};

AlertDescription.displayName = 'AlertDescription';

/**
 * AlertCloseButton
 */
export const AlertCloseButton: React.FC<IAlertCloseButtonComponentProps> = (props) => {
    return <StyledAlertCloseButton {...props} children="close" />;
};

AlertCloseButton.defaultProps = {
    className: '',
    style: {}
};

AlertCloseButton.displayName = 'AlertCloseButton';

export default Alert;
