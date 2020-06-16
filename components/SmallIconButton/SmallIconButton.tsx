import * as React from 'react';

import icons from '../../assets/material-icons/material-icons.css';
import styles from './SmallIconButton.css';

export interface ISmallIconButtonProps {
    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    transparent?: boolean;

    /** button icon */
    icon?: string;

    /** button id attribute */
    id?: string;

    /** button class */
    className?: string;

    /** override button styles */
    style?: React.CSSProperties;

    /** type of the material icon */
    type?: 'outlined' | 'twotone' | 'round' | 'sharp';

    title?: string;

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const TypeStyles = {
    outlined: styles.outlined,
    round: styles.round,
    sharp: styles.sharp,
    twotone: styles.twoTone
};

export default class SmallIconButton extends React.Component<ISmallIconButtonProps, {}> {

    static defaultProps = {
        className: '',
        style: {},
        type: ''
    };

    static displayName = 'SmallIconButton';

    render(){

        const {style, transparent, disabled, className, id, type} = this.props;

        const buttonStyles = transparent ? styles.transparent : styles.normalButton;
        const disabledStyles = disabled ? styles.disabledButton : '';
        const iconFont = this.getIcon();
        const iconType = type && TypeStyles[type] ? TypeStyles[type] : '';

        const classes = `button-icon-component
                         ${styles.button}
                         ${buttonStyles}
                         ${disabledStyles}
                         ${className}`;

        return (
            <button
                id={id}
                onClick={this.onClick}
                disabled={disabled}
                className={classes}
                title={this.props.title}
                style={style}
            >
                <i className={`${icons.materialIcons} ${styles.icon} ${iconType}`} >{iconFont}</i>
            </button>
        );
    }

    onClick = (e: React.MouseEvent<HTMLElement>) => {
        !this.props.disabled && this.props.onClick && this.props.onClick(e);
    }

    getIcon = () => {
        return this.props.icon ? this.props.icon.replace(/\s/g, '_') : '';
    }
}
