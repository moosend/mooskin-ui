import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { IButtonComponentProps } from './model';

// Styled Components
import { StyledButtonIcon, StyledButtonInverse, StyledButtonNormal } from './styles';

/**
 * Button
 */
export const Button: React.FC<IButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        !props.disabled && props.onClickButton && props.onClickButton(e);
        !props.disabled && props.onClick && props.onClick(e);
    };

    const ButtonComponent = props.inverseStyle ? StyledButtonInverse : StyledButtonNormal;

    return <ButtonComponent {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
};

Button.defaultProps = {
    buttonSize: 'md',
    className: '',
    style: {},
    type: 'button'
};

Button.displayName = 'Button';

/**
 * ButtonIcon
 */
export const ButtonIcon: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledButtonIcon {...props} />;
};

ButtonIcon.defaultProps = {
    className: '',
    style: {}
};

ButtonIcon.displayName = 'ButtonIcon';

export default Button;
