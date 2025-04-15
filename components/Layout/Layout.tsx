import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILayoutComponentProps } from './model';

// Styled Components
import { StyledLayout } from './styles';

/**
 * Layout
 */
export const Layout: React.FC<ILayoutComponentProps> = withMooskinContext(({ className = '', spacing = 15, style = {}, ...props }) => {
	return (
		<StyledLayout
			d="grid"
			column-gap={`${spacing}px`}
			row-gap={`${spacing}px`}
			template-columns={props.cols && `repeat(${props.cols}, 1fr)`}
			{...props}
		/>
	);
});

Layout.displayName = 'Layout';
