import * as React from 'react';

// Models
import { ILabelComponentProps } from './model';

// Styled Components
import { StyledLabel } from './styles';

export const Label: React.FC<ILabelComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };

    return <StyledLabel {...props} onClick={onClick} />;
};

Label.defaultProps = {
    className: '',
    style: {},
    width: 150
};

Label.displayName = 'Label';

export default Label;
