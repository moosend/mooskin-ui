import * as React from 'react';

import { IDescriptionComponentProps } from './model';
import { StyledDescription } from './styles';

export const Description: React.FC<IDescriptionComponentProps> = (props) => {
    return <StyledDescription {...props} />;
};

Description.defaultProps = {
    className: '',
    style: {}
};

Description.displayName = 'Description';

export default Description;
