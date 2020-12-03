import * as React from 'react';
import { IBoxComponentProps } from './model';

import {StyledBox} from './styles';

export const Box: React.FC<IBoxComponentProps> = (props) => {
    return <StyledBox {...props} />;
};

Box.defaultProps = {
    className: '',
    style: {},
    w: 'fit-content'
};

Box.displayName = 'Box';

export default Box;
