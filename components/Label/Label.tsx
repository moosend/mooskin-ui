import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILabelComponentProps } from './model';

// Styled Components
import { StyledLabel } from './styles';

/**
 * Label
 */
export const Label: React.FC<ILabelComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};

	const children =
		props.limit && typeof props.children === 'string'
			? props.children && props.children.length > props.limit
				? props.children.substr(0, props.limit) + '...'
				: props.children
			: props.children;

	return <StyledLabel {...props} onClick={props.onClick ? onClick : undefined} children={children} boxAs="label" />;
});

Label.defaultProps = {
	className: '',
	style: {},
};

Label.displayName = 'Label';
