import * as React from 'react';
import variables from '../_utils/globals/variables';

import { IButtonComponentProps } from './model';

import { ButtonIcon, ButtonInverse, ButtonNormal } from './styles';

export const Button: React.FC<IButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };

    const ButtonComponent = props.inverseStyle ? ButtonInverse : ButtonNormal;

    return (
        <ButtonComponent {...props} onClick={onClick} as={props.href ? 'a' : 'button'}>
            {props.icon && <ButtonIcon>{props.icon}</ButtonIcon>}
            {props.children}
        </ButtonComponent>
    );
};

Button.defaultProps = {
    className: '',
    primaryColor: variables.backgroundPrimary,
    size: 'md',
    style: {},
    type: 'button',
};

Button.displayName = 'Button';

export default Button;
