import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBaseAlertComponentProps } from './model';

// Styled Components
import {
	StyledAlert,
	StyledAlertButton,
	StyledAlertCloseButton,
	StyledAlertDescription,
	StyledAlertIcon,
	StyledAlertTitle
} from './styles';

import variables from '../_utils/globals/variables';

const AlertIcons = {
	error: 'error',
	info: 'announcement',
	success: 'check_circle',
	warning: 'warning'
};

/**
 * Alert
 */
const SolidBackgroundColors = {
	error: (props: IBaseAlertComponentProps) => props.palette?.backgroundColors.red600 || variables.backgroundColors.red600,
	info: (props: IBaseAlertComponentProps) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1,
	success: (props: IBaseAlertComponentProps) => props.palette?.backgroundColors.green600 || variables.backgroundColors.green600,
	warning: (props: IBaseAlertComponentProps) => 'rgb(221, 107, 32)'
};

const SubtleBackgroundColors = {
	error: (props: IBaseAlertComponentProps) => variables.backgroundColors.error,
	info: (props: IBaseAlertComponentProps) => variables.backgroundColors.info,
	success: (props: IBaseAlertComponentProps) => variables.backgroundColors.success,
	warning: (props: IBaseAlertComponentProps) => variables.backgroundColors.warning
};

const FontColors = {
	error: (props: IBaseAlertComponentProps) => variables.backgroundColors.errorIcon,
	info: (props: IBaseAlertComponentProps) => variables.backgroundColors.infoIcon,
	success: (props: IBaseAlertComponentProps) => variables.backgroundColors.successIcon,
	warning: (props: IBaseAlertComponentProps) => variables.backgroundColors.warningIcon
};
export const Alert: React.FC<IBaseAlertComponentProps> = withMooskinContext(
	({ className = '', status = 'info', style = {}, variant = 'subtle', ...props }) => {
		const resolveColor = (color: string | ((props: IBaseAlertComponentProps) => string)) =>
			typeof color === 'function' ? color(props) : color;
		const recurseChildren = (children: any): any => {
			if (!children) {
				return null;
			}

			return React.Children.map(children, (child, i) => {
				if (
					React.isValidElement<IBaseAlertComponentProps>(child) &&
					(child.type === AlertIcon ||
						child.type === AlertTitle ||
						child.type === AlertDescription ||
						child.type === AlertCloseButton ||
						child.type === AlertButton)
				) {
					return React.cloneElement(child, {
						children: recurseChildren(child.props.children),
						key: i,
						status: child.props.status ? child.props.status : status,
						variant: child.props.variant ? child.props.variant : variant
					} as IBaseAlertComponentProps);
				}

				if (React.isValidElement(child) && (child.props as any).children) {
					return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
				}

				return child;
			});
		};

		return (
			<StyledAlert
				w="100%"
				d="flex"
				align="center"
				position="relative"
				overflow="hidden"
				pt={variant === 'top-accent' ? '0.5rem' : '0.75rem'}
				pr="1rem"
				pb="0.75rem"
				pl={variant === 'left-accent' ? '0.75rem' : '1rem'}
				borderLeft={variant === 'left-accent' ? '4px solid' : ''}
				borderTop={variant === 'top-accent' ? '4px solid' : ''}
				borderColor={status && SolidBackgroundColors[status](props)}
				borderRadius={variant === 'subtle' ? '4px' : '2px'}
				bgColor={
					variant === 'solid'
						? status && resolveColor(SolidBackgroundColors[status])
						: variant === 'subtle'
						? status && resolveColor(SubtleBackgroundColors[status])
						: (status && props.palette?.backgroundColors.white) || variables.backgroundColors.white
				}
				{...props}
				className={className}
				status={status}
				style={style}
				variant={variant}
				boxShadow="lg"
				children={recurseChildren(props.children)}
			/>
		);
	}
);

Alert.displayName = 'Alert';

/**
 * AlertIcon
 */
export const AlertIcon: React.FC<IBaseAlertComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledAlertIcon
			fontFamily="Mooskin Icons"
			mr="0.75rem"
			w="1.5rem"
			h="1.5rem"
			fontSize="1.5rem"
			d="inherit"
			{...props}
			className={className}
			style={{ flexShrink: 0, ...style }}
			children={props.status && AlertIcons[props.status as keyof typeof AlertIcons]}
		/>
	);
});

AlertIcon.displayName = 'AlertIcon';

/**
 * AlertTitle
 */
export const AlertTitle: React.FC<IBaseAlertComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledAlertTitle fontWeight={600} mr="0.5rem" className={className} style={style} {...props} />;
});

AlertTitle.displayName = 'AlertTitle';

/**
 * AlertDescription
 */
export const AlertDescription: React.FC<IBaseAlertComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledAlertDescription d="inline" className={className} style={style} {...props} />;
});

AlertDescription.displayName = 'AlertDescription';

/**
 * AlertCloseButton
 */
export const AlertCloseButton: React.FC<IBaseAlertComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledAlertCloseButton
			fontFamily="Mooskin Icons"
			outline={0}
			d="flex"
			align=" center"
			justify="center"
			transition="all 0.2s"
			w="32px"
			h="32px"
			fontSize="20px"
			cursor="pointer"
			borderRadius="2px"
			color={
				props.variant === 'solid'
					? variables.fontColors.white
					: props.variant === 'subtle'
					? variables.fontColors.black
					: props.status && FontColors[props.status](props)
			}
			{...props}
			className={className}
			style={style}
			children="close"
		/>
	);
});

AlertCloseButton.displayName = 'AlertCloseButton';

/**
 * AlertButton
 */
export const AlertButton: React.FC<IBaseAlertComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledAlertButton
			bgColor={(props.status && props.palette?.backgroundColors.white) || variables.backgroundColors.white}
			color={props.status && SolidBackgroundColors[props.status](props)}
			{...props}
		/>
	);
});

AlertButton.displayName = 'AlertButton';
