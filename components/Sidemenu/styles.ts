import styled from 'styled-components';

// Models
import { ISidemenuComponentProps, ISidemenuItemComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

import variables from '../_utils/globals/variables';

export const StyledSidemenu = styled(Box)<ISidemenuComponentProps>`
	border-left-width: 1px;
	border-left-style: solid;
	border-left-color: ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	display: flex;
	flex-direction: column;
`;

StyledSidemenu.displayName = 'StyledSidemenu';

export const StyledSidemenuItem = styled(Box)<ISidemenuItemComponentProps>`
	font-size: 14px;
	font-weight: ${(props) => (props.active ? 'bold' : '500')};
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	margin-left: ${(props) => (props.active ? '-2px' : '0')};
	padding-left: 9px;
	border-left: ${(props) =>
		props.active ? `3px solid ${props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1}` : ''};
	cursor: pointer;
	&:not(:last-child) {
		margin-bottom: 32px;
	}
`;

StyledSidemenuItem.displayName = 'StyledSidemenuItem';
