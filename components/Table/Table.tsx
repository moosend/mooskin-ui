import * as React from 'react';

import icons from '../../assets/mooskin-icons/mooskin-icons.css';
import Pagination from '../Pagination';
import SmallIconButton from '../SmallIconButton';
import styles from './Table.css';

import { arrow } from '../List/List';
import listStyles from '../List/List.css';

import { DndProvider, useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const ItemTypes = {
    ROW: 'row'
}

export interface ITableProps {

    /** override Table id */
    id?: string;

    data: object[] | Element[];

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

    /** pagionation props */
    paginationProps?: { [key: string]: React.CSSProperties | string | number | boolean };

    /** styling applied to the div containing the table */
    containerStyle?: React.CSSProperties;

    /** wether the collapse button should be available on small screens */
    smallCollapse?: boolean;

    /** classes for popover header */
    collapseHeaderClassName?: string;

    /** styles for popover header */
    collapseHeaderStyle?: React.CSSProperties;

    /** paginate table based on passed number */
    paginate?: number;

    /** Table class */
    rowClass?: string;

    /** alternate view for table */
    alternate?: boolean;

    /** override Table styles */
    rowStyle?: React.CSSProperties;

    children?: any;

    dragAndDrop?: (dragIndex: number, hoverIndex: number) => void
}

export interface IHeaderProps {

    /** header class */
    className?: string;

    /** override header styles */
    style?: React.CSSProperties;

    /** wether to hide this column on small screens */
    hideSmall?: boolean;

    /** which obj prop should be displayed in this col */
    dataField: string;

    /** wether the row should be sortable or not */
    sortable?: boolean;

    /** determines the direction of the sorting arrow */
    arrowDirection?: 'asc' | 'desc';

    /** classes to be applied to the columns on this header */
    colClasses?: string;

    /** styles to be applied to the columns on this header */
    colStyles?: React.CSSProperties;

    /** custom sort function */
    sortfn?: any;

    children?: any;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IColProps {

    /** Column class */
    className?: string;

    /** override Column styles */
    style?: React.CSSProperties;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}

export interface IRowProps {

    /** Row class */
    className?: string;

    /** override Row styles */
    style?: React.CSSProperties;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    id: number;

    dragAndDrop?: (dragIndex: number, hoverIndex: number) => void

}

export interface IPopoverProps {

    /** Popover class */
    className?: string;

    /** override Popover styles */
    style?: React.CSSProperties;

    /** wether the popover is active or not */
    active?: boolean;

}

export interface ITableState {
    activeRow: number;
    sortBy: string;
    order: string;
    data: object[];
    page: number;
}

interface DragItem {
    index: number
    id: string
    type: string
}

export default class Table extends React.Component<ITableProps, ITableState> {

    static defaultProps: Partial<ITableProps> = {
        className: '',
        paginationProps: {
            firstBtn: true,
            lastBtn: true,
            nextBtn: true,
            prevBtn: true
        },
        style: {}
    };

    static displayName = 'Table';

    static TableHeader: React.StatelessComponent<IHeaderProps>;

    static getDerivedStateFromProps(nextProps: ITableProps, prevState: ITableState) {
        if (prevState.data !== nextProps.data) {
            return {
                data: nextProps.data
            };
        }

        return null;
    }

    constructor(props: ITableProps) {
        super(props);

        this.state = {
            activeRow: -1,
            data: [],
            order: 'desc',
            page: 1,
            sortBy: ''
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.data });
    }

    render() {

        const headers = this.getHeaders();
        const rows = this.getRows();
        const cover = this.getCover();

        const tableStyles = !this.props.alternate ? styles.table : styles.alternate;
        const { paginate } = this.props;
        const pagination = paginate ? true : false;
        
        return (
            <div>
                <div className={styles.tableWrapper} style={this.props.containerStyle}>
                    {cover}
                    <table
                        className={`table-component ${tableStyles} ${this.props.className}`}
                        style={this.props.style}
                    >
                        <thead>
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody className={styles.body}>
                            {this.props.dragAndDrop ? this.renderWithDndProvider() : rows}
                        </tbody>
                    </table>
                </div>
                {pagination && this.getPagination()}
            </div>
        );
    }

    getRows = () => {

        const rows: Array<React.ReactElement<ITableProps>> = [];

        const { settings, sortable } = this.getSettings();

        const data = this.props.paginate || sortable ? this.state.data : this.props.data;

        let pushedIndex = 0;

        // const data = this.props.data as any;

        data.map((obj: any, index: number) => {
            const cols: Array<React.ReactElement<ITableProps>> = [];
            const popoverData: Array<React.ReactElement<ITableProps>> = [];

            let colSpan = 1;

            for (const key in obj) {

                if (obj.hasOwnProperty(key)) {

                    colSpan = colSpan + 1;

                    settings.forEach((setting: any, i: number) => {

                        if (setting.dataField.toUpperCase() === key.toUpperCase()) {

                            const display = setting.hide ? styles.hide : '';

                            const content = this.getContent(obj[key]);

                            const colStyles = this.props.alternate ? styles.alternateCol : styles.col;

                            const colKey = this.props.smallCollapse ? i + 1 : i;

                            const dataField = setting.dataField;

                            const onCellClick = obj.onClick ?
                                this.onCellClick(obj.onClick, { label: obj[key], dataField, content: data[index], index }) :
                                undefined;

                            cols[i] = (
                                <Col
                                    style={{ ...setting.styles, ...obj.style }}
                                    className={`${colStyles} ${styles.colComponent} ${display} ${setting.classes}`}
                                    key={colKey}
                                    onClick={onCellClick}
                                >
                                    {/* <span className={styles.heading}>{setting.heading}</span> */}
                                    <div className={styles.contentContainer}>
                                        {content}
                                    </div>
                                </Col>
                            );

                            if (this.props.smallCollapse) {
                                popoverData[i] = (
                                    <div className={styles.popoverCol} key={i}>
                                        <span className={styles.heading}>{setting.heading}</span>
                                        <span className={styles.content}>{obj[key]}</span>
                                    </div>
                                );
                            }

                        }

                    });

                }
            }

            if (this.props.smallCollapse) {

                const alternateButton = this.props.alternate ? styles.alternateButton : '';

                const buttonCol = (
                    <Col key={0} className={`${styles.buttonCol} ${alternateButton}`}>
                        <SmallIconButton
                            icon="list"
                            className={styles.toggle}
                            onClick={this.showPopover(index)}
                            transparent
                        />
                        <Popover active={this.state.activeRow === index}>
                            {popoverData}
                        </Popover>
                    </Col>
                );

                cols.splice(0, 0, buttonCol);
            }

            const rowStyles = this.props.alternate ? styles.alternateRow : '';

            if (obj && obj.expandable && obj.expandable.expanded) {
                const content = obj.expandable.content ? this.prepareContent(obj.expandable.content, obj.expandable.expanded) : null;
                rows.push(
                    <Row
                        key={index + pushedIndex}
                        style={this.props.rowStyle}
                        className={`${rowStyles} ${this.props.rowClass}`}
                        id={index + pushedIndex}
                        dragAndDrop={this.props.dragAndDrop}
                    >
                        {cols}
                    </Row>
                );
                rows.push(
                    <Row
                        style={obj.expandable.style}
                        className={`${listStyles.expandedSection} ${obj.expandable.className}`}
                        key={index + pushedIndex + 1}
                        id={index + pushedIndex + 1}
                        dragAndDrop={this.props.dragAndDrop}
                    >
                        {content}
                    </Row>
                );
                pushedIndex = pushedIndex + 1;
            } else {
                rows.push(
                    <Row
                        key={index + pushedIndex}
                        style={this.props.rowStyle}
                        className={`${rowStyles} ${this.props.rowClass}`}
                        id={index + pushedIndex}
                        dragAndDrop={this.props.dragAndDrop}
                    >
                        {cols}
                    </Row>
                );
            }

        });

        if (this.props.paginate) {
            const pagRows = this.paginateRows(rows);
            return pagRows[this.state.page - 1];
        }

        return rows;
    }

    getSettings = () => {

        const settings: object[] = [];
        let sortable = false;

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)) {
                settings.push(
                    {
                        classes: child.props.colClasses,
                        dataField: child.props.dataField,
                        heading: child.props.children,
                        hide: child.props.hideSmall,
                        styles: child.props.colStyles
                    }
                );
                if (child.props.sortable) {
                    sortable = true;
                }
            }

        });

        return { settings, sortable };
    }

    renderWithDndProvider = () => {
        return (
            <DndProvider backend={HTML5Backend}>
                {this.getRows()}
            </DndProvider>
        );
    }

    sortData = (sortBy: string, order: string, sortfn?: any) => {

        const data = this.state.data;

        if (sortfn) {
            data.sort((a, b) => sortfn(a, b, this.state.order, sortBy));
        } else {
            data.sort((a: any, b: any) => {

                let comparison = 0;

                if (a[sortBy] < b[sortBy]) {
                    comparison = -1;
                } else if (a[sortBy] > b[sortBy]) {
                    comparison = 1;
                }
                return comparison;
            });

            if (order === 'desc') {
                data.reverse();
            }
        }

        this.setState({ data, sortBy, order: this.setOrder(order) });

    }

    onCellClick = (
        callback: (e: React.MouseEvent<HTMLElement>, data: { label: any, dataField: string, content: {} }) => void,
        data: { label: any, dataField: string, content: {}, index: number }
    ) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            return callback(e, data);
        };
    }

    setOrder = (order: string) => {
        if (order === 'desc') {
            return 'asc';
        } else {
            return 'desc';
        }
    }

    getHeaders = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const headerStyles = !this.props.alternate ? styles.header : styles.alternateHeader;

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)) {

                const pointer = child.props.sortable || child.props.onClick ? styles.sortHeader : '';
                // const pointer = child.props.onClick ? styles.sortHeader : '';

                const sortable = child.props.sortable || child.props.onClick ?
                    this.onClickHeader(child.props.dataField, child.props.sortfn, child.props.onClick, child.props.sortable) :
                    undefined;

                const i = this.props.smallCollapse ? index + 1 : index;

                headers.push(
                    <TableHeader
                        key={i}
                        className={`${headerStyles} ${child.props.className} ${pointer}`}
                        style={child.props.style}
                        dataField={child.props.dataField}
                        hideSmall={child.props.hideSmall}
                        onClick={sortable}
                    // onClick={child.props.onClick}
                    >
                        <div>
                            {child.props.children}
                            {this.getArrow(child.props.dataField, child.props.arrowDirection)}
                        </div>
                    </TableHeader>
                );
            }

        });

        if (this.props.smallCollapse) {
            const buttonHeader = (
                <TableHeader
                    dataField="collapse-button"
                    key={0}
                    className={`${headerStyles} ${styles.buttonHeader} ${this.props.collapseHeaderClassName}`}
                    style={this.props.collapseHeaderStyle}
                >
                    <div style={{ visibility: 'hidden' }}>
                        {'X'}
                    </div>
                </TableHeader>
            );

            headers.splice(0, 0, buttonHeader);
        }

        return headers;
    }

    getArrow = (dataField: string, arrowDirection?: 'asc' | 'desc') => {
        if ((this.state.sortBy === dataField && this.state.order === 'desc') || arrowDirection === 'asc') {
            return <i className={`${icons.mooskinIcons} ${styles.arrow}`}>keyboard_arrow_up</i>;
        }
        if ((this.state.sortBy === dataField && this.state.order === 'asc') || arrowDirection === 'desc') {
            return <i className={`${icons.mooskinIcons} ${styles.arrow}`}>keyboard_arrow_down</i>;
        }
    }

    onClickHeader = (sortBy: string, sortfn?: any, onHeaderClick?: any, sortable?: boolean) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            onHeaderClick && onHeaderClick();
            sortable && this.sortData(sortBy, this.state.order, sortfn);
        };
    }

    showPopover = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({ activeRow: index });
        };
    }

    getCover = () => {
        if (this.state.activeRow >= 0) {
            return (
                <div className={styles.cover} onClick={this.toggle()} />
            );
        }
    }

    toggle = () => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({ activeRow: -1 });
        };
    }

    getContent = (content: any) => {
        if (Array.isArray(content)) {
            return content.map((cont, index) => {
                if (index === 0) {
                    return <span key={index} className={styles.content}>{content[index]}</span>;
                } else {
                    return <span key={index} className={styles.smallContent}>{content[index]}</span>;
                }
            });
        } else {
            return <span className={styles.content}>{content}</span>;
        }
    }

    paginateRows = (rows: Array<React.ReactElement<ITableProps>>) => {
        const paginated = [];
        const size = this.props.paginate;

        while (rows.length > 0) {
            paginated.push(rows.splice(0, size));
        }

        return paginated;
    }

    getPagination = () => {

        const { paginate, paginationProps } = this.props;

        if (paginate) {

            const pages = Math.ceil(this.state.data.length / paginate);

            return (
                <div className={styles.pagination}>
                    <Pagination
                        onClick={this.onPaginationClick}
                        items={pages}
                        currentItem={this.state.page}
                        firstBtn={paginationProps && paginationProps.firstBtn as boolean}
                        lastBtn={paginationProps && paginationProps.lastBtn as boolean}
                        prevBtn={paginationProps && paginationProps.prevBtn as boolean}
                        nextBtn={paginationProps && paginationProps.nextBtn as boolean}
                        className={paginationProps && paginationProps.className as string}
                        maxButtons={paginationProps && paginationProps.maxButtons as number}
                        style={paginationProps && paginationProps.style as React.CSSProperties}
                        inverseStyle={paginationProps && paginationProps.inverseStyle as boolean}
                    />
                </div>
            );
        }

    }

    onPaginationClick = (item: number) => {

        const paginate = this.props.paginate ? this.props.paginate : 0;
        const pages = Math.ceil(this.state.data.length / paginate);

        if (item <= pages) {
            this.setState({ page: item });
        }
    }

    prepareContent = (content: JSX.Element | JSX.Element[], expanded: boolean) => {
        if (Array.isArray(content)) {
            const newElementArray: JSX.Element[] = [];
            content.map((element, i) => {
                const jsexy = this.constructElement(element, expanded, i);
                newElementArray.push(jsexy);
            });
            return newElementArray;
        }
        return this.constructElement(content, expanded, 0);
    }

    constructElement = (element: JSX.Element, expanded: boolean, index?: number) => {
        const renderedArrow = arrow(expanded, 1);
        const children = index === 0 ? [element.props.children, renderedArrow] : element.props.children;
        const props = { ...element.props, style: { ...element.props.style, ...{ position: 'relative' } }, children };
        return React.cloneElement(element, props, children);
    }

}

export const TableHeader: React.StatelessComponent<IHeaderProps> = (props) => {

    const display = props.hideSmall ? styles.hide : '';

    return (
        <th
            style={props.style}
            className={`table-header ${display} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </th>
    );

};

TableHeader.defaultProps = {
    className: '',
    style: {}
};

TableHeader.displayName = 'TableHeader';

// Custom hook to check if we need to call DND hooks
const useDnd = (ref: any, id: number, dragAndDrop: ((dragIndex: number, hoverIndex: number) => void) | undefined) => {
    if(dragAndDrop === undefined) {
        return;
    }
    
    const [, drop] = useDrop({
        accept: ItemTypes.ROW,
        hover(item: DragItem, monitor: DropTargetMonitor) {

            if (!ref.current) {
                return
            }

            const dragIndex = item.index;
            const hoverIndex = id;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = (clientOffset as any).y - hoverBoundingRect.top;

            // Dragging downwards
            if (dragIndex < hoverIndex! && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex! && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            dragAndDrop && dragAndDrop(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.ROW, index: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return { drop, drag: {isDragging, drag} };
}

export const Row: React.StatelessComponent<IRowProps> = (props) => {
    
    const ref = React.useRef<HTMLDivElement>(null);
    
    const dnd = useDnd(ref, props.id, props.dragAndDrop);

    if (props.dragAndDrop) {
        dnd && dnd.drag.drag(dnd.drop(ref));
    }

    return (
        <tr ref={ref as any} className={`row ${styles.row} ${props.className}`} style={{ ...props.style, opacity: dnd ? dnd.drag.isDragging ? 0.8 : 1 : 1 }}>
            {props.children}
        </tr>
    );
};

Row.defaultProps = {
    className: '',
    style: {}
};

Row.displayName = 'Row';

export const Col: React.StatelessComponent<IColProps> = (props) => {

    return (
        <td className={`column ${props.className}`} style={props.style} onClick={props.onClick}>
            {props.children}
        </td>
    );
};

Col.defaultProps = {
    className: '',
    style: {}
};

Col.displayName = 'Col';

export const Popover: React.StatelessComponent<IPopoverProps> = (props) => {

    const active = !props.active ? styles.inactive : styles.active;

    return (
        <div className={`${styles.popover} ${active}`} style={props.style}>
            {props.children}
        </div>
    );

};

Popover.defaultProps = {
    className: '',
    style: {}
};

Popover.displayName = 'Popover';
