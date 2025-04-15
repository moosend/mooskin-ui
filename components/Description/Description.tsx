import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';

// Styled Components
import { StyledDescription } from './styles';
import variables from '../_utils/globals/variables';
/**
 * Description
 */
export const Description: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledDescription
			mt="10px"
			color={props.palette?.fontColors.medgray1 || variables.fontColors.medgray1}
			w="fit-content"
			fontSize={[12, 12, 13, 13]}
			{...props}
		/>
	);
});

Description.displayName = 'Description';
