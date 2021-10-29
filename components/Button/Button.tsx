import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IButtonComponentProps } from './model';

// Styled Components
import { StyledButton, StyledButtonIcon, StyledButtonThree, StyledButtonTwo } from './styles';

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
	type: 'button'
};

Button.displayName = 'Button';

/**
 * ButtonTwo
 */
export const ButtonTwo: React.FC<IButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return <StyledButtonTwo {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
});

ButtonTwo.defaultProps = {
	buttonSize: 'md',
	className: '',
	style: {},
	type: 'button'
};

ButtonTwo.displayName = 'ButtonTwo';

/**
 * ButtonThree
 */
export const ButtonThree: React.FC<IButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return <StyledButtonThree {...props} onClick={onClick} boxAs={props.href ? 'a' : 'button'} />;
});

ButtonThree.defaultProps = {
	buttonSize: 'md',
	className: '',
	style: {},
	type: 'button'
};

ButtonThree.displayName = 'ButtonThree';

/**
 * ButtonIcon
 */
export const ButtonIcon: React.FC<IBoxComponentProps> = (props) => {
	return <StyledButtonIcon {...props} className={`notranslate ${props.className}`} />;
};

ButtonIcon.defaultProps = {
	className: '',
	style: {}
};

ButtonIcon.displayName = 'ButtonIcon';
