import * as React from 'react';

import styles from './Grid.css';

export interface IGridProps{

    /** custom classes for Grid */
    className?: string;

    /** custom styles for Grid */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IRowProps>> | React.ReactElement<IRowProps>;

}

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

    lg?: number;

    md?: number;

    sm?: number;

    xs?: number;

    children?: any;

}

export default class Grid extends React.Component<IGridProps, {}>{

    public static Col: React.StatelessComponent<{}>;
    public static Row: React.StatelessComponent<{}>;

    public render(){
        return(
            <div className={`grid-component ${styles.grid}`}>
                {this.props.children}
            </div>
        );
    }
}

export const Row: React.StatelessComponent<IRowProps> = (props) => {

    return(
        <div className={`row-component ${styles.row}`}>
            {props.children}
        </div>
    );
};

export const Col: React.StatelessComponent<IColProps> = (props) => {

    const large = props.lg ? props.lg : 0;
    const medium = props.md ? props.md : 0;
    const small = props.sm ? props.sm : 0;
    const xSmall = props.xs ? props.xs : 0;

    const getClass = (column: number, name: string) => {
        let newCol = '';
        for (let i = 1 ; i <= column; i++){
            if (column === i && name === 'large'){
                newCol = 'col-lg-' + i;
                return styles[newCol];
            } else if (column === i && name === 'medium'){
                newCol = 'col-md-' + i;
                return styles[newCol];
            } else if (column === i && name === 'small'){
                newCol = 'col-sm-' + i;
                return styles[newCol];
            } else if (column === i && name === 'xSmall'){
                newCol = 'col-xs-' + i;
                return styles[newCol];
            }
        }
    };

    const lgClass = getClass(large, 'large') || '';
    const mdClass = getClass(medium, 'medium') || '';
    const smClass = getClass(small, 'small') || '';
    const xsClass = getClass(xSmall, 'xSmall') || '';

    const defaultClass = lgClass === '' && mdClass === '' && smClass === '' && xsClass === '' ? styles.col : '';

    // getDefault = () => {
    //     if (lgClass === '' && mdClass === '' && smClass === '' && xsClass === ''){
    //         return styles.col;
    //     } else{
    //         return '';
    //     }
    // }

    return(
        <div className={`col-component ${lgClass} ${mdClass} ${smClass} ${xsClass} ${defaultClass}`}>
            {props.children}
        </div>
    );
};
