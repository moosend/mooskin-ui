import styled from 'styled-components';

// Models
import { IBaseAlertComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

const BackgroundColors = {
	error: '#FED7D7',
	info: '#bee3f8',
	success: '#C6F6D5',
	warning: '#FEEBC8',
};

const SolidBackgroundColors = {
	error: 'rgb(229, 62, 62)',
	info: 'rgb(49, 130, 206)',
	success: '#38A169',
	warning: 'rgb(221, 107, 32)',
};

const FontColors = {
	error: '#E53E3E',
	info: '#3182ce',
	success: '#38A169',
	warning: '#DD6B20',
};

export const StyledAlert = styled(Box)<IBaseAlertComponentProps>`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	padding-top: ${(props) => (props.variant === 'top-accent' ? '0.5rem' : '0.75rem')};
	padding-right: 1rem;
	padding-bottom: 0.75rem;
	padding-left: ${(props) => (props.variant === 'left-accent' ? '0.75rem' : '1rem')};
	border-left: ${(props) => (props.variant === 'left-accent' ? '4px solid' : '')};
	border-top: ${(props) => (props.variant === 'top-accent' ? '4px solid' : '')};
	border-color: ${(props) => props.status && SolidBackgroundColors[props.status]};
	border-radius: 3px;
	background-color: ${(props) => {
		return props.variant === 'solid' ? props.status && SolidBackgroundColors[props.status] : props.status && BackgroundColors[props.status];
	}};
`;

StyledAlert.displayName = 'StyledAlert';

const StyledAlertCommonText = styled(Box)<IBaseAlertComponentProps>`
	color: ${(props) => (props.variant === 'solid' ? '#FFFFFF' : '')};
`;

StyledAlertCommonText.displayName = 'StyledAlertCommonText';

export const StyledAlertTitle = styled(StyledAlertCommonText)<IBaseAlertComponentProps>`
	font-weight: 700;
	margin-right: 0.5rem;
`;

StyledAlertTitle.displayName = 'StyledAlertTitle';

export const StyledAlertDescription = styled(StyledAlertCommonText)<IBaseAlertComponentProps>`
	display: inline;
`;

StyledAlertDescription.displayName = 'StyledAlertDescription';

const StyledAlertCommonIcon = styled(Box)<IBaseAlertComponentProps>`
	font-family: 'Mooskin Icons';
	color: ${(props) => (props.variant === 'solid' ? '#FFFFFF' : props.status && FontColors[props.status])};
`;

StyledAlertCommonIcon.displayName = 'StyledAlertCommonIcon';

export const StyledAlertIcon = styled(StyledAlertCommonIcon)`
	flex-shrink: 0;
	margin-right: 0.75rem;
	width: 1.5rem;
	height: 1.5rem;
	font-size: 1.5rem;
	display: inherit;
`;

StyledAlertIcon.displayName = 'StyledAlertIcon';

export const StyledAlertCloseButton = styled(StyledAlertCommonIcon)<IBaseAlertComponentProps>`
	outline: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	transition: all 0.2s;
	width: 32px;
	height: 32px;
	font-size: 20px;
	cursor: pointer;
	border-radius: 9px;
	&:hover {
		background: rgba(30, 30, 30, 0.1);
	}
`;

StyledAlertCloseButton.displayName = 'StyledAlertCloseButton';
