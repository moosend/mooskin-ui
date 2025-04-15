import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';
import { getNumberOrStringValue } from '../Box/styles';
// Models
import { ILoaderComponentProps } from './model';
// import { getNumberOrStringValue } from '../Box/styles';
// Styled Components
import { StyledLoader } from './styles';

import variables from '../_utils/globals/variables';

/**
 * Loader
 */

export const Loader: React.FC<ILoaderComponentProps> = withMooskinContext(
	({ className = '', size = 50, spinnerWidth = 5, style = {}, ...props }) => {
		return (
			<StyledLoader
				border={`${getNumberOrStringValue(spinnerWidth)} solid ${props.palette?.borderColors.gray1 || variables.borderColors.gray1}`}
				borderTop={`${getNumberOrStringValue(spinnerWidth)} solid	${
					props.palette?.borderColors.primary1 || variables.borderColors.primary1
				}`}
				borderRadius="50%"
				w={getNumberOrStringValue(size)}
				h={getNumberOrStringValue(size)}
				{...props}
			/>
		);
	}
);

Loader.displayName = 'Loader';
