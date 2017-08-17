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
}

export default class Table extends React.Component<ITableProps, ITableState> {

    public static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    public static TableHeader: React.StatelessComponent<IHeaderProps>;

    constructor(props: ITableProps){
        super(props);

        this.state = {
            activeRow: -1,
            sortBy: ''
        };
    }

    public render(){

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

    private getRows = () => {

        const rows: Array<React.ReactElement<ITableProps>> = [];

        const data = this.sortData(this.props.data);

        const settings = this.getSettings();

        data.map((obj: any, index: number) => {
            const cols: Array<React.ReactElement<ITableProps>> = [];

            for (const key in obj) {

                if (obj.hasOwnProperty(key)) {

                    settings.forEach((setting: any, i: number) => {

                        if (setting.dataField.toUpperCase() === key.toUpperCase()){

                            const display = setting.hide ? styles.hide : '';

                            cols[i] = (
                                <Col className={display} key={i + 1} >
                                    <span className={styles.heading}>{setting.heading}</span>
                                    <span className={styles.content}>{obj[key]}</span>
                                </Col>
                            );

                        }

                    });

                }
            }

            const buttonCol = (
                <Col key = {0} className={styles.buttonCol}>
                    <SmallIconButton
                        icon="list"
                        className={styles.toggle}
                        onClick={this.showPopover(index)}
                        transparent
                    />
                </Col>
            );

            cols.splice(0, 0, buttonCol);

            rows.push(
                <Row key={index}>
                    {cols}
                    <Popover active={this.state.activeRow === index}>
                        {cols}
                    </Popover>
                </Row>
            );

        });

        return rows;
    }

    private getSettings = () => {

        const settings: object[] = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)){
                settings.push(
                    {
                        dataField: child.props.dataField,
                        heading: child.props.children,
                        hide: child.props.hideSmall
                    }
                );
            }

        });

        return settings;
    }

    private sortData = (data: object[]) => {

        const sortBy = this.state.sortBy;

        if (this.state.sortBy !== ''){
            data.sort((a: any, b: any) => a[sortBy] - b[sortBy]);
            return data;
        } else {
            return data;
        }
    }

    private getHeaders = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<IHeaderProps>(child)){
                headers.push(
                    <TableHeader
                        key={index + 1}
                        className={child.props.className}
                        style={child.props.style}
                        dataField={child.props.dataField}
                        hideSmall={child.props.hideSmall}
                        onClick={this.onClickHeader(child.props.dataField)}
                    >
                        {child.props.children}
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

    private onClickHeader = (sortBy: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            console.log(sortBy);
            this.setState({sortBy});
        };
    }

    private showPopover = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeRow: index});
        };
    }

    private getCover = () => {
        if (this.state.activeRow >= 0){
            return (
                <div className={styles.cover} onClick={this.toggle()}/>
            );
        }
    }

    private toggle = () => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeRow: -1});
        };
    }

}

export const TableHeader: React.StatelessComponent<IHeaderProps> = (props) => {

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

    return(
        <tr className={`row ${styles.row} ${props.className}`} style={props.style}>
            {props.children}
        </tr>
    );
};

export const Col: React.StatelessComponent<IColProps> = (props) => {

    return(
        <td className={`column ${styles.col} ${props.className}`} style={props.style}>
            {props.children}
        </td>
    );
};

export const Popover: React.StatelessComponent<IPopoverProps> = (props) => {

    const active = !props.active ? styles.inactive : styles.active;

    return(
        <td className={`${styles.popover} ${active}`} style={props.style}>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        {props.children}
                    </tr>
                </tbody>
            </table>
        </td>
    );

};
