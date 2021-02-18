import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IDescriptionComponentProps } from './model';

// Styled Components
import { StyledDescription } from './styles';

/**
 * Description
 */
export const Description: React.FC<IDescriptionComponentProps> = withMooskinContext((props) => {
    return <StyledDescription {...props} />;
});

Description.defaultProps = {
    className: '',
    style: {}
};

Description.displayName = 'Description';
