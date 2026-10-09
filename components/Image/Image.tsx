import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { IBoxImageComponentProps } from '../Box/model';

// Styled Components
import { StyledImage } from './styles';

/**
 * Image
 */
export const Image: React.FC<IBoxImageComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledImage d="block" {...props} boxAs="img" />
));

Image.displayName = 'Image';
