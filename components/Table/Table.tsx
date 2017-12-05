import * as React from 'react';

import {SmallIconButton} from '../index';
import styles from './Table.css';

export interface ITableProps{

    /** override Table id */
    id?: string;

    data: object[];

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

    /** styling applied to the div containing the table */
    containerStyle?: React.CSSProperties;

    /** wether the collapse button should be available on small screens */
    smallCollapse?: boolean;

    /** Table class */
    rowClass?: string;

    /** alternate view for table */
    alternate?: boolean;

    /** override Table styles */
    rowStyle?: React.CSSProperties;

    children?: React.ReactElement<IHeaderProps> | Array<React.ReactElement<IHeaderProps>>;

}

export interface IHeaderProps{

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

    /** classes to be applied to the columns on this header */
    colClasses?: string;

    /** styles to be applied to the columns on this header */
    colStyles?: React.CSSProperties;

    /** custom sort function */
    sortfn?: any;

    children?: any;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IColProps{

    /** Column class */
    className?: string;

    /** override Column styles */
    style?: React.CSSProperties;

}

export interface IRowProps{

    /** Row class */
    className?: string;

    /** override Row styles */
    style?: React.CSSProperties;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}

export interface IPopoverProps{

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
}

export default class Table extends React.Component<ITableProps, ITableState> {

    static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    static TableHeader: React.StatelessComponent<IHeaderProps>;

    constructor(props: ITableProps){
        super(props);

        this.state = {
            activeRow: -1,
            data: [],
            order: 'desc',
            sortBy: ''
        };
    }

    componentDidMount(){
        this.setState({data: this.props.data});
    }

    componentWillUpdate(nextProps: any, nextState: any){
        if (nextState.sortBy !== this.state.sortBy){
            this.sortData(nextState.sortBy, 'desc');
        }
    }

    render(){

        const headers = this.getHeaders();
        const rows = this.getRows();
        const cover = this.getCover();

        const tableStyles = !this.props.alternate ? styles.table : styles.alternate;

        return (
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
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

    getRows = () => {

        const rows: Array<React.ReactElement<ITableProps>> = [];

        // const data = this.sortData(this.props.data);

        const settings = this.getSettings();

        this.state.data.map((obj: any, index: number) => {
            const cols: Array<React.ReactElement<ITableProps>> = [];
            const popoverData: Array<React.ReactElement<ITableProps>> = [];

            for (const key in obj) {

                if (obj.hasOwnProperty(key)) {

                    settings.forEach((setting: any, i: number) => {

                        if (setting.dataField.toUpperCase() === key.toUpperCase()){

                            const display = setting.hide ? styles.hide : '';

                            const content = this.getContent(obj[key]);

                            const colStyles = this.props.alternate ? styles.alternateCol : styles.col;

                            const colKey = this.props.smallCollapse ? i + 1 : i;

                            cols[i] = (
                                <Col
                                    style={setting.styles}
                                    className={`${colStyles} ${styles.colComponent} ${display} ${setting.classes}`}
                                    key={colKey}
                                >
                                    <span className={styles.heading}>{setting.heading}</span>
                                    <div className={styles.contentContainer}>
                                        {content}
                                    </div>
                                </Col>
                            );

                            if (this.props.smallCollapse){
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

            if (this.props.smallCollapse){

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

            rows.push(
                <Row
                    key={index}
                    style={this.props.rowStyle}
                    className={`${rowStyles} ${this.props.rowClass}`}
                >
                    {cols}
                </Row>
            );

        });

        return rows;
    }

    getSettings = () => {

        const settings: object[] = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)){
                settings.push(
                    {
                        classes: child.props.colClasses,
                        dataField: child.props.dataField,
                        heading: child.props.children,
                        hide: child.props.hideSmall,
                        styles: child.props.colStyles
                    }
                );
            }

        });

        return settings;
    }

    sortData = (sortBy: string, order: string, sortfn?: any) => {

        const data = this.state.data;

        if (sortfn){
            data.sort((a, b) => sortfn(a, b, this.state.order, sortBy));
        } else {
            data.sort((a: any, b: any) => {

                let comparison = 0;

                if (a[sortBy] < b[sortBy]){
                    comparison = -1;
                } else if (a[sortBy] > b[sortBy]){
                    comparison = 1;
                }
                return comparison;
            });

            if (order === 'desc'){
                data.reverse();
            }
        }

        this.setState({data, sortBy, order: this.setOrder(order)});

    }

    setOrder = (order: string) => {
        if (order === 'desc'){
            return 'asc';
        } else {
            return 'desc';
        }
    }

    getHeaders = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const headerStyles = !this.props.alternate ? styles.header : styles.alternateHeader;

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)){

                const pointer = child.props.sortable ? styles.sortHeader : '';

                const sortable = child.props.sortable ?
                this.onClickHeader(child.props.dataField, child.props.sortfn) :
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
                    >
                        <div>
                            {child.props.children}
                            {this.getArrow(child.props.dataField)}
                        </div>
                    </TableHeader>
                );
            }

        });

        if (this.props.smallCollapse){
            const buttonHeader = (
                <TableHeader dataField="button" key={0} className={`${headerStyles} ${styles.buttonHeader}`}>
                    <div style={{visibility: 'hidden'}}>
                        {'X'}
                    </div>
                </TableHeader>
            );

            headers.splice(0, 0, buttonHeader);
        }

        return headers;
    }

    getArrow = (dataField: string) => {
        if (this.state.sortBy === dataField && this.state.order === 'desc'){
            return <i className={`material-icons ${styles.arrow}`}>keyboard_arrow_up</i>;
        }
        if (this.state.sortBy === dataField && this.state.order === 'asc'){
            return <i className={`material-icons ${styles.arrow}`}>keyboard_arrow_down</i>;
        }
    }

    onClickHeader = (sortBy: string, sortfn?: any) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.sortData(sortBy, this.state.order, sortfn);
        };
    }

    showPopover = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeRow: index});
        };
    }

    getCover = () => {
        if (this.state.activeRow >= 0){
            return (
                <div className={styles.cover} onClick={this.toggle()}/>
            );
        }
    }

    toggle = () => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeRow: -1});
        };
    }

    getContent = (content: any) => {
        if (Array.isArray(content)){
            return content.map((cont, index) => {
                if (index === 0){
                    return <span key={index} className={styles.content}>{content[index]}</span>;
                } else {
                    return <span key={index} className={styles.smallContent}>{content[index]}</span>;
                }
            });
        } else {
            return <span className={styles.content}>{content}</span>;
        }
    }

}

export const TableHeader: React.StatelessComponent<IHeaderProps> = (props) => {

    TableHeader.defaultProps = {
        className: '',
        style: {}
    };

    const display = props.hideSmall ? styles.hide : '';

    return(
        <th
            style={props.style}
            className={`table-header ${display} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </th>
    );

};

export const Row: React.StatelessComponent<IRowProps> = (props) => {

    Row.defaultProps = {
        className: '',
        style: {}
    };

    return(
        <tr className={`row ${styles.row} ${props.className}`} style={props.style}>
            {props.children}
        </tr>
    );
};

export const Col: React.StatelessComponent<IColProps> = (props) => {

    Col.defaultProps = {
        className: '',
        style: {}
    };

    return(
        <td className={`column ${props.className}`} style={props.style}>
            {props.children}
        </td>
    );
};

export const Popover: React.StatelessComponent<IPopoverProps> = (props) => {

    Popover.defaultProps = {
        className: '',
        style: {}
    };

    const active = !props.active ? styles.inactive : styles.active;

    return(
        <div className={`${styles.popover} ${active}`} style={props.style}>
            {props.children}
        </div>
    );

};
