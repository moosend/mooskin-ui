import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

export const StyledTable = styled(Box)<IBoxComponentProps>`
	border: solid 1px #e2e2e2;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
`;

StyledTable.displayName = 'StyledTable';

export const StyledTableHeader = styled(Box)<IBoxComponentProps>`
	display: flex;
	padding: 10px 0;
`;

StyledTableHeader.displayName = 'StyledTableHeader';

export const StyledTableHeaderItem = styled(Box)<IBoxComponentProps>`
	font-family: Montserrat;
	font-size: 11px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.27;
	letter-spacing: normal;
	text-align: left;
	color: #425579;
	display: flex;
	align-items: center;
`;

StyledTableHeaderItem.displayName = 'StyledTableHeaderItem';

export const StyledTableRow = styled(Box)<IBoxComponentProps>`
	display: flex;
	padding: 35px 0;
	align-items: center;
	border-top: solid 1px #e2e2e2;
	border-bottom: solid 1px #e2e2e2;
	:last-child {
		border: none;
	}
`;

StyledTableRow.displayName = 'StyledTableRow';

export const StyledTableRowItem = styled(Box)<IBoxComponentProps>`
	font-family: Hind;
	font-size: 16px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 0.94;
	letter-spacing: normal;
	text-align: left;
	color: #2d2d2d;
	display: flex;
	align-items: center;
`;

StyledTableRowItem.displayName = 'StyledTableRowItem';
