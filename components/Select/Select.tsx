import * as React from 'react';

import { Screens } from '../_utils/globals/screens';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { ISelectComponentProps, ISelectOptionComponentProps, ISelectOptionListProps, ISelectPaginationComponentProps } from './model';

// Components
import { Loader } from '../Loader/Loader';
import { Box } from '../Box/Box';

// Styled Components
import {
	StyledPaginationPage,
	StyledSelect,
	StyledSelectContainer,
	StyledSelectFilter,
	StyledSelectIcon,
	StyledSelectOption,
	StyledSelectOptionListFadeIn,
	StyledSelectOptionListFadeOut,
	StyledSelectOverlay,
	StyledSelectPagination,
	StyledSelectPlaceholder,
	StyledSelectListButtonClose,
	StyledSearchPlaceholderMobileView
} from './styles';

// Transitions
import { Transition } from 'react-transition-group';

const OptionListComponents = {
	entered: StyledSelectOptionListFadeIn,
	entering: StyledSelectOptionListFadeIn,
	exited: null,
	exiting: StyledSelectOptionListFadeOut,
	unmounted: null
};

/**
 * Select
 */
export const Select: React.FC<ISelectComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const [showList, setShowList] = React.useState(false);
	const [filterValue, setFilterValue] = React.useState('');

	// non mandatory elements
	const [hasOverlay, setHasOverlay] = React.useState(false);
	const [hasDropdownIcon, setHasDropdownIcon] = React.useState(false);
	const [hasFilter, setHasFilter] = React.useState(false);

	const batchClickHandler = (e: React.MouseEvent<HTMLElement>, value: string, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		let returnValue;
		const selectedAsArray = Array.isArray(props.selectedValue);
		const selected = props.selectedValue as any;

		if (selectedAsArray) {
			if (!value) {
				returnValue = [];
			} else if (selected.includes(value)) {
				returnValue = selected.filter((item: any) => item !== value);
			} else {
				returnValue = [...selected];
				returnValue.push(value);
			}
		} else {
			returnValue = value;
		}

		props.onChangeSelect && props.onChangeSelect(e, { dataLabel: props.dataLabel, value: returnValue });
		callback && callback(e);
		!selectedAsArray && toggleList();
	};

	const batchFilterHandler = (e: React.ChangeEvent<HTMLInputElement>, callback?: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
		setFilterValue(e.target.value);
		callback && callback(e);
	};

	const toggleList = () => {
		setShowList(!showList);
		setFilterValue('');
	};

	const getPlaceholder = (children: any, passedPlaceholder: string[] = []) => {
		if (!children) {
			return null;
		}

		const placeholder: string[] = passedPlaceholder;
		React.Children.forEach(children, (child) => {
			if (React.isValidElement<ISelectOptionComponentProps>(child) && child.type === SelectOption) {
				let label = '';

				if (child.props.searchLabel) {
					label = child.props.searchLabel;
				} else if (typeof child.props.children === 'string') {
					label = child.props.children;
				} else if (Array.isArray(child.props.children) && typeof child.props.children[0] === 'string') {
					label = child.props.children[0];
				}

				if (Array.isArray(props.selectedValue)) {
					props.selectedValue.forEach((item) => {
						if (item.toString() === child.props.value) {
							placeholder.push(label);
						}
					});
				} else {
					props.selectedValue === child.props.value && placeholder.push(label);
				}
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return getPlaceholder((child.props as any).children, placeholder);
			}
		});

		return placeholder.join(', ');
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<ISelectOptionComponentProps>(child) && child.type === SelectOption) {
				const active = Array.isArray(props.selectedValue) && props.selectedValue.includes(child.props.value);

				let label = '';

				if (child.props.searchLabel) {
					label = child.props.searchLabel;
				} else if (typeof child.props.children === 'string') {
					label = child.props.children;
				}

				const option = React.cloneElement(child, {
					children: (
						<>
							{recurseChildren(child.props.children)}
							{active && (
								<SelectIcon
									children="check"
									p="0"
									mr={[0, 0, '-32px', '-32px']}
									pl={['0px', '0px', '15px', '15px']}
									fontSize={[15, 15, 20, 20]}
								/>
							)}
						</>
					),
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.value, child.props.onClick),
					value: child.props.value
				} as ISelectOptionComponentProps);

				if (filterValue && label) {
					return label.toLowerCase().includes(filterValue.toLowerCase()) ? option : null;
				}

				return option;
			}

			if (React.isValidElement<IInputBoxComponentProps>(child) && child.type === SelectFilter) {
				!hasFilter && setHasFilter(true);
				if (showList) {
					return React.cloneElement(child, {
						key: i,
						onChange: (e: React.ChangeEvent<HTMLInputElement>) => batchFilterHandler(e, child.props.onChange),
						onClick: (e: React.MouseEvent<HTMLInputElement>) => {
							e.stopPropagation();
							child.props.onClick && child.props.onClick(e);
						}
					} as IInputBoxComponentProps);
				}
				return null;
			}

			if (React.isValidElement<ISelectOptionListProps>(child) && child.type === SelectOptionList) {
				const shouldShowList = child.props.showList || showList;
				const list = React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					showList: shouldShowList
				} as IBoxComponentProps);

				return (
					<>
						{shouldShowList && (
							<Box noRender={['lg', 'md']} position={'fixed'} bottom={10} left={10} right={10} zIndex={12}>
								{!props.hideMobileSearch && (
									<SearchPlaceholderMobileView
										boxShadow="base"
										borderRadius={['0px', '0px', '8px', '8px']}
										bgColor={['transparent', 'transparent', '#fff', '#fff']}
										onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => (setFilterValue(e.target.value), console.log(filterValue))}
									>
										<SelectFilter
											onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
										/>
										<SelectIcon>{'search'}</SelectIcon>
									</SearchPlaceholderMobileView>
								)}
								{list}
								<StyledSelectListButtonClose borderRadius={['2px', '2px', '8px', '8px']} onClick={toggleList}>
									Close
								</StyledSelectListButtonClose>
							</Box>
						)}
						<Box noRender={['sm', 'xs']}>{list}</Box>
					</>
				);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectPlaceholder) {
				if (!showList) {
					const placeholder = getPlaceholder(props.children);
					return React.cloneElement(child, {
						children: props.selectedValue && placeholder ? placeholder : recurseChildren(child.props.children),
						key: i
					} as IBoxComponentProps);
				}
				return null;
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectContainer) {
				return React.cloneElement(child, {
					children: (
						<>
							{recurseChildren(child.props.children)}
							{!hasFilter && showList && (
								<>
									<SelectFilter
										onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
									/>
								</>
							)}
							{!hasDropdownIcon && <SelectIcon>{!showList ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</SelectIcon>}
						</>
					),
					key: i,
					onClick: !props.disabled ? toggleList : undefined
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectIcon) {
				!hasDropdownIcon && setHasDropdownIcon(true);
				return React.cloneElement(child, {
					children: !showList ? 'keyboard_arrow_down' : 'keyboard_arrow_up',
					key: i,
					onClick: toggleList
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectOverlay) {
				!hasOverlay && setHasOverlay(true);
				if (showList) {
					return React.cloneElement(child, {
						key: i,
						onClick: toggleList
					} as IBoxComponentProps);
				}
				return null;
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return (
		<StyledSelect {...props}>
			{recurseChildren(props.children)}
			{!hasOverlay && showList && <SelectOverlay onClick={toggleList} />}
		</StyledSelect>
	);
});

Select.displayName = 'Select';

/**
 * SelectContainer
 */
export const SelectContainer: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledSelectContainer {...props} />;
});

SelectContainer.displayName = 'SelectContainer';

/**
 * SelectPlaceholder
 */
export const SelectPlaceholder: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledSelectPlaceholder {...props} />;
});

SelectPlaceholder.displayName = 'SelectPlaceholder';

/**
 * SelectOptionList
 */
export const SelectOptionList: React.FC<ISelectOptionListProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<Transition addEndListener={() => undefined} unmountOnExit in={props.showList} timeout={145}>
			{(state) => {
				const OptionListComponent = OptionListComponents[state];
				if (OptionListComponent) {
					return (
						<OptionListComponent
							boxShadow="base"
							position={['absolute', 'absolute', 'unset', 'unset']}
							top={40}
							left={0}
							right={0}
							borderRadius={['0px', '0px', '8px', '8px']}
							textAlign={['left', 'left', 'center', 'center']}
							fontSize={['14px', '14px', '20px', '20px']}
							justify={['space-between', 'space-between', 'center', 'center']}
							maxH={['160px', '160px', '415px', '415px']}
							pb={['10px', '10px', '0px', '0px']}
							my={['0px', '0px', '10px', '10px']}
							round="xs"
							{...props}
						/>
					);
				}
				return null;
			}}
		</Transition>
	);
});

SelectOptionList.displayName = 'SelectOptionList';

/**
 * SelectOption
 */
export const SelectOption: React.FC<ISelectOptionComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledSelectOption
			d="flex"
			textAlign={['unset', 'unset', 'center', 'center']}
			fontSize={['14px', '14px', '20px', '20px']}
			justify={['space-between', 'space-between', 'center', 'center']}
			fontWeight={[500, 500, 400, 400]}
			p={['10px 15px 0px', '10px 15px 0px', '16px', '16px']}
			{...props}
		/>
	);
});

SelectOption.displayName = 'SelectOption';

/**
 * SelectFilter
 */
export const SelectFilter: React.FC<IInputBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const width = window.innerWidth;
	const autofocus = width > Screens.sm.max;
	return <StyledSelectFilter autoFocus={autofocus} {...props} boxAs="input" />;
});

SelectFilter.displayName = 'SelectFilter';

/**
 * SelectLoader
 */
export const SelectLoader: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <Loader size={20} spinnerWidth={2} {...props} />;
});

SelectLoader.displayName = 'SelectLoader';

/**
 * SelectIcon
 */
export const SelectIcon: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledSelectIcon {...props} className={`notranslate ${className}`} />;
});

SelectIcon.displayName = 'SelectIcon';

/**
 * SelectOverlay
 */
export const SelectOverlay: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledSelectOverlay
			bgColor={['transparent', 'transparent', 'rgba(0, 0, 0, 0.48)', 'rgba(0, 0, 0, 0.48)']}
			zIndex={[1, 1, 5, 5]}
			{...props}
		/>
	);
});

SelectOverlay.displayName = 'SelectOverlay';

/**
 * SelectPagination
 */
export const SelectPagination: React.FC<ISelectPaginationComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		const onClick = (e: React.MouseEvent<HTMLElement>, direction: 'left' | 'right') => {
			let page;

			switch (direction) {
				case 'left':
					page = props.page - 1 < 1 ? undefined : props.page - 1;
					break;

				case 'right':
					page = props.page + 1;
					break;

				default:
					break;
			}

			page && props.onClickPagination && props.onClickPagination(e, page);
		};
		return (
			<StyledSelectPagination {...props}>
				<SelectIcon onClick={(e) => onClick(e, 'left')}>keyboard_arrow_left</SelectIcon>
				<StyledPaginationPage>{props.page}</StyledPaginationPage>
				<SelectIcon onClick={(e) => onClick(e, 'right')}>keyboard_arrow_right</SelectIcon>
			</StyledSelectPagination>
		);
	}
);

SelectPagination.displayName = 'SelectPagination';

export const SearchPlaceholderMobileView: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledSearchPlaceholderMobileView {...props} />;
});

SelectOverlay.displayName = 'SelectOverlay';
