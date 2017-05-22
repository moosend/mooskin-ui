import PropTypes from "prop-types";
import React from "react";

import ButtonStyles from "./Button.css";

export interface IProps {
    label: string;
    disabled?: boolean;
    inverseStyle?: boolean;
}

class Button extends React.Component<IProps, {}> {

    /**
     * @param {boolean} disabled
     * @param {boolean} inverseStyle
     * @param {string} label
     */
    public static propTypes = {
        disabled: PropTypes.bool,
        inverseStyle: PropTypes.bool,
        label: PropTypes.string.isRequired,
    };

    public render(){

        const invertedStyles = this.props.inverseStyle ? this.getInverseStyles() : {};
        const disabledStyles = this.props.disabled ? this.getDisabledStyles() : {};

        return (
            <button
                disabled={this.props.disabled}
                className={`button-component ${ButtonStyles.button}`}
                style={{...invertedStyles, ...disabledStyles}}
            >
                {this.props.label}
            </button>
        );
    }

    private getInverseStyles(){
        return {
            backgroundColor:  "#ffffff",
            border: "1px solid #5ccdde",
            color: "#5ccdde",
        };
    }

    private getDisabledStyles(){
        return {
            cursor:  "not-allowed",
        };
    }
}

export default Button;
