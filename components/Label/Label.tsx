import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILabelComponentProps } from './Model';

// Styled Components
import { StyledLabel } from './styles';
import variables from '../_utils/globals/variables';
/**
 * Label
 */
export const Label: React.FC<ILabelComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
		!props.disabled && props.onClick && props.onClick(e);
	};

	const children =
		props.limit && typeof props.children === 'string'
			? props.children && props.children.length > props.limit
				? props.children.substr(0, props.limit) + '...'
				: props.children
			: props.children;

	return (
		<StyledLabel
			fontWeight={500}
			d="flex"
			fontColor={props.palette?.fontColors.text || variables.fontColors.text}
			cursor={!props.disabled ? (props.onClick ? 'pointer' : 'unset') : 'not-allowed'}
			fontSize={[14, 14, 16, 16]}
			{...props}
			onClick={props.onClick ? onClick : undefined}
			children={children}
			boxAs="label"
		/>
	);
});

Label.displayName = 'Label';
