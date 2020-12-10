import * as React from 'react';

// Models
import { IDescriptionComponentProps } from './model';

// Styled Components
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
