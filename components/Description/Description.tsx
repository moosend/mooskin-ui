import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';

// Styled Components
import { StyledDescription } from './styles';

/**
 * Description
 */
export const Description: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledDescription fontSize={[12, 12, 13, 13]} noRender={['sm', 'xs']} {...props} />;
});

Description.defaultProps = {
	className: '',
	style: {}
};

Description.displayName = 'Description';
