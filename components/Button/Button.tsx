import * as React from 'react';

import { IButtonComponentProps } from './model';

import {ButtonIcon, InversedButton, NormalButton} from './styles';

export const Button: React.FC<IButtonComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };

    const ButtonComponent = props.inverseStyle ? InversedButton : NormalButton;

    return (
        <ButtonComponent
            id={props.id}
            type={props.type}
            disabled={props.disabled}
            className={props.className}
            style={props.style}
            onClick={onClick}
        >
            {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
            {props.children}
        </ButtonComponent>
    );
};

export default Button;
