import styled from 'styled-components';

// Models
import { ISelectorComponentProps, ISelectorItemComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledSelector = styled(Box)<ISelectorComponentProps>`
	padding: 6px;
	border-radius: 22px;
	background-color: ${(props) => props.palette?.backgroundColors.primary2 || variables.backgroundColors.primary2};
	display: flex;
`;

StyledSelector.displayName = 'StyledSelector';

export const StyledSelectorItem = styled(Box)<ISelectorItemComponentProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	height: 32px;
	border-radius: 22px;
	color: ${(props) =>
		props.active
			? `${props.palette?.fontColors.text || variables.fontColors.text}`
			: `${props.palette?.fontColors.medgray1 || variables.fontColors.medgray1}`};
	background-color: ${(props) =>
		props.active
			? `${props.palette?.backgroundColors.white || variables.backgroundColors.white}`
			: `${props.palette?.backgroundColors.primary2 || variables.backgroundColors.primary2}`};
	font-size: 12px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	transition: 0.3s ease all;
	opacity: ${(props) => (props.active ? 1 : 0.5)};
	cursor: pointer;
	&:not(:last-child) {
		margin-right: 4px;
	}
`;

StyledSelectorItem.displayName = 'StyledSelectorItem';
