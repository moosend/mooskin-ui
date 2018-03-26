import * as React from 'react';

// import styles from './ClipboardButton.css';

import Button from '../Button';

export interface IClipboardButtonProps{

    /** id of the component */
    id?: string;

    /** override button classes */
    className?: string;

    /** override button styles */
    style?: React.CSSProperties;

    /** value to be copied to clipboard */
    value: string;

    /** button label */
    label?: string;

    /** callback function when button is clicked */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class ClipboardButton extends React.Component<IClipboardButtonProps, {}>{

    static defaultProps = {
        className: '',
        label: 'Copy',
        style: {}
    };

    render(){
        return (
            <Button
                id={this.props.id}
                className={this.props.className}
                style={this.props.style}
                onClick={this.onButtonClick}
            >
                {this.props.label}
            </Button>
        );
    }

    onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const valueElement = document.createElement('textarea');
        valueElement.innerText = this.props.value;
        document.body.appendChild(valueElement);
        valueElement.select();
        document.execCommand('copy');
        valueElement.remove();
        this.props.onClick && this.props.onClick(e);
    }
}
