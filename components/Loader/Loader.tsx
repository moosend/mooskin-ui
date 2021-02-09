import * as React from 'react';

// Models
import { ILoaderComponentProps } from './model';

// Styled Components
import { StyledLoader } from './styles';

/**
 * Loader
 */
export const Loader: React.FC<ILoaderComponentProps> = (props) => {
    return <StyledLoader {...props} />;
};

Loader.defaultProps = {
    className: '',
    size: 50,
    spinnerWidth: 5,
    style: {}
};

Loader.displayName = 'Loader';

export default Loader;
