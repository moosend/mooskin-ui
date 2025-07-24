import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IStackComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// Styled Components
import { StyledStack } from './styles';

/**
 * Stack
 */
export const Stack: React.FC<IStackComponentProps> = withMooskinContext((props) => {
	const getDividerSpacing = () => {
		switch (props.direction) {
			case 'row':
			case 'row-reverse':
				return { mx: props.spacing, alignSelf: 'stretch' as 'stretch' };

			case 'column':
			case 'column-reverse':
				return { my: props.spacing };

			default:
				return {};
		}
	};

	const getChildSpacing = (index: number) => {
		switch (props.direction) {
			case 'row':
				return index ? { marginLeft: props.spacing } : {};
			case 'row-reverse':
				return index ? { marginRight: props.spacing } : {};

			case 'column':
				return index ? { marginTop: props.spacing } : {};
			case 'column-reverse':
				return index ? { marginBottom: props.spacing } : {};

			default:
				return {};
		}
	};

	const dividerSpacingHandler = (element: JSX.Element | React.ReactElement, i: number) => {
		const spacingStyles = props.spacing ? getDividerSpacing() : {};
		return <Box {...spacingStyles}>{React.cloneElement(element, { key: `divider${i}` })}</Box>;
	};

	const childSpacingHandler = (element: JSX.Element | React.ReactElement, i: number) => {
		const margin = props.spacing ? getChildSpacing(i) : {};
		return React.cloneElement(element, { key: `divider${i}`, style: { ...element.props.style, ...margin } });
	};

	const renderChildren = () => {
		return React.Children.map(props.children, (child, key) => {
			if (React.isValidElement(child)) {
				if (props.divider) {
					return (
						<>
							{key !== 0 && dividerSpacingHandler(props.divider, key)}
							{React.cloneElement(child, { key })}
						</>
					);
				}
				return childSpacingHandler(child, key);
			}
			return <div />;
		});
	};

	return <StyledStack {...props} children={renderChildren()} />;
});

Stack.displayName = 'Stack';

/**
 * HStack
 */
export const HStack: React.FC<IStackComponentProps> = withMooskinContext(
	({ align = 'stretch', className = '', direction = 'row', flexWrap = 'wrap', justify = 'initial', spacing = 0, style = {}, ...props }) => {
		return <Stack {...props} />;
	}
);

HStack.displayName = 'HStack';

/**
 * VStack
 */
export const VStack: React.FC<IStackComponentProps> = withMooskinContext(
	({
		align = 'initial',
		className = '',
		direction = 'column',
		flexWrap = 'wrap',
		justify = 'center',
		spacing = 0,
		style = {},
		...props
	}) => {
		return <Stack {...props} />;
	}
);

VStack.displayName = 'VStack';
