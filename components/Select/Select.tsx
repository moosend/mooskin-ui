import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { ISelectComponentProps, ISelectOptionComponentProps, ISelectOptionListProps, ISelectPaginationComponentProps } from './model';

// Components
import { Loader } from '../Loader/Loader';

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
} from './styles';

/**
 * Select
 */
export const Select: React.FC<ISelectComponentProps> = withMooskinContext((props) => {
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
							{active && <SelectIcon children="check" p="0" fontSize={15} />}
						</>
					),
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.value, child.props.onClick),
					value: child.props.value,
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
						},
					} as IInputBoxComponentProps);
				}
				return null;
			}

			if (React.isValidElement<ISelectOptionListProps>(child) && child.type === SelectOptionList) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					showList: child.props.showList || showList,
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectPlaceholder) {
				if (!showList) {
					const placeholder = getPlaceholder(props.children);
					return React.cloneElement(child, {
						children: props.selectedValue && placeholder ? placeholder : recurseChildren(child.props.children),
						key: i,
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
								<SelectFilter
									onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
								/>
							)}
							{!hasDropdownIcon && <SelectIcon>{!showList ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</SelectIcon>}
						</>
					),
					key: i,
					onClick: !props.disabled ? toggleList : undefined,
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectIcon) {
				!hasDropdownIcon && setHasDropdownIcon(true);
				return React.cloneElement(child, {
					children: !showList ? 'keyboard_arrow_down' : 'keyboard_arrow_up',
					key: i,
					onClick: toggleList,
				} as IBoxComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectOverlay) {
				!hasOverlay && setHasOverlay(true);
				if (showList) {
					return React.cloneElement(child, {
						key: i,
						onClick: toggleList,
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

Select.defaultProps = {
	className: '',
	style: {},
};

Select.displayName = 'Select';

/**
 * SelectContainer
 */
export const SelectContainer: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledSelectContainer {...props} />;
});

SelectContainer.defaultProps = {
	className: '',
	style: {},
};

SelectContainer.displayName = 'SelectContainer';

/**
 * SelectPlaceholder
 */
export const SelectPlaceholder: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledSelectPlaceholder {...props} />;
});

SelectPlaceholder.defaultProps = {
	className: '',
	style: {},
};

SelectPlaceholder.displayName = 'SelectPlaceholder';

/**
 * SelectOptionList
 */
export const SelectOptionList: React.FC<ISelectOptionListProps> = withMooskinContext((props) => {
	const [showList, setShowList] = React.useState(props.showList);

	React.useEffect(() => {
		if (props.showList) {
			setShowList(true);
		} else {
			setTimeout(() => {
				setShowList(false);
			}, 140);
		}
	}, [props.showList]);

	if (!showList) {
		return null;
	}

	const SelectOptionListComponent = props.showList ? StyledSelectOptionListFadeIn : StyledSelectOptionListFadeOut;

	return <SelectOptionListComponent boxShadow="base" round="xs" {...props} />;
});

SelectOptionList.defaultProps = {
	className: '',
	style: {},
};

SelectOptionList.displayName = 'SelectOptionList';

/**
 * SelectOption
 */
export const SelectOption: React.FC<ISelectOptionComponentProps> = withMooskinContext((props) => {
	return <StyledSelectOption {...props} />;
});

SelectOption.defaultProps = {
	className: '',
	style: {},
};

SelectOption.displayName = 'SelectOption';

/**
 * SelectFilter
 */
export const SelectFilter: React.FC<IInputBoxComponentProps> = withMooskinContext((props) => {
	return <StyledSelectFilter autoFocus {...props} boxAs="input" />;
});

SelectFilter.defaultProps = {
	className: '',
	style: {},
};

SelectFilter.displayName = 'SelectFilter';

/**
 * SelectLoader
 */
export const SelectLoader: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <Loader size={20} spinnerWidth={2} {...props} />;
});

SelectLoader.defaultProps = {
	className: '',
	style: {},
};

SelectLoader.displayName = 'SelectLoader';

/**
 * SelectIcon
 */
export const SelectIcon: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledSelectIcon {...props} />;
});

SelectIcon.defaultProps = {
	className: '',
	style: {},
};

SelectIcon.displayName = 'SelectIcon';

/**
 * SelectOverlay
 */
export const SelectOverlay: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledSelectOverlay {...props} />;
});

SelectOverlay.defaultProps = {
	className: '',
	style: {},
};

SelectOverlay.displayName = 'SelectOverlay';

/**
 * SelectPagination
 */
export const SelectPagination: React.FC<ISelectPaginationComponentProps> = withMooskinContext((props) => {
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
});

SelectPagination.defaultProps = {
	className: '',
	style: {},
};

SelectPagination.displayName = 'SelectPagination';
