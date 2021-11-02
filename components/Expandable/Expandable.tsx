import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IExpandableCommonComponentProps, IExpandableComponentProps, IExpandableItemComponentProps } from './model';

// Styled Components
import {
	StyledExpandable,
	StyledExpandableItem,
	StyledExpandableItemButton,
	StyledExpandableItemContainer,
	StyledExpandableItemContent,
	StyledExpandableItemText
} from './styles';

// Transitions
import { Transition } from 'react-transition-group';

/**
 * Expandable
 */
export const Expandable: React.FC<IExpandableComponentProps> = withMooskinContext((props) => {
	const batchClickHandler = (
		e: React.MouseEvent<HTMLElement>,
		activeId?: string | number,
		callback?: (e: React.MouseEvent<HTMLElement>) => void
	) => {
		const value = props.activeItem === activeId ? '' : activeId;
		props.onClickItem && props.onClickItem(e, value);
		callback && callback(e);
	};

	const getActiveItem = (activeId?: string | number) => {
		if (props.activeItem && Array.isArray(props.activeItem)) {
			return (props.activeItem as any).includes(activeId);
		}
		return props.activeItem === activeId;
	};

	const recurseChildren = (children: any, activeId?: string | number, active?: boolean): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IExpandableItemComponentProps>(child) && child.type === ExpandableItem) {
				const isActive = child.props.active ? child.props.active : getActiveItem(child.props.activeId);
				return React.cloneElement(child, {
					active: active ? active : isActive,
					activeId: activeId ? activeId : child.props.activeId,
					children: recurseChildren(child.props.children, child.props.activeId, isActive),
					key: i
				} as IExpandableItemComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ExpandableItemContainer) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children, activeId, active),
					key: i,
					onClick: (e) => batchClickHandler(e, activeId, child.props.onClick)
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IExpandableCommonComponentProps>(child) && child.type === ExpandableItemButton) {
				return React.cloneElement(child, {
					active,
					children: child.props.children ? recurseChildren(child.props.children, activeId, active) : 'keyboard_arrow_down',
					key: i
				} as IExpandableCommonComponentProps);
			}

			if (React.isValidElement<IExpandableCommonComponentProps>(child) && child.type === ExpandableItem) {
				return React.cloneElement(child, {
					active,
					children: recurseChildren(child.props.children, activeId, active),
					key: i
				} as IExpandableCommonComponentProps);
			}

			if (React.isValidElement<IExpandableCommonComponentProps>(child) && child.type === ExpandableItemContent) {
				return React.cloneElement(child, {
					active,
					children: recurseChildren(child.props.children, activeId, active),
					key: i
				} as IExpandableCommonComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return <StyledExpandable {...props} children={recurseChildren(props.children)} />;
});

Expandable.defaultProps = {
	className: '',
	style: {}
};

Expandable.displayName = 'Expandable';

/**
 * ExpandableItem
 */
export const ExpandableItem: React.FC<IExpandableItemComponentProps> = withMooskinContext((props) => {
	return <StyledExpandableItem {...props} />;
});

ExpandableItem.defaultProps = {
	className: '',
	style: {}
};

ExpandableItem.displayName = 'ExpandableItem';

/**
 * ExpandableItemContainer
 */
export const ExpandableItemContainer: React.FC<IExpandableItemComponentProps> = withMooskinContext((props) => {
	return <StyledExpandableItemContainer {...props} />;
});

ExpandableItemContainer.defaultProps = {
	className: '',
	style: {}
};

ExpandableItemContainer.displayName = 'ExpandableItemContainer';

/**
 * ExpandableItemText
 */
export const ExpandableItemText: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledExpandableItemText {...props} />;
});

ExpandableItemText.defaultProps = {
	className: '',
	style: {}
};

ExpandableItemText.displayName = 'ExpandableItemText';

/**
 * ExpandableItemButton
 */
export const ExpandableItemButton: React.FC<IExpandableCommonComponentProps> = withMooskinContext((props) => {
	return <StyledExpandableItemButton {...props} className={`notranslate ${props.className}`} />;
});

ExpandableItemButton.defaultProps = {
	className: '',
	style: {}
};

ExpandableItemButton.displayName = 'ExpandableItemButton';

const transitionOpacity = {
	entered: 1,
	entering: 0,
	exited: 0,
	exiting: 0,
	unmounted: 0
};

/**
 * ExpandableItemContent
 */
export const ExpandableItemContent: React.FC<IExpandableCommonComponentProps> = withMooskinContext((props) => {
	return (
		<Transition addEndListener={() => undefined} unmountOnExit mountOnEnter in={props.active} timeout={100}>
			{(state) => <StyledExpandableItemContent opacity={transitionOpacity[state]} {...props} />}
		</Transition>
	);
});

ExpandableItemContent.defaultProps = {
	className: '',
	style: {}
};

ExpandableItemContent.displayName = 'ExpandableItemContent';
