import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IAnchorComponentProps } from './model';

// Styled Components
import { StyledAnchor } from './styles';
import variables from '../_utils/globals/variables';
/**
 * Anchor
 */
export const Anchor: React.FC<IAnchorComponentProps> = withMooskinContext(({ className = '', style = {}, target = '_blank', ...props }) => {
	const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		props.disabled && e.preventDefault();
		!props.disabled && props.onClick && props.onClick(e);
	};
	return (
		<StyledAnchor
			cursor={props.disabled ? 'not-allowed' : 'pointer'}
			outline={0}
			fontSize="12px"
			textDecoration="underline"
			opacity={props.disabled ? 0.5 : 1}
			color={props.palette?.fontColors.secondary2 || variables.fontColors.secondary2}
			{...props}
			onClick={onClick}
			boxAs="a"
		/>
	);
});

Anchor.displayName = 'Anchor';
