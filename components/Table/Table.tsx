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

        return (
            <div className={styles.tableWrapper}>
                {cover}
                <table
                    className={`table-component ${styles.table} ${this.props.className}`}
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

                            cols[i] = (
                                <Col
                                    style={setting.styles}
                                    className={`${styles.colComponent} ${display} ${setting.classes}`}
                                    key={i + 1}
                                >
                                    <span className={styles.heading}>{setting.heading}</span>
                                    <span key={index} className={styles.content}>{obj[key]}</span>
                                </Col>
                            );

                            popoverData[i] = (
                                <div className={styles.popoverCol} key={i}>
                                    <span className={styles.heading}>{setting.heading}</span>
                                    <span key={index} className={styles.content}>{obj[key]}</span>
                                </div>
                            );

                        }

                    });

                }
            }

            const buttonCol = (
                <Col key={0} className={styles.buttonCol}>
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

            rows.push(
                <Row key={index}>
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

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)){

                const pointer = child.props.sortable ? styles.sortHeader : '';

                const sortable = child.props.sortable ?
                                this.onClickHeader(child.props.dataField, child.props.sortfn) :
                                undefined;

                headers.push(
                    <TableHeader
                        key={index + 1}
                        className={`${child.props.className} ${pointer}`}
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

        const buttonHeader = (
            <TableHeader dataField="button" key={0} className={styles.buttonHeader}>
                {'X'}
            </TableHeader>
        );

        headers.splice(0, 0, buttonHeader);

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
            className={`table-header ${props.className} ${styles.header} ${display}`}
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
        <td className={`column ${styles.col} ${props.className}`} style={props.style}>
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
