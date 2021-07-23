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

/**
 * ActionsDropdown
 */
export const ActionsDropdown: React.FC<IActionsDropdownComponentProps> = withMooskinContext((props) => {
	const [hasArrow, setHasArrow] = React.useState(false);
	const [show, setShow] = React.useState(props.isOpen);

	React.useEffect(() => {
		if (props.isOpen) {
			setShow(true);
		} else {
			setTimeout(() => {
				setShow(false);
			}, 140);
		}
	}, [props.isOpen]);

	if (!show) {
		return null;
	}

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

	const ActionDropdownComponent = props.isOpen ? StyledActionsDropdownFadeIn : StyledActionsDropdownFadeOut;

	return (
		<ActionDropdownComponent boxShadow="lg" {...props}>
			<Box position="absolute" h={30} top={-30} left={0} right={0} />
			{!hasArrow && <ActionsDropdownArrow />}
			{recurseChildren(props.children)}
		</ActionDropdownComponent>
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
