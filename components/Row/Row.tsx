import * as React from 'react';

import styles from './Row.css';

export interface IRowProps{

    /** custom classes for Row */
    className?: string;

    /** custom styles for Row */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IColProps>> | React.ReactElement<IColProps>;

}

export interface IColProps{

    /** custom classes for Col */
    className?: string;

    /** custom styles for Col */
    style?: React.CSSProperties;

    children?: any;

}

export default class Row extends React.Component<IRowProps, {}>{

    public static Col: React.StatelessComponent<{}>;

    public render(){
        return(
            <div className={`row-component ${styles.row}`}>
                {this.props.children}
            </div>
        );
    }
}

export const Col: React.StatelessComponent<IColProps> = (props) => {

    return(
        <div className={styles.col}>
            {props.children}
        </div>
    );
};
