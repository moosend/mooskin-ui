import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledTable = styled(Box)<IBoxComponentProps>`
	border: solid 1px #e2e2e2;
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	display: flex;
	flex-direction: column;
`;

StyledTable.displayName = 'StyledTable';

export const StyledTableHeader = styled(Box)<IBoxComponentProps>`
	display: flex;
	align-items: center;
	min-height: 45px;
`;

StyledTableHeader.displayName = 'StyledTableHeader';

export const StyledTableHeaderItem = styled(Box)<IBoxComponentProps>`
	font-size: 11px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${(props) => props.palette?.fontColors.secondary2 || variables.fontColors.secondary2};
	display: flex;
	align-items: center;
`;

StyledTableHeaderItem.displayName = 'StyledTableHeaderItem';

export const StyledTableRow = styled(Box)<IBoxComponentProps>`
	display: flex;
	align-items: center;
	min-height: 90px;
	border-top: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	border-bottom: solid 1px ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1};
	:last-child {
		border: none;
	}
`;

StyledTableRow.displayName = 'StyledTableRow';

export const StyledTableRowItem = styled(Box)<IBoxComponentProps>`
	font-size: 16px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	display: flex;
	align-items: center;
`;

StyledTableRowItem.displayName = 'StyledTableRowItem';
