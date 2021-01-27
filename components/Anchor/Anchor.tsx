import * as React from 'react';

// Models
import { IAnchorComponentProps } from './model';

// Styled Components
// import { StyledAnchor } from './styles';

export const Anchor: React.FC<IAnchorComponentProps> = (props) => {
    // const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     props.disabled && e.preventDefault();
    //     !props.disabled && props.onClickAnchor && props.onClickAnchor(e);
    //     !props.disabled && props.onClick && props.onClick(e);
    // };
    // return <StyledAnchor {...props} onClick={onClick} boxAs="a" />;
    return null;
};

Anchor.defaultProps = {
    className: '',
    style: {},
    target: '_blank'
};

Anchor.displayName = 'Anchor';

export default Anchor;
