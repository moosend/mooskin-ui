import * as React from 'react';
import { IBoxComponentProps } from '../index';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
// import { IBoxTextComponentProps } from '../Box/model';

// Styled Components
import { StyledText } from './styles';

/**
 * Text
 */
export const Text: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	// return <StyledText {...props} boxAs="span" />;
	return <StyledText {...props} />;
});

Text.defaultProps = {
	className: '',
	style: {},
};

Text.displayName = 'Text';
