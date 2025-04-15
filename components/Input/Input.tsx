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
	IInputOptionComponentProps
} from './model';

// Components
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

// Styled Components
import {
	StyledInputContainer,
	StyledInputIcon,
	StyledInputListButtonClose,
	StyledInputOptionList,
	StyledInputOptionListTitle,
	StyledInputOverlay,
	StyledInputSolo,
	StyledInputWrapped
} from './styles';

import { Screens } from '../_utils/globals/screens';
import variables from '../_utils/globals/variables';
/**
 * InputContainer
 */
export const InputContainer: React.FC<IInputContainerComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const [showList, setShowList] = React.useState('');

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
					wrapped: true
				} as IInputComponentProps);
			}

			if (React.isValidElement<IInputEmojiComponentProps>(child) && child.type === InputEmoji) {
				return React.cloneElement(child, {
					key: i,
					onChangeEmoji: onDropdownOptionClick
				} as IInputEmojiComponentProps);
			}

			if (React.isValidElement<IInputListComponentProps>(child) && child.type === InputOptionList) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					icon: child.props.icon,
					key: i,
					showList: showList === child.props.icon,
					setShowList
				} as IInputListComponentProps);
			}

			if (React.isValidElement<IInputOptionComponentProps>(child) && child.type === InputOption) {
				return React.cloneElement(child, {
					children: recurseChildren(child.props.children),
					key: i,
					onClick: (e) => {
						if (window.innerWidth <= Screens.sm.max) {
							setShowList('');
						}
						onDropdownOptionClick(child.props.value);
					},
					value: child.props.value
				} as IInputOptionComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return (
		<StyledInputContainer
			position="relative"
			fontColor={props.palette?.fontColors.text || variables.fontColors.text}
			d="flex"
			flex={1}
			align="center"
			opacity={props.disabled ? 0.5 : 1}
			cursor={props.disabled ? 'not-allowed' : ''}
			borderRadius="2px"
			bgColor={props.palette?.backgroundColors.white || variables.backgroundColors.white}
			p="7px 15px 7px"
			border={`solid 1px ${props.palette?.borderColors.gray1 || variables.borderColors.gray1}`}
			{...props}
		>
			{recurseChildren(props.children)}
		</StyledInputContainer>
	);
});

InputContainer.displayName = 'InputContainer';

/**
 * InputOptionList
 */
export const InputOptionList: React.FC<IInputListComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const toggleDropdown = () => props.setShowList && props.setShowList(props.showList ? '' : props.icon);

	return (
		<Box position="relative" color="inherit" zIndex={props.showList ? 3 : 0} {...props.wrapperProps}>
			<InputIcon children={props.icon} onClick={toggleDropdown} {...props.iconProps} />
			{props.showList && (
				<>
					<StyledInputOptionList
						h="auto"
						bgColor={props.palette?.backgroundColors.white || variables.backgroundColors.white}
						zIndex={4}
						//boxShadow="0 1px 5px rgba(0, 0, 0, 0.32)"
						overflow="auto"
						boxShadow="base"
						position={['absolute', 'absolute', 'fixed', 'fixed']}
						borderRadius={['2px', '2px', '8px', '8px']}
						bottom={['unset', 'unset', '73px', '73px']}
						left={['unset', 'unset', '10px', '10px']}
						right={['0px', '0px', '10px', '10px']}
						maxH={['265px', '265px', '415px', '415px']}
						w={[300, 300, 'unset', 'unset']}
						{...props}
					>
						{props.children}
					</StyledInputOptionList>
					<InputOverlay onClick={toggleDropdown} />
					<StyledInputListButtonClose
						w="auto"
						h="56px"
						bgColor={props.palette?.backgroundColors.dropdown || variables.backgroundColors.dropdown}
						fontColor={props.palette?.fontColors.dropdown || variables.fontColors.dropdown}
						fontWeight={400}
						fontSize="20px"
						p="16px"
						textAlign="center"
						cursor="pointer"
						zIndex={11}
						position="fixed"
						borderRadius="14px"
						bottom="10px"
						left="10px"
						right="10px"
						onClick={toggleDropdown}
						noRender={['lg', 'md']}
					>
						Close
					</StyledInputListButtonClose>
				</>
			)}
		</Box>
	);
});

InputOptionList.displayName = 'InputOptionList';

/**
 * InputOptionListTitle
 */
export const InputOptionListTitle: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledInputOptionListTitle
			m="15px"
			fontSize="14px"
			fontColor={props.palette?.fontColors.text || variables.fontColors.text}
			noRender={['sm', 'xs']}
			{...props}
		/>
	);
});

InputOptionListTitle.displayName = 'InputOptionListTitle';

/**
 * InputOption
 */
export const InputOption: React.FC<IInputOptionComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<Text
			py={[8, 8, 16, 16]}
			px={[15, 15, 16, 16]}
			fontSize={[14, 14, 20, 20]}
			fontWeight={['unset', 'unset', 400, 400]}
			justify={['unset', 'unset', 'center', 'center']}
			fontColor="fontColors.primary1"
			{...props}
		/>
	);
});

InputOption.displayName = 'InputOption';

/**
 * Input
 */
export const Input: React.FC<IInputComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const InputComponent = props.wrapped ? StyledInputWrapped : StyledInputSolo;
	return <InputComponent {...props} boxAs="input" />;
});

Input.displayName = 'Input';

/**
 * InputIcon
 */
export const InputIcon: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledInputIcon
			fontFamily="Mooskin Icons"
			fontSize="20px"
			d="flex"
			align="center"
			fontColor={props.palette?.fontColors.text || variables.fontColors.text}
			ml={5}
			{...props}
		/>
	);
});

InputIcon.displayName = 'InputIcon';

/**
 * InputOverlay
 */
export const InputOverlay: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledInputOverlay
			position="fixed"
			top={0}
			left={0}
			right={0}
			bottom={0}
			zIndex={-1}
			bgColor={['transparent', 'transparent', 'rgba(0, 0, 0, 0.48)', 'rgba(0, 0, 0, 0.48)']}
			{...props}
			className={`notranslate ${className}`}
		/>
	);
});

InputOverlay.displayName = 'InputOverlay';

/**
 * InputEmoji
 */
export const InputEmoji: React.FC<IInputEmojiComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
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

InputEmoji.displayName = 'InputEmoji';
