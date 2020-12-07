import * as React from 'react';

import { IAlertCloseButtonComponentProps, IAlertComponentProps } from './model';

import { StyledAlert, StyledAlertCloseButton, StyledAlertDescription, StyledAlertIcon, StyledAlertTitle } from './styles';

const AlertIcons = {
    error: 'error',
    info: 'announcement',
    success: 'check_circle',
    warning: 'warning'
};

export const Alert: React.FC<IAlertComponentProps> = (props) => {

    const recurseChildren = (children: any): any => {
        return React.Children.map(children, (child, i) => {
            if (
                React.isValidElement<IAlertComponentProps>(child) && (
                    child.type === AlertIcon ||
                    child.type === AlertTitle ||
                    child.type === AlertDescription ||
                    child.type === AlertCloseButton
                )
            ){
                return React.cloneElement(child, {key: i, status: props.status, variant: props.variant});
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }
            return child;
        });
    };

    return (
        <StyledAlert {...props}>
            {props.children && recurseChildren(props.children)}
        </StyledAlert>
    );
};

Alert.defaultProps = {
    className: '',
    status: 'info',
    style: {},
    variant: 'subtle'
};

export const AlertIcon: React.FC<IAlertComponentProps> = (props) => {
    return (
        <StyledAlertIcon {...props}>
            {props.status && AlertIcons[props.status]}
        </StyledAlertIcon>
    );
};

AlertIcon.defaultProps = {
    className: '',
    style: {}
};

export const AlertTitle: React.FC<IAlertComponentProps> = (props) => {
    return (
        <StyledAlertTitle {...props}>
            {props.children}
        </StyledAlertTitle>
    );
};

AlertTitle.defaultProps = {
    className: '',
    style: {}
};

export const AlertDescription: React.FC<IAlertComponentProps> = (props) => {
    return (
        <StyledAlertDescription {...props}>
            {props.children}
        </StyledAlertDescription>
    );
};

AlertDescription.defaultProps = {
    className: '',
    style: {}
};

export const AlertCloseButton: React.FC<IAlertCloseButtonComponentProps> = (props) => {
    return (
        <StyledAlertCloseButton {...props} children="close" />
    );
};

AlertCloseButton.defaultProps = {
    className: '',
    style: {}
};

export default Alert;
