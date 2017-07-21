import * as React from 'react';

import styles from './Table.css';

export interface ITableProps {

    /** override Table id */
    id?: string;

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

}

export default class Table extends React.Component<ITableProps, {}> {

    public static defaultProps: Partial<ITableProps> = {
        className: '',
        style: {}
    };

    public render(){

        return (
            <div>
                <table className={`${styles.table} ${this.props.className}`} style={this.props.style}>
                    {this.props.children}
                </table>
            </div>
        );
    }
}
