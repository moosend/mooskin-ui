import * as PropTypes from 'prop-types';
import * as React from 'react';

import ButtonStyles from './Button.css';

export interface IProps {
    /** text provided for the button */
    text: string;

    /** provide to make the button disabled */
    disabled?: boolean;

    /** provide to inverse the button's styles */
    inverseStyle?: boolean;

    /** callback that is called when the button is clicked */
    onClick: (e?: React.MouseEvent<HTMLInputElement>) => void;
}

class Button extends React.Component<IProps, {}> {

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
            backgroundColor: '#ffffff',
            border: '1px solid #5ccdde',
            color: '#5ccdde',
        };
    }

    private getDisabledStyles(){
        return {
            cursor: 'not-allowed',
        };
    }
}

export default Button;
