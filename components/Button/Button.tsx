import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IButtonComponentProps } from './model';

// Styled Components
import { StyledButton, StyledButtonIcon, StyledButtonSecondary } from './styles';

/**
 * Button
 */
export const Button: React.FC<IButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return <StyledButton {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
});

Button.defaultProps = {
	buttonSize: 'md',
	className: '',
	style: {},
	type: 'button',
};

Button.displayName = 'Button';

/**
 * ButtonSecondary
 */
export const ButtonSecondary: React.FC<IButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return <StyledButtonSecondary {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
});

ButtonSecondary.defaultProps = {
	buttonSize: 'md',
	className: '',
	style: {},
	type: 'button',
};

ButtonSecondary.displayName = 'ButtonSecondary';

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
