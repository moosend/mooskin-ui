import styled from 'styled-components';

// Models
import { ITabCommonComponentProps, ITabComponentProps, ITabsComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

export const StyledTabs = styled(Box)<ITabsComponentProps>`
	display: flex;
	flex-direction: column;
`;

StyledTabs.displayName = 'StyledTabs';

export const StyledTab = styled(Box)<ITabComponentProps>``;

StyledTab.displayName = 'StyledTab';

export const StyledTabHeader = styled(Box)<ITabCommonComponentProps>`
	font-family: Montserrat;
	font-size: 12px;
	border-bottom: ${(props) => (props.active ? 'solid 2px #3fbaca' : 'none')};
	padding: ${(props) => (props.active ? '5px 0 3px' : '5px 0')};
	font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
	font-stretch: normal;
	font-style: normal;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	color: #2d2d2d;
	cursor: pointer;
	:not(:last-child) {
		margin-right: 15px;
	}
`;

StyledTabHeader.displayName = 'StyledTabHeader';

export const StyledTabContent = styled(Box)<ITabCommonComponentProps>``;

StyledTabContent.displayName = 'StyledTabContent';
