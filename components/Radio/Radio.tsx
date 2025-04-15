import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import type { ILabelComponentProps } from '../Label/Model';
import { IRadioComponentProps, IRadioIconComponentProps } from './model';

// Components
import { Description } from '../Description/Description';

// Styled Components
import { StyledRadio, StyledRadioIcon, StyledRadioLabel } from './styles';

export const Radio: React.FC<IRadioComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const [hasRadio, setHasRadio] = React.useState(false);

	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		props.onClickRadio && props.onClickRadio(e, { dataLabel: props.dataLabel, value: props.value });
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
			if (React.isValidElement<ILabelComponentProps>(child) && child.type === RadioLabel) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					disabled: props.disabled,
					key: i,
					onClick: (e: React.MouseEvent<HTMLElement>) => batchClickHandler(e, child.props.onClick)
				} as ILabelComponentProps);
			}

			if (React.isValidElement<IRadioIconComponentProps>(child) && child.type === RadioIcon) {
				!hasRadio && setHasRadio(true);
				return React.cloneElement(child, {
					children: props.selected ? 'radio_button_checked' : 'radio_button_unchecked',
					disabled: props.disabled,
					selected: props.selected,
					key: i,
					onClick: (e: React.MouseEvent<HTMLElement>) => batchClickHandler(e, child.props.onClick)
				} as IRadioIconComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	// children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
	return (
		<StyledRadio {...props}>
			{!hasRadio && (
				<RadioIcon
					disabled={props.disabled}
					selected={props.selected}
					onClick={onClick}
					children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
				/>
			)}
			{recurseChildren(props.children)}
		</StyledRadio>
	);
});

Radio.displayName = 'Radio';

/**
 * RadioIcon
 */
export const RadioIcon: React.FC<IRadioIconComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledRadioIcon {...props} />;
});

RadioIcon.displayName = 'RadioIcon';

/**
 * RadioLabel
 */
export const RadioLabel: React.FC<ILabelComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledRadioLabel fontSize={[14, 14, 16, 16]} disabled={props.disabled} {...props} />;
});

RadioLabel.displayName = 'RadioLabel';

/**
 * RadioDescription
 */
export const RadioDescription: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <Description {...props} />;
});

RadioDescription.displayName = 'RadioDescription';
