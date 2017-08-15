import * as React from 'react';

import styles from './Table.css';

export interface ITableProps{

    /** override Table id */
    id?: string;

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

    children?: any;

}

export interface IHeaderProps extends ITableProps {

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Table extends React.Component<ITableProps, {}> {

    public static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    public static THead: React.StatelessComponent<ITableProps>;
    public static TH: React.StatelessComponent<IHeaderProps>;
    public static TBody: React.StatelessComponent<ITableProps>;
    public static TR: React.StatelessComponent<ITableProps>;
    public static TD: React.StatelessComponent<ITableProps>;

    public render(){

        const {newHeaders, newBody} = this.getContent();

        return (
            <div>
                 <table {...this.props} className={`${styles.table} ${this.props.className}`}>
                    {newHeaders}
                    {newBody}
                </table>
            </div>
        );
    }

    private getContent = () => {

        let headStrings: string[] = [];
        let newHeaders: React.ReactElement<ITableProps> = <TR/>;
        let newCells: Array<React.ReactElement<ITableProps>> = [];
        const newRows: Array<React.ReactElement<ITableProps>> = [];
        const newBody: Array<React.ReactElement<ITableProps>> = [];

        React.Children.forEach(this.props.children, (child) => {

            if (React.isValidElement<ITableProps>(child)){

                if (child.type === THead && child.props.children){

                    const row = this.getRowChildren(child.props.children);
                    headStrings = this.collectData(row);

                    const headers = this.getRowChildren(row);

                    const callbackHeaders = headers.map((header: React.ReactElement<IHeaderProps>, i: number) => {
                        return (
                            <TH
                                key = {i}
                                className = {header.props.className}
                                style = {header.props.style}
                                onClick = {this.onClickHeader(header)}
                            >
                                {header.props.children}
                            </TH>
                        );
                    });

                    newHeaders = (
                        <THead
                            className = {child.props.className}
                            style = {child.props.style}
                        >
                            <TR>
                                {callbackHeaders}
                            </TR>
                        </THead>
                    );

                    // newHeaders = child;
                }

                if (child.type === TBody){

                    const data = this.getRowChildren(child.props.children);
                    data.map((row: any, i: number) => {
                        const cells = this.getRowChildren(row);
                        cells.map((cell: any, index: number) => {
                            newCells.push(
                                <TD
                                    key = {index}
                                    className = {cell.props.className}
                                    style = {cell.props.style}
                                >
                                    <div className = {styles.tdContent}>
                                        <span className={styles.heading}>{headStrings[index]}</span>
                                        <span className={styles.content}>{cell.props.children}</span>
                                    </div>
                                </TD>
                            );
                        });
                        newRows.push(
                            <TR
                                key = {i}
                                className = {row.props.className}
                                style = {row.props.style}
                            >
                                {newCells}
                            </TR>
                        );
                        newCells = [];
                    });

                    newBody.push(
                        <TBody
                            key = {0}
                            className = {child.props.className}
                            style = {child.props.style}
                        >
                            {newRows}
                        </TBody>
                    );

                }

            }

        });

        return {newHeaders, newBody};

    }

    private getRowChildren = (row: any) => {
        if (Array.isArray(row)){
            return row;
        } else {
            return row.props.children;
        }
    }

    private collectData(headersArray: Array<React.ReactElement<ITableProps>>){

        const headers: string[] = [];

        headersArray.map((header) => {
            headers.push(header.props.children);
        });

        return headers;
    }

    private onClickHeader = (header: React.ReactElement<IHeaderProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            header.props.onClick && header.props.onClick(e);
        };
    }

}

export const THead: React.StatelessComponent<ITableProps> = (props) => {

    return(
        <thead className={`THead-component ${styles.thead}`} style={props.style}>
            {props.children}
        </thead>
    );
};

export const TH: React.StatelessComponent<IHeaderProps> = (props) => {

    return(
        <th className={`TH-component ${styles.th}`} style={props.style} onClick={props.onClick}>
            {props.children}
        </th>
    );
};

export const TBody: React.StatelessComponent<ITableProps> = (props) => {

    return(
        <tbody className={`TBody-component ${styles.tbody}`} style={props.style}>
            {props.children}
        </tbody>
    );
};

export const TR: React.StatelessComponent<ITableProps> = (props) => {

    return(
        <tr className={`TR-component ${styles.tr}`} style={props.style}>
            {props.children}
        </tr>
    );
};

export const TD: React.StatelessComponent<ITableProps> = (props) => {

    return(
        <td className={`TD-component ${styles.td}`} style={props.style}>
            {props.children}
        </td>
    );
};
