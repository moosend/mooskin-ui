import * as React from 'react';
import ButtonStyles from './Button.css';

export interface Props{
    color: string,
    label: string
}

class Button extends React.Component<Props, {}>{
    render(){
        return <button style={{color: this.props.color}}>{this.props.label}</button>
    }
}

export default Button;