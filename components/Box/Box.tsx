import * as React from 'react';

// Models
import { IBoxComponentProps } from './model';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Styled Components
import { StyledBox } from './styles';

/**
 * Box
 */
export const Box: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledBox {...props} as={props.boxAs} />;
});

Box.defaultProps = {
	className: '',
	style: {},
	transition: '0.2s all',
};

Box.displayName = 'Box';
