import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { Box } from '../Box/Box';
import { IBoxComponentProps } from '../Box/model';
import { IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Styled Components
import { StyledActionsDropdownArrow, StyledActionsDropdownFadeIn, StyledActionsDropdownFadeOut, StyledActionsDropdownItem, StyledActionsDropdownButtonClose } from './styles';

// Transitions
import { Transition } from 'react-transition-group';
const DropdownComponents = {
	entered: StyledActionsDropdownFadeIn,
	entering: StyledActionsDropdownFadeIn,
	exited: null,
	exiting: StyledActionsDropdownFadeOut,
	unmounted: null
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

	const onClickCloseButtonHandler = (e:React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		console.log("closeButtonClicked")
		e.stopPropagation();
		props.onClose && props.onClose(e)
		callback && callback(e);
	}

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IActionsDropdownItemComponentProps>(child) && child.type === ActionsDropdownItem) {
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i,
					onClick: (e) => batchClickHandler(e, { dataLabel: child.props.dataLabel, value: child.props.value }, child.props.onClick)
				} as IActionsDropdownItemComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ActionsDropdownArrow) {
				!hasArrow && setHasArrow(true);
				return React.cloneElement(child, {
					children: recurseChildren((child.props as any).children),
					key: i
				} as IBoxComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}
			if (React.isValidElement<IBoxComponentProps>(child) && child.type === ActionsDropdownButtonClose) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					onClick: (e) => onClickCloseButtonHandler(e, child.props.onClick)
				} as IBoxComponentProps);
			}

			return child;
		});
	};

	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.isOpen} timeout={145}>
			{(state) => {
				const ActionDropdownComponent = DropdownComponents[state];
				
				if (ActionDropdownComponent) {
					return (
						<>
							<ActionDropdownComponent 
								boxShadow="base"
								position={['relative', 'relative', 'fixed', 'fixed']}
								borderRadius={['2px', '2px', '8px', '8px']}
								bottom={['unset', 'unset', '73px', '73px']}
								left={['unset', 'unset', '10px', '10px']}
								right={['unset', 'unset', '10px', '10px']}
								{...props}
							>
								<Box position="absolute"  />
								{!hasArrow && <ActionsDropdownArrow boxShadow="base" />}
									{recurseChildren(props.children)}					
							</ActionDropdownComponent>
							<ActionsDropdownButtonClose 
								w = 'auto'
								h= '56px'
								position= {['relative', 'relative', 'fixed', 'fixed']}
								d= {['none', 'none', 'block', 'block']}
								borderRadius= {['2px', '2px', '14px', '14px']}
								bottom= {['unset', 'unset', '10px', '10px']}
								left= {['unset', 'unset', '10px', '10px']}
								right= {['unset', 'unset', '10px', '10px']}
								bgColor= '#fff'
								fontColor= '#000'
								fontWeight = {200}
								fontSize= '20px'
								p= '16px'
								onClick= {onClickCloseButtonHandler}
							>
								Close
							</ActionsDropdownButtonClose>
						</>
					);
				}
				return null;
			}}
		</Transition>
	);
});

ActionsDropdown.defaultProps = {
	className: '',
	style: {}
};

ActionsDropdown.displayName = 'ActionsDropdown';

/**
 * ActionsDropdownItem
 */
export const ActionsDropdownItem: React.FC<IActionsDropdownItemComponentProps> = withMooskinContext((props) => {
	return <StyledActionsDropdownItem 
				textAlign={['unset', 'unset', 'center', 'center']}
				p={['', '', '16px 16px 16px', '16px 16px 16px']}
				fontSize= {["12px", "12px", "20px", "20px"]}
				fontWeight={['bold', 'bold', 400, 400]}				
				{...props} 
			/>;
});

ActionsDropdownItem.defaultProps = {
	className: '',
	style: {}
};

ActionsDropdownItem.displayName = 'ActionsDropdownItem';

/**
 * ActionsDropdownArrow
 */
export const ActionsDropdownArrow: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledActionsDropdownArrow d={['block', 'block', 'none', 'none']} {...props} />;
});

ActionsDropdownArrow.defaultProps = {
	className: '',
	style: {}
};

ActionsDropdownArrow.displayName = 'ActionsDropdownArrow';

/**
 * ActionsDropdownButtonClose
 */
 export const ActionsDropdownButtonClose: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledActionsDropdownButtonClose d={['block', 'block', 'none', 'none']} {...props} />;
});

ActionsDropdownButtonClose.defaultProps = {
	className: '',
	style: {}
};

ActionsDropdownButtonClose.displayName = 'ActionsDropdownButtonClose';