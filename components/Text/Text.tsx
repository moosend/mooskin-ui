import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ITextComponentProps } from './model';

// Styled Components
import { StyledText } from './styles';

/**
 * Text
 */
export const Text: React.FC<ITextComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const children =
		props.limit && typeof props.children === 'string'
			? props.children && props.children.length > props.limit
				? props.children.substr(0, props.limit) + '...'
				: props.children
			: props.children;
	return <StyledText {...props} children={children} />;
});

Text.displayName = 'Text';
