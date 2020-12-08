import * as React from 'react';

import { IColProps, IGridProps, IRowProps } from './model';

import { StyledCol, StyledGrid, StyledRow } from './styles';

export const Grid: React.FC<IGridProps> = (props) => {
    return <StyledGrid {...props} />;
};

Grid.defaultProps = {
    className: '',
    style: {}
};

Grid.displayName = 'Grid';

export const Row: React.FC<IRowProps> = (props) => {
    return <StyledRow {...props} />;
};

Row.defaultProps = {
    className: '',
    style: {}
};

Row.displayName = 'Row';

export const Col: React.FC<IColProps> = (props) => {
    return <StyledCol {...props} />;
};

Col.defaultProps = {
    className: '',
    style: {}
};

Col.displayName = 'Col';

export default Grid;
