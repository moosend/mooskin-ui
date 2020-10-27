import * as React from 'react';

import { IButtonComponentProps } from './model';

import {ButtonIcon, InverseButton, NormalButton} from './styles';

export const Button: React.FC<IButtonComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };

    const ButtonComponent = props.inverseStyle ? InverseButton : NormalButton;

    return (
        <ButtonComponent
            {...props}
            onClick={onClick}
            as={props.href ? 'a' : 'button'}
        >
            {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
            {props.children}
        </ButtonComponent>
    );
};

Button.defaultProps = {
    className: '',
    size: 'md',
    style: {},
    type: 'button'
};

export default Button;
