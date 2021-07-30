import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IButtonComponentProps } from './model';

// Styled Components
import { StyledButtonIcon, StyledButtonInverse, StyledButtonNormal } from './styles';

/**
 * Button
 */
export const Button: React.FC<IButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	const ButtonComponent = props.inverseStyle ? StyledButtonInverse : StyledButtonNormal;
	return <ButtonComponent {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
});

Button.defaultProps = {
	buttonSize: 'md',
	className: '',
	style: {},
	type: 'button',
};

Button.displayName = 'Button';

/**
 * ButtonIcon
 */
export const ButtonIcon: React.FC<IBoxComponentProps> = (props) => {
	return <StyledButtonIcon {...props} className={`notranslate ${props.className}`} />;
};

ButtonIcon.defaultProps = {
	className: '',
	style: {},
};

ButtonIcon.displayName = 'ButtonIcon';
