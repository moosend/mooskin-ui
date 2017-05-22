import PropTypes from "prop-types";
import React from "react";

import ButtonStyles from "./Button.css";

export interface IProps {
    text: string;
    disabled?: boolean;
    inverseStyle?: boolean;
    onClick: (e?: React.MouseEvent<HTMLInputElement>) => void;
}

class Button extends React.Component<IProps, {}> {

    /**
     * @param {boolean} disabled
     * @param {boolean} inverseStyle
     * @param {string} label
     * @param {Function} onClick
     */
    public static propTypes = {
        disabled: PropTypes.bool,
        inverseStyle: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
    };

    public render(){

        const invertedStyles = this.props.inverseStyle ? this.getInverseStyles() : {};
        const disabledStyles = this.props.disabled ? this.getDisabledStyles() : {};

        return (
            <button
                onClick={this.onClick}
                disabled={this.props.disabled}
                className={`button-component ${ButtonStyles.button}`}
                style={{...invertedStyles, ...disabledStyles}}
            >
                {this.props.text}
            </button>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        this.props.onClick(e);
    }

    private getInverseStyles(){
        return {
            backgroundColor: "#ffffff",
            border: "1px solid #5ccdde",
            color: "#5ccdde",
        };
    }

    private getDisabledStyles(){
        return {
            cursor: "not-allowed",
        };
    }
}

export default Button;
