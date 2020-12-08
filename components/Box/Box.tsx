import * as React from 'react';
import { IBoxComponentProps } from './model';

import {StyledBox} from './styles';

export const Box: React.FC<IBoxComponentProps> = (props) => {
    return <StyledBox {...props} as={props.boxAs} />;
};

Box.defaultProps = {
    className: '',
    style: {}
};

Box.displayName = 'Box';

export default Box;
