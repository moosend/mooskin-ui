import * as React from 'react';

import { IAnchorComponentProps } from './model';

import { StyledAnchor } from './styles';

export const Anchor: React.FC<IAnchorComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        props.disabled && e.preventDefault();
        !props.disabled && props.onClick && props.onClick(e);
    };

    return (
        <StyledAnchor {...props} onClick={onClick} boxAs="a">
            {props.children}
        </StyledAnchor>
    );
};

Anchor.defaultProps = {
    className: '',
    style: {},
    target: '_blank',
};

export default Anchor;
