import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IButtonComponentProps } from './model';

// Styled Components
import { StyledButton, StyledButtonIcon, StyledButtonThree, StyledButtonTwo } from './styles';
import variables from '../_utils/globals/variables';
/**
 * Button
 */

const normalButtonSizes = {
	lg: '15px',
	md: '9px 15px',
	sm: '8px 15px'
};

const secondaryButtonSizes = {
	lg: '14px',
	md: '8px 14px',
	sm: '7px 13px'
};
export const Button: React.FC<IButtonComponentProps> = withMooskinContext(
	({ buttonSize = 'md', className = '', style = {}, type = 'button', ...props }) => {
		const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			!props.disabled && props.onClick && props.onClick(e);
		};
		return (
			<StyledButton
				w="fit-content"
				borderRadius={props.palette?.styles?.buttonBorderRadius || variables.styles?.buttonBorderRadius}
				cursor={props.disabled ? 'not-allowed' : 'pointer'}
				outline={0}
				fontWeight={600}
				font-stretch="normal"
				fontStyle="normal"
				letter-spacing="normal"
				d="flex"
				align="center"
				justify="center"
				bgColor={
					props.disabled
						? props.palette?.backgroundColors.gray100 || variables.backgroundColors.gray100
						: props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1
				}
				fontColor={
					props.disabled
						? props.palette?.fontColors.grayAlpha400 || variables.fontColors.grayAlpha400
						: props.palette?.fontColors.white || variables.fontColors.white
				}
				p={normalButtonSizes[buttonSize || 'md']}
				border="none"
				className={className}
				style={style}
				type={type}
				fontSize={[12, 12, 14, 14]}
				{...props}
				onClick={onClick}
				boxAs={props.href ? 'a' : 'button'}
			/>
		);
	}
);

Button.displayName = 'Button';

/**
 * ButtonTwo
 */
export const ButtonTwo: React.FC<IButtonComponentProps> = withMooskinContext(
	({ buttonSize = 'md', className = '', style = {}, type = 'button', ...props }) => {
		const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			!props.disabled && props.onClick && props.onClick(e);
		};
		return (
			<StyledButtonTwo
				w="fit-content"
				borderRadius={props.palette?.styles?.buttonBorderRadius || variables.styles?.buttonBorderRadius}
				cursor={props.disabled ? 'not-allowed' : 'pointer'}
				outline={0}
				fontWeight={600}
				font-stretch="normal"
				fontStyle="normal"
				letter-spacing="normal"
				d="flex"
				align="center"
				justify="center"
				fontColor={
					props.disabled
						? props.palette?.fontColors.grayAlpha400 || variables.fontColors.grayAlpha400
						: props.palette?.fontColors.primary1 || variables.fontColors.primary1
				}
				p={secondaryButtonSizes[buttonSize || 'md']}
				bgColor="transparent"
				border={`1px solid	${
					props.disabled
						? props.palette?.borderColors.grayAlpha100 || variables.borderColors.grayAlpha100
						: props.palette?.borderColors.primary1 || variables.borderColors.primary1
				}`}
				className={className}
				style={style}
				type={type}
				fontSize={[12, 12, 14, 14]}
				{...props}
				onClick={onClick}
				boxAs={props.href ? 'a' : 'button'}
			/>
		);
	}
);

ButtonTwo.displayName = 'ButtonTwo';

/**
 * ButtonThree
 */
export const ButtonThree: React.FC<IButtonComponentProps> = withMooskinContext(
	({ buttonSize = 'md', className = '', style = {}, type = 'button', ...props }) => {
		const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			!props.disabled && props.onClick && props.onClick(e);
		};
		return (
			<StyledButtonThree
				w="fit-content"
				borderRadius={props.palette?.styles?.buttonBorderRadius || variables.styles?.buttonBorderRadius}
				cursor={props.disabled ? 'not-allowed' : 'pointer'}
				outline={0}
				fontWeight={600}
				font-stretch="normal"
				fontStyle="normal"
				letter-spacing="normal"
				d="flex"
				align="center"
				justify="center"
				fontColor={
					props.disabled
						? props.palette?.fontColors.grayAlpha400 || variables.fontColors.grayAlpha400
						: props.palette?.fontColors.primary1 || variables.fontColors.primary1
				}
				p={secondaryButtonSizes[buttonSize || 'md']}
				bgColor="transparent"
				border="none"
				className={className}
				style={style}
				type={type}
				fontSize={[12, 12, 14, 14]}
				{...props}
				onClick={onClick}
				boxAs={props.href ? 'a' : 'button'}
			/>
		);
	}
);

ButtonThree.displayName = 'ButtonThree';

/**
 * ButtonIcon
 */
export const ButtonIcon: React.FC<IBoxComponentProps> = ({ className = '', style = {}, ...props }) => {
	return (
		<StyledButtonIcon
			w="fit-content"
			borderRadius={props.palette?.styles?.buttonBorderRadius || variables.styles?.buttonBorderRadius}
			cursor="pointer"
			outline={0}
			fontWeight={600}
			font-stretch="normal"
			fontStyle="normal"
			letter-spacing="normal"
			d="flex"
			align="center"
			justify="center"
			fontFamily="Mooskin Icons Round"
			fontSize="13px"
			fontColor="inherit"
			{...props}
			className={`notranslate ${className}`}
		/>
	);
};

ButtonIcon.displayName = 'ButtonIcon';
