import * as React from 'react';

import styles from './Table.css';

export interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement>{

    /** override Table id */
    id?: string;

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

}

export default class Table extends React.Component<ITableProps, {}> {

    static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    render(){

        return (
            <div>
                <table {...this.props} className={`${styles.table} ${this.props.className}`}>
                    {this.props.children}
                </table>
            </div>
        );
    }
}
