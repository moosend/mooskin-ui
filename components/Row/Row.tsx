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

    col?: number;

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

    const col = props.col ? props.col : 0;

    const getClass = (column: number) => {
        switch (column) {
            case 1:
                return styles.col1;

            case 2:
                return styles.col2;

            case 3:
                return styles.col3;

            case 4:
                return styles.col4;

            case 5:
                return styles.col5;

            case 6:
                return styles.col6;

            case 7:
                return styles.col7;

            case 8:
                return styles.col8;

            case 9:
                return styles.col9;

            case 10:
                return styles.col10;

            case 11:
                return styles.col11;

            case 12:
                return styles.col12;

            default:
                return styles.col;
        }
    };

    const classes = getClass(col);

    return(
        <div className={`col-component ${classes}`}>
            {props.children}
        </div>
    );
};

// export const Col1: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col1}>
//             {props.children}
//         </div>
//     );
// };

// export const Col2: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col2}>
//             {props.children}
//         </div>
//     );
// };

// export const Col3: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col3}>
//             {props.children}
//         </div>
//     );
// };

// export const Col4: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col4}>
//             {props.children}
//         </div>
//     );
// };

// export const Col5: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col5}>
//             {props.children}
//         </div>
//     );
// };

// export const Col6: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col6}>
//             {props.children}
//         </div>
//     );
// };

// export const Col7: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col7}>
//             {props.children}
//         </div>
//     );
// };

// export const Col8: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col8}>
//             {props.children}
//         </div>
//     );
// };

// export const Col9: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col9}>
//             {props.children}
//         </div>
//     );
// };

// export const Col10: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col10}>
//             {props.children}
//         </div>
//     );
// };

// export const Col11: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col11}>
//             {props.children}
//         </div>
//     );
// };

// export const Col12: React.StatelessComponent<IColProps> = (props) => {

//     return(
//         <div className={styles.col12}>
//             {props.children}
//         </div>
//     );
// };
