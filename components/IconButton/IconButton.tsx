import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IIconButtonComponentProps } from './model';

// Styled Components
import { StyledIconButton } from './styles';

import variables from '../_utils/globals/variables';
/**
 * IconButton
 */
export const IconButton: React.FC<IIconButtonComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return (
		<StyledIconButton
			fontFamily="Mooskin Icons"
			fontSize="21px"
			fontStyle="normal"
			color={props.palette?.fontColors.primary2 || variables.fontColors.primary2}
			textDecoration="none"
			cursor={props.disabled ? 'not-allowed' : 'pointer'}
			opacity={props.disabled ? 0.5 : 1}
			{...props}
			onClick={onClick}
			className={`notranslate ${className}`}
		/>
	);
});

IconButton.displayName = 'IconButton';
