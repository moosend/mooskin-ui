import * as React from 'react';

import styles from './Button.css';

export interface IButtonProps {
    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    inverseStyle?: boolean;

    /** button id attribute */
    id?: string;

    /** button href */
    href?: string;

    /** button type */
    type?: string;

    /** button class */
    className?: string;

    /** override button styles */
    style?: {[key: string]: string};

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;

    /** children can only be a string */
    children?: string;
}

export default class Button extends React.Component<IButtonProps, {}> {

    public static defaultProps = {
        className: '',
        style: {},
        type: 'button'
    };

    public render(){

        const {style, inverseStyle, disabled, children, className, id, href, type} = this.props;

        const buttonStyles = inverseStyle ? styles.inverseButton : styles.normalButton;
        const disabledStyles = disabled ? styles.disabledButton : '';

        const classes = `button-component ${styles.button} ${buttonStyles} ${disabledStyles} ${className}`;

        return (
            <button
                id={id}
                type={type}
                onClick={this.onClick}
                disabled={disabled}
                className={classes}
                style={style}
            >
                <a href={href} className={styles.anchor}>{children}</a>
            </button>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLElement>) => {
        !this.props.disabled && this.props.onClick && this.props.onClick(e);
    }
}
