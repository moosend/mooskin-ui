import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { Box } from '../Box/Box';
import { IBoxComponentProps } from '../Box/model';
import { IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Styled Components
import { StyledActionsDropdownArrow, StyledActionsDropdownFadeIn, StyledActionsDropdownFadeOut, StyledActionsDropdownItem } from './styles';

// Transitions
import { Transition } from 'react-transition-group';
const DropdownComponents = {
	entered: StyledActionsDropdownFadeIn,
	entering: StyledActionsDropdownFadeIn,
	exited: null,
	exiting: StyledActionsDropdownFadeOut,
	unmounted: null,
};

/**
 * ActionsDropdown
 */
export const ActionsDropdown: React.FC<IActionsDropdownComponentProps> = withMooskinContext((props) => {
	const [hasArrow, setHasArrow] = React.useState(false);

	const batchClickHandler = (
		e: React.MouseEvent<HTMLElement>,
		data: IInputCallbackData,
		callback?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void
	) => {
		props.onClickItem && props.onClickItem(e, data);
		callback && callback(e, data);
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IActionsDropdownItemComponentProps>(child) && child.type === ActionsDropdownItem) {
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i,
					onClick: (e) => batchClickHandler(e, { dataLabel: child.props.dataLabel, value: child.props.value }, child.props.onClick),
				} as IActionsDropdownItemComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ActionsDropdownArrow) {
				!hasArrow && setHasArrow(true);
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i,
				} as IBoxComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.isOpen} timeout={150}>
			{(state) => {
				const ActionDropdownComponent = DropdownComponents[state];
				if (ActionDropdownComponent) {
					return (
						<ActionDropdownComponent boxShadow="base" {...props}>
							<Box position="absolute" h={30} top={-30} left={0} right={0} />
							{!hasArrow && <ActionsDropdownArrow boxShadow="base" />}
							{recurseChildren(props.children)}
						</ActionDropdownComponent>
					);
				}
				return null;
			}}
		</Transition>
	);
});

ActionsDropdown.defaultProps = {
	className: '',
	style: {},
};

ActionsDropdown.displayName = 'ActionsDropdown';

/**
 * ActionsDropdownItem
 */
export const ActionsDropdownItem: React.FC<IActionsDropdownItemComponentProps> = withMooskinContext((props) => {
	return <StyledActionsDropdownItem {...props} />;
});

ActionsDropdownItem.defaultProps = {
	className: '',
	style: {},
};

ActionsDropdownItem.displayName = 'ActionsDropdownItem';

/**
 * ActionsDropdownArrow
 */
export const ActionsDropdownArrow: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledActionsDropdownArrow {...props} />;
});

ActionsDropdownArrow.defaultProps = {
	className: '',
	style: {},
};

ActionsDropdownArrow.displayName = 'ActionsDropdownArrow';
