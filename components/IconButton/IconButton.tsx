import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IIconButtonComponentProps } from './model';

// Styled Components
import { StyledIconButton } from './styles';

/**
 * IconButton
 */
export const IconButton: React.FC<IIconButtonComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};
	return <StyledIconButton {...props} onClick={onClick} className={`notranslate ${props.className}`} />;
});

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
	className: '',
	style: {}
};
