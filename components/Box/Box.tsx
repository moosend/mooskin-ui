import * as React from 'react';
import { withMooskinContext } from '../Styled/MooskinContextProvider';

import { IBoxComponentProps } from './model';

import {StyledBox} from './styles';

export const Box: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
    return <StyledBox {...props} as={props.boxAs} />;
});

Box.defaultProps = {
    className: '',
    style: {}
};

Box.displayName = 'Box';

export default Box;
