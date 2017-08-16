import * as React from 'react';

import {Button} from '../index/';
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

}

export interface ITableState{
    display?: boolean;
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
            display: false
        };
    }

    public render(){

        const rows = this.getRows();

        const headerDisplay = this.state.display ? styles.headerRow : '';

        const wrapperClasses = !this.state.display ? styles.overflowWrapper : '';

        const tableClasses = !this.state.display ? styles.overflowTable : '' ;

        return (
            <div className={`${styles.tableWrapper} ${wrapperClasses}`}>
                <Button onClick={this.onButtonClick()} className={styles.button}>Toggle (demonstration only)</Button>
                <table
                    className={`table-component ${styles.table} ${tableClasses} ${this.props.className}`}
                    style={this.props.style}
                >
                    <thead className={headerDisplay}>
                        <tr>
                            {this.props.children}
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

    private onButtonClick = () => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({display: !this.state.display});
        };
    }

    private getRows = () => {

        const settings = this.getSettings();

        const rows: Array<React.ReactElement<ITableProps>> = [];

        this.props.data.map((obj: any, index: number) => {
            const cols: Array<React.ReactElement<ITableProps>> = [];

            for (const key in obj) {

                if (obj.hasOwnProperty(key)) {

                    settings.forEach((setting: any, i: number) => {

                        if (setting.dataField.toUpperCase() === key.toUpperCase()){

                            const display = setting.hide ? styles.hide : '';

                            const heading = this.state.display ?
                            <span className={styles.heading} >{setting.heading}</span> : '';

                            const colCard = this.state.display ? styles.colCard : '';

                            cols[i] = (
                                <Col className={`${display} ${colCard}`} key={i} >
                                    {heading}
                                    <span className={styles.content}>{obj[key]}</span>
                                </Col>
                            );
                        }

                    });

                }
            }

            const rowCard = this.state.display ? styles.rowCard : '';

            rows.push(
                <Row key={index} className={rowCard}>
                    {cols}
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

}

export const TableHeader: React.StatelessComponent<IHeaderProps> = (props) => {

    const display = props.hideSmall ? styles.hide : '';

    return(
        <th
            style={props.style}
            className={`table-header ${props.className} ${styles.header} ${display}`}
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
