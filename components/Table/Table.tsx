import * as React from 'react';

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

export default class Table extends React.Component<ITableProps, {}> {

    public static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    public static TableHeader: React.StatelessComponent<IHeaderProps>;

    public render(){

        const rows = this.getRows();

        return (
            <div className={styles.tableWrapper}>
                <table
                    className={`table-component ${styles.table} ${this.props.className}`}
                    style={this.props.style}
                >
                    <thead>
                        <tr>
                            {this.props.children}
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

    private getRows = () => {

        const settings = this.getSettings();

        const rows: Array<React.ReactElement<ITableProps>> = [];

        this.props.data && this.props.data.map((obj: any, index: number) => {
            const cols: Array<React.ReactElement<ITableProps>> = [];

            for (const key in obj) {

                if (obj.hasOwnProperty(key)) {

                    settings.forEach((setting: any, i: number) => {

                        if (setting.text.toUpperCase() === key.toUpperCase()){

                            const display = setting.hide ? styles.hide : '';

                            cols[i] = (
                                <Col className={display} >
                                    <span className={styles.heading}>{setting.text}</span>
                                    <span>{obj[key]}</span>
                                </Col>
                            );
                        }

                    });

                }
            }

            rows.push(
                <Row key={index}>
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
                        hide: child.props.hideSmall,
                        text: child.props.children
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
