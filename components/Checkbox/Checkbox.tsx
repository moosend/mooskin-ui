import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import type { ILabelComponentProps } from '../Label/Model';
import { ICheckboxComponentProps, ICheckboxIconComponentProps } from './model';

// Components
import { Description } from '../Description/Description';

// Styled Components
import { StyledCheckbox, StyledCheckboxIcon, StyledCheckboxLabel } from './styles';
// "CSS" variables
import variables from '../_utils/globals/variables';

export const Checkbox: React.FC<ICheckboxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const [hasCheckbox, setHasCheckbox] = React.useState(false);

	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		props.onClickCheckbox && props.onClickCheckbox(e, { dataLabel: props.dataLabel, value: !props.checked });
	};

	const batchClickHandler = (e: React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		if (!props.disabled) {
			onClick(e);
			callback && callback(e);
		}
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<ILabelComponentProps>(child) && child.type === CheckboxLabel) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					disabled: props.disabled,
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.onClick)
				} as ILabelComponentProps);
			}

			if (React.isValidElement<ICheckboxIconComponentProps>(child) && child.type === CheckboxIcon) {
				!hasCheckbox && setHasCheckbox(true);
				return React.cloneElement(child, {
					children: props.checked ? 'check_box' : 'check_box_outline_blank',
					disabled: props.disabled,
					checked: props.checked,
					key: i,
					onClick: (e) => batchClickHandler(e, child.props.onClick)
				} as ICheckboxIconComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return (
		<StyledCheckbox d="flex" w="fit-content" align="center" {...props}>
			{!hasCheckbox && (
				<CheckboxIcon
					disabled={props.disabled}
					checked={props.checked}
					onClick={onClick}
					children={props.checked ? 'check_box' : 'check_box_outline_blank'}
				/>
			)}
			{recurseChildren(props.children)}
		</StyledCheckbox>
	);
});

Checkbox.displayName = 'Checkbox';

/**
 * CheckboxIcon
 */
export const CheckboxIcon: React.FC<ICheckboxIconComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledCheckboxIcon
			cursor={props.disabled ? 'not-allowed' : 'pointer'}
			fontFamily="Mooskin Icons"
			pr="10px"
			fontSize="23px"
			opacity={props.disabled ? 0.5 : 1}
			color={
				props.checked
					? props.palette?.fontColors.primary1 || variables.fontColors.primary1
					: props.palette?.fontColors.checkboxUnselected || variables.fontColors.checkboxUnselected
			}
			{...props}
		/>
	);
});

CheckboxIcon.displayName = 'CheckboxIcon';

/**
 * CheckboxLabel
 */
export const CheckboxLabel: React.FC<ILabelComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledCheckboxLabel
			fontStyle="normal"
			minW="unset"
			cursor={props.disabled ? 'not-allowed' : 'pointer'}
			opacity={props.disabled ? 0.5 : 1}
			color={props.palette?.fontColors.text || variables.fontColors.text}
			fontSize={[14, 14, 16, 16]}
			disabled={props.disabled}
			{...props}
		/>
	);
});

CheckboxLabel.displayName = 'CheckboxLabel';

/**
 * CheckboxDescription
 */
export const CheckboxDescription: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <Description {...props} />;
});

CheckboxDescription.displayName = 'CheckboxDescription';
