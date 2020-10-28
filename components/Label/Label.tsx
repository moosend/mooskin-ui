import * as React from 'react';
import variables from '../_utils/globals/variables';

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
    primaryColor: variables.label,
    style: {},
};

Label.displayName = 'Label';

export default Label;
