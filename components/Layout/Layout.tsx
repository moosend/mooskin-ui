import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILayoutComponentProps } from './model';

// Styled Components
import { StyledLayout } from './styles';

/**
 * Layout
 */
export const Layout: React.FC<ILayoutComponentProps> = withMooskinContext((props) => {
	return <StyledLayout {...props} />;
});

Layout.defaultProps = {
	className: '',
	spacing: 15,
	style: {},
};

Layout.displayName = 'Layout';
