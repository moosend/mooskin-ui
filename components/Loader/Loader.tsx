import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILoaderComponentProps } from './model';

// Styled Components
import { StyledLoader } from './styles';

/**
 * Loader
 */
export const Loader: React.FC<ILoaderComponentProps> = withMooskinContext((props) => {
    return <StyledLoader {...props} />;
});

Loader.defaultProps = {
    className: '',
    size: 50,
    spinnerWidth: 5,
    style: {}
};

Loader.displayName = 'Loader';

export default Loader;
