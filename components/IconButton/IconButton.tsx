import * as React from 'react';
import { IIconButtonComponentProps } from './model';
import { StyledIconButton } from './styles';

export const IconButton: React.FC<IIconButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };
    return <StyledIconButton {...props} onClick={onClick} />;
};

export default IconButton;
