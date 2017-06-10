import * as React from 'react';

import styles from './SmallIconButton.css';

export interface ISmallIconButtonProps {
    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    inverseStyle?: boolean;

    /** button icon */
    icon?: string;

    /** button id attribute */
    id?: string;

    /** button class */
    className?: string;

    /** override button styles */
    style?: {[key: string]: string};

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;

    /** children can only be a string */
    children?: HTMLElement;
}

export default class SmallIconButton extends React.Component<ISmallIconButtonProps, {}> {

    public static defaultProps = {
        className: '',
        style: {},
    };

    public render(){

        const {style, inverseStyle, disabled, children, className, id} = this.props;

        const buttonStyles = inverseStyle ? styles.inverseButton : styles.normalButton;
        const disabledStyles = disabled ? styles.disabledButton : '';

        const iconStyle = this.props.icon ? this.getIcon() : '';
        const classes = `button-icon-component
                         ${styles.button}
                         ${buttonStyles}
                         ${disabledStyles}
                         ${className}
                         ${iconStyle}`;

        return (
            <button
                id={id}
                onClick={this.onClick}
                disabled={disabled}
                className={classes}
                style={style}
            >
                {children}
            </button>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLElement>) => {
        !this.props.disabled && this.props.onClick && this.props.onClick(e);
    }

    private getIcon = () => {
        const iconClass = this.props.icon ? this.props.icon.replace(/\s/g, '') : '';
        return styles[iconClass];
    }
}
