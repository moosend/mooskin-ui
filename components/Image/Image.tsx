import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxImageComponentProps } from '../Box/model';

// Styled Components
import { StyledImage } from './styles';

/**
 * Image
 */
export const Image: React.FC<IBoxImageComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledImage d="block" {...props} boxAs="img" />;
});

Image.displayName = 'Image';
