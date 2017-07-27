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

    lg?: number | string;

    md?: number | string;

    sm?: number | string;

    xs?: number | string;

    children?: any;

}

export default class Grid extends React.Component<IGridProps, {}>{

    public static Col: React.StatelessComponent<IColProps>;
    public static Row: React.StatelessComponent<IRowProps>;

    public render(){
        return(
            <div
                className={`grid-component ${styles.grid} ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        );
    }
}

export const Row: React.StatelessComponent<IRowProps> = (props) => {

    return(
        <div
            className={`row-component ${styles.row} ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export const Col: React.StatelessComponent<IColProps> = (props) => {

    const large = props.lg || 0;
    const medium = props.md || 0;
    const small = props.sm || 0;
    const xSmall = props.xs || 0;

    const choosePath = (column: number | string, name: string) => {
        if (typeof column === 'string'){
            return getHiddenClass(column, name);
        } else {
            return getClass(column, name);
        }
    };

    const getClass = (column: number | string, name: string) => {
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

    const getHiddenClass = (column: string, name: string) => {
        if (column === 'hidden' && name === 'large'){
            return styles['hidden-lg'];
        } else if (column === 'hidden' && name === 'medium'){
            return styles['hidden-md'];
        } else if (column === 'hidden' && name === 'small'){
            return styles['hidden-sm'];
        } else if (column === 'hidden' && name === 'xSmall'){
            return styles['hidden-xs'];
        }
    };

    const lgClass = choosePath(large, 'large') || '';
    const mdClass = choosePath(medium, 'medium') || '';
    const smClass = choosePath(small, 'small') || '';
    const xsClass = choosePath(xSmall, 'xSmall') || '';

    const defaultClass = lgClass === '' && mdClass === '' && smClass === '' && xsClass === '' ? styles.col : '';
    const classes = `${lgClass} ${mdClass} ${smClass} ${xsClass} ${defaultClass} ${props.className}`;
    // getDefault = () => {
    //     if (lgClass === '' && mdClass === '' && smClass === '' && xsClass === ''){
    //         return styles.col;
    //     } else{
    //         return '';
    //     }
    // }

    return(
        <div
            className={`col-component ${classes}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};
