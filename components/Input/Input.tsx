import * as React from 'react';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';
import {
	IInputComponentProps,
	IInputContainerComponentProps,
	IInputEmojiComponentProps,
	IInputListComponentProps,
	IInputOptionComponentProps,
} from './model';

// Components
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

// Styled Components
import {
	StyledInputContainer,
	StyledInputIcon,
	StyledInputOptionList,
	StyledInputOptionListTitle,
	StyledInputOverlay,
	StyledInputSolo,
	StyledInputWrapped,
} from './styles';

/**
 * InputContainer
 */
export const InputContainer: React.FC<IInputContainerComponentProps> = withMooskinContext((props) => {
	const batchChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
		data: IInputCallbackData,
		callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
	) => {
		props.onChangeInput && props.onChangeInput(e, data);
		callback && callback(e);
	};

	const onDropdownOptionClick = (value: string) => {
		const newValue = props.value ? props.value + value : value;
		props.onChangeInput && props.onChangeInput({} as any, { dataLabel: props.dataLabel, value: newValue });
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IInputComponentProps>(child) && child.type === Input) {
				return React.cloneElement(child, {
					dataLabel: props.dataLabel,
					disabled: props.disabled,
					key: i,
					onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
						batchChangeHandler(e, { dataLabel: props.dataLabel, value: e.target.value }, child.props.onChange),
					value: props.value,
					wrapped: true,
				} as IInputComponentProps);
			}

			if (React.isValidElement<IInputEmojiComponentProps>(child) && child.type === InputEmoji) {
				return React.cloneElement(child, {
					key: i,
					onChangeEmoji: onDropdownOptionClick,
				} as IInputEmojiComponentProps);
			}

			if (React.isValidElement<IInputListComponentProps>(child) && child.type === InputOptionList) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					icon: child.props.icon,
					key: i,
				} as IInputListComponentProps);
			}

			if (React.isValidElement<IInputOptionComponentProps>(child) && child.type === InputOption) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					onClick: (e) => onDropdownOptionClick(child.props.value),
					value: child.props.value,
				} as IInputOptionComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return <StyledInputContainer {...props}>{recurseChildren(props.children)}</StyledInputContainer>;
});

InputContainer.defaultProps = {
	className: '',
	style: {},
};

InputContainer.displayName = 'InputContainer';

/**
 * InputOptionList
 */
export const InputOptionList: React.FC<IInputListComponentProps> = withMooskinContext((props) => {
	const [showList, setShowList] = React.useState(false);
	return (
		<Box position="relative" color="inherit" zIndex={showList ? 3 : 0} {...props.wrapperProps}>
			<InputIcon children={props.icon} onClick={() => setShowList(!showList)} {...props.iconProps} />
			{showList && (
				<>
					<StyledInputOptionList w={300} {...props}>
						{props.children}
					</StyledInputOptionList>
					<InputOverlay onClick={() => setShowList(!showList)} />
				</>
			)}
		</Box>
	);
});

InputOptionList.defaultProps = {
	className: '',
	style: {},
};

InputOptionList.displayName = 'InputOptionList';

/**
 * InputOptionListTitle
 */
export const InputOptionListTitle: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledInputOptionListTitle {...props} />;
});

InputOptionListTitle.defaultProps = {
	className: '',
	style: {},
};

InputOptionListTitle.displayName = 'InputOptionListTitle';

/**
 * InputOption
 */
export const InputOption: React.FC<IInputOptionComponentProps> = withMooskinContext((props) => {
	return <Text my={8} mx={15} fontSize={14} fontColor="fontColors.primary1" {...props} />;
});

InputOption.defaultProps = {
	className: '',
	style: {},
};

InputOption.displayName = 'InputOption';

/**
 * Input
 */
export const Input: React.FC<IInputComponentProps> = withMooskinContext((props) => {
	const InputComponent = props.wrapped ? StyledInputWrapped : StyledInputSolo;
	return <InputComponent {...props} boxAs="input" />;
});

Input.defaultProps = {
	className: '',
	style: {},
};

Input.displayName = 'Input';

/**
 * InputIcon
 */
export const InputIcon: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledInputIcon ml={5} {...props} />;
});

InputIcon.defaultProps = {
	className: '',
	style: {},
};

InputIcon.displayName = 'InputIcon';

/**
 * InputOverlay
 */
export const InputOverlay: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledInputOverlay {...props} />;
});

InputOverlay.defaultProps = {
	className: '',
	style: {},
};

InputOverlay.displayName = 'InputOverlay';

/**
 * InputEmoji
 */
export const InputEmoji: React.FC<IInputEmojiComponentProps> = withMooskinContext((props) => {
	const [showEmoji, setShowEmoji] = React.useState(false);

	const onChangeEmoji = (data: any) => {
		props.onChangeEmoji && props.onChangeEmoji(data.native);
	};

	return (
		<Box position="relative" color="inherit" {...props}>
			<InputIcon onClick={() => setShowEmoji(!showEmoji)}>emoji_emotions</InputIcon>
			{showEmoji && (
				<Box position="absolute" right={0} zIndex={3}>
					<Picker onSelect={onChangeEmoji} exclude={['flags']} showPreview={false} showSkinTones={false} />
					<InputOverlay onClick={() => setShowEmoji(!showEmoji)} />
				</Box>
			)}
		</Box>
	);
});

InputEmoji.defaultProps = {
	className: '',
	style: {},
};

InputEmoji.displayName = 'InputEmoji';
