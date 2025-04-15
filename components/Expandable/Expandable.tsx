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
import variables from '../_utils/globals/variables';
/**
 * Expandable
 */
export const Expandable: React.FC<IExpandableComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
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

	return <StyledExpandable d="flex" direction="column" {...props} children={recurseChildren(props.children)} />;
});

Expandable.displayName = 'Expandable';

/**
 * ExpandableItem
 */
export const ExpandableItem: React.FC<IExpandableItemComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledExpandableItem
			borderRadius="2px"
			border="solid 1px #e2e2e2"
			bgColor={props.palette?.backgroundColors.white || variables.backgroundColors.white}
			{...props}
		/>
	);
});

ExpandableItem.displayName = 'ExpandableItem';

/**
 * ExpandableItemContainer
 */
export const ExpandableItemContainer: React.FC<IExpandableItemComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		return <StyledExpandableItemContainer d="flex" p="17px" cursor="pointer" {...props} />;
	}
);

ExpandableItemContainer.displayName = 'ExpandableItemContainer';

/**
 * ExpandableItemText
 */
export const ExpandableItemText: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledExpandableItemText
			flex={1}
			fontWeight={500}
			font-stretch="normal"
			fontStyle="normal"
			letter-spacing="normal"
			textAlign="left"
			color={props.palette?.fontColors.text || variables.fontColors.text}
			fontSize={[14, 14, 16, 16]}
			{...props}
		/>
	);
});

ExpandableItemText.displayName = 'ExpandableItemText';

/**
 * ExpandableItemButton
 */
export const ExpandableItemButton: React.FC<IExpandableCommonComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		return (
			<StyledExpandableItemButton
				fontFamily="Mooskin Icons"
				fontSize="20px"
				transition="all ease 0.4s"
				color={props.palette?.fontColors.text || variables.fontColors.text}
				transform={props.active ? 'rotate(180deg)' : 'rotate(0deg)'}
				{...props}
				className={`notranslate ${className}`}
			/>
		);
	}
);

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
export const ExpandableItemContent: React.FC<IExpandableCommonComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		return (
			<Transition addEndListener={() => undefined} unmountOnExit mountOnEnter in={props.active} timeout={100}>
				{(state) => <StyledExpandableItemContent opacity={transitionOpacity[state]} {...props} />}
			</Transition>
		);
	}
);

ExpandableItemContent.displayName = 'ExpandableItemContent';
