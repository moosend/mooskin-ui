import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IExpandableCommonComponentProps, IExpandableComponentProps, IExpandableItemComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledExpandable = styled(Box)<IExpandableComponentProps>`
	display: flex;
	flex-direction: column;
`;

StyledExpandable.displayName = 'StyledExpandable';

export const StyledExpandableItem = styled(Box)<IExpandableItemComponentProps>`
	border-radius: 2px;
	border: solid 1px #e2e2e2;
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	:not(:last-child) {
		margin-bottom: 15px;
	}
`;

StyledExpandableItem.displayName = 'StyledExpandableItem';

export const StyledExpandableItemContainer = styled(Box)<IBoxComponentProps>`
	display: flex;
	padding: 17px;
	cursor: pointer;
`;

StyledExpandableItemContainer.displayName = 'StyledExpandableItemContainer';

export const StyledExpandableItemButton = styled(Box)<IExpandableCommonComponentProps>`
	font-family: 'Mooskin Icons';
	font-size: 20px;
	transition: all ease 0.4s;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

StyledExpandableItemButton.displayName = 'StyledExpandableItemButton';

export const StyledExpandableItemText = styled(Box)<IBoxComponentProps>`
	flex: 1;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledExpandableItemText.displayName = 'StyledExpandableItemText';

export const StyledExpandableItemContent = styled(Box)<IExpandableCommonComponentProps>``;

StyledExpandableItemContent.displayName = 'StyledExpandableItemContent';
