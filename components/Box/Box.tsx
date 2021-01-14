import * as React from 'react';

// Models
import { IDivBoxComponentProps } from './model';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Styled Components
import {StyledBox} from './styles';

export const Box: React.FC<IDivBoxComponentProps> = withMooskinContext((props) => {
    return <StyledBox {...props} as={props.boxAs} />;
});

Box.defaultProps = {
    className: '',
    style: {}
};

Box.displayName = 'Box';

export default Box;
