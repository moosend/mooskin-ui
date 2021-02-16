import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IColProps, IGridProps, IRowProps } from './model';

// Styled Components
import { StyledCol, StyledGrid, StyledRow } from './styles';

/**
 * Grid
 */
export const Grid: React.FC<IGridProps> = withMooskinContext((props) => {
    return <StyledGrid {...props} />;
});

Grid.defaultProps = {
    className: '',
    style: {}
};

Grid.displayName = 'Grid';

/**
 * Row
 */
export const Row: React.FC<IRowProps> = withMooskinContext((props) => {
    return <StyledRow {...props} />;
});

Row.defaultProps = {
    className: '',
    style: {}
};

Row.displayName = 'Row';

/**
 * Col
 */
export const Col: React.FC<IColProps> = withMooskinContext((props) => {
    return <StyledCol {...props} />;
});

Col.defaultProps = {
    className: '',
    style: {}
};

Col.displayName = 'Col';

export default Grid;
