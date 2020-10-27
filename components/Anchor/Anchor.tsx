import * as React from 'react';

import { IAnchorComponentProps } from './model';

import {StyledAnchor} from './styles';

export const Anchor: React.FC<IAnchorComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        props.disabled && e.preventDefault();
        props.onClick && props.onClick(e);
    };

    return (
        <StyledAnchor
            id={props.id}
            disabled={props.disabled}
            href={props.href}
            className={props.className}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </StyledAnchor>
    );
};

Anchor.defaultProps = {
    className: '',
    style: {},
    target: '_blank'
};

export default Anchor;
