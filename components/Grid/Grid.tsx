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
export const Grid: React.FC<IGridProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledGrid className={className} style={style} {...props} />;
});

Grid.displayName = 'Grid';

/**
 * Row
 */
export const Row: React.FC<IRowProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledRow className={className} style={style} {...props} />;
});

Row.displayName = 'Row';

/**
 * Col
 */
export const Col: React.FC<IColProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledCol className={className} style={style} {...props} />;
});

Col.displayName = 'Col';
