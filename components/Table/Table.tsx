import * as React from 'react';

// Models
import { IBoxComponentProps } from '../Box/model';

// Styled Components
import { StyledTable, StyledTableHeader, StyledTableHeaderItem, StyledTableRow, StyledTableRowItem } from './styles';

/**
 * Table
 */
export const Table: React.FC<IBoxComponentProps> = (props) => {
    return <StyledTable {...props} />;
};

Table.defaultProps = {
    className: '',
    style: {}
};

Table.displayName = 'Table';

/**
 * TableHeader
 */
export const TableHeader: React.FC<IBoxComponentProps> = (props) => {
    return <StyledTableHeader {...props} />;
};

TableHeader.defaultProps = {
    className: '',
    style: {}
};

TableHeader.displayName = 'TableHeader';

/**
 * TableHeaderItem
 */
export const TableHeaderItem: React.FC<IBoxComponentProps> = (props) => {
    return <StyledTableHeaderItem {...props} />;
};

TableHeaderItem.defaultProps = {
    className: '',
    style: {}
};

TableHeaderItem.displayName = 'TableHeaderItem';

/**
 * TableRow
 */
export const TableRow: React.FC<IBoxComponentProps> = (props) => {
    return <StyledTableRow {...props} />;
};

TableRow.defaultProps = {
    className: '',
    style: {}
};

TableRow.displayName = 'TableRow';

/**
 * TableRowItem
 */
export const TableRowItem: React.FC<IBoxComponentProps> = (props) => {
    return <StyledTableRowItem {...props} />;
};

TableRowItem.defaultProps = {
    className: '',
    style: {}
};

TableRowItem.displayName = 'TableRowItem';

export default Table;
