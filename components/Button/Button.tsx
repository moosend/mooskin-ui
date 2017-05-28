import * as React from 'react';

import styles from './Button.css';

export interface IButtonProps {
    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    inverseStyle?: boolean;

    /** button id attribute */
    id?: string;

    /** button class */
    className?: string;

    /** override button styles */
    style?: {[key: string]: string};

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void;

    /** children can only be a string */
    children?: string;
}

export default class Button extends React.Component<IButtonProps, {}> {

    public static defaultProps = {
        className: '',
        style: {},
    };

    public render(){

        const {style, inverseStyle, disabled, children, className, id} = this.props;

        const buttonStyles = inverseStyle ? styles.inverseButton : styles.normalButton;
        const disabledStyles = disabled ? styles.disabledButton : '';

        const classes = `button-component ${styles.button} ${buttonStyles} ${disabledStyles} ${className}`;

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

    private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        !this.props.disabled && this.props.onClick && this.props.onClick(e);
    }
}
