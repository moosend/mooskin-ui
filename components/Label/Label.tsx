import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILabelComponentProps } from './model';

// Styled Components
import { StyledLabel } from './styles';

/**
 * Label
 */
export const Label: React.FC<ILabelComponentProps> = withMooskinContext((props) => {
	const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};

	return <StyledLabel {...props} onClick={onClick} boxAs="label" />;
});

Label.defaultProps = {
	className: '',
	style: {},
};

Label.displayName = 'Label';
