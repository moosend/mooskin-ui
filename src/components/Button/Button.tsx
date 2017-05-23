import * as React from 'react';

import styles from './Button.css';

export interface IProps {
    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    inverseStyle?: boolean;

    /** override button styles */
    style?: {[key: string]: string};

    /** callback that is called when the button is clicked */
    onClick: (e?: React.MouseEvent<HTMLInputElement>) => void;

    /** React children must be a string, basically you need to put a string between the JSX tags */
    children: string;
}

class Button extends React.Component<IProps, {}> {

    public static defaultProps = {
        style: {}
    };

    public render(){

        const {style, inverseStyle, disabled, children} = this.props;

        const buttonStyles = inverseStyle ? styles.inverseButton : styles.normalButton;
        const disabledStyles = disabled ? styles.disabledButton : '';

        return (
            <button
                onClick={this.onClick}
                disabled={disabled}
                className={`button-component ${styles.button} ${buttonStyles} ${disabledStyles}`}
                style={style}
            >
                {children}
            </button>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        !this.props.disabled && this.props.onClick(e);
    }
}

export default Button;
