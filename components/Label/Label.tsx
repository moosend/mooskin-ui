import * as React from 'react';

import { ILabelComponentProps } from './model';
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
