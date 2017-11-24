import * as React from 'react';

import {Loader} from '../index';
import styles from './Grid.css';

export interface IGridProps{

    /** id of the Grid container */
    id?: string;

    /** custom classes for Grid */
    className?: string;

    /** wether the grid should be hidden */
    hidden?: boolean;

    /** custom styles for Grid */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IRowProps>> | React.ReactElement<IRowProps>;

}

export interface IRowProps{

    /** id of the Row container */
    id?: string;

    /** custom classes for Row */
    className?: string;

    /** wether the row should be hidden */
    hidden?: boolean;

    /** custom styles for Row */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IColProps>> | React.ReactElement<IColProps>;

}

export interface IColProps{

    /** id of the Col container */
    id?: string;

    /** custom classes for Col */
    className?: string;

    /** wether the column should be hidden */
    hidden?: boolean;

    /** custom styles for Col */
    style?: React.CSSProperties;

    lg?: number | string;

    md?: number | string;

    sm?: number | string;

    xs?: number | string;

    children?: any;

}

export default class Grid extends React.Component<IGridProps, {}>{

    static defaultProps = {
        className: '',
        style: {}
    };

    static Col: React.StatelessComponent<IColProps>;
    static Row: React.StatelessComponent<IRowProps>;

    render(){

        const hidden = this.props.hidden ? styles.hidden : '';

        return(
            <div
                id={this.props.id}
                className={`grid-component ${styles.grid} ${hidden} ${this.props.className}`}
                style={this.props.style}
            >
                {this.getRows()}
            </div>
        );
    }

    // assignGridChildren = () => {
    //     const rows = this.getRows();
    //     const col
    // }

    getRows = () => {
        const children: Array<React.ReactElement<IRowProps>> | React.ReactElement<IRowProps> = [];
        React.Children.forEach(this.props.children, (row, index) => {
            if (React.isValidElement<IRowProps>(row)){
                const cols = this.getCols(row);
                children.push(
                    <Row
                        key={index}
                        id={row.props.id}
                        className={row.props.className}
                        style={row.props.style}
                    >
                        {cols}
                    </Row>
                );
            }
        });
        return children;
    }

    getCols = (row: React.ReactElement<IRowProps>) => {

        const cols = row.props.children;
        const newCols = this.detectLoaders(cols);
        return newCols;
    }

    detectLoaders = (cols?: Array<React.ReactElement<IColProps>> | React.ReactElement<IColProps>, index?: number) => {

        if (cols){
            if (Array.isArray(cols)){
                const newCols: any = [];
                cols.forEach((col: React.ReactElement<IColProps>, i: number) => {
                    newCols.push(this.detectLoaders(col, i));
                });
                return newCols;
            } else {
                const {loader} = this.getColChildren(cols.props.children);
                const {children} = this.getColChildren(cols.props.children);

                const display = loader ? styles.hiddenContent : styles.showContent;

                return (
                    <Col
                        key={index}
                        className={cols.props.className}
                        style={{...{position: 'relative'}, ...cols.props.style}}
                        xs={cols.props.xs}
                        sm={cols.props.sm}
                        md={cols.props.md}
                        lg={cols.props.lg}
                        id={cols.props.id}
                    >
                        <div className={styles.activeLoader}>
                            {loader}
                        </div>
                        <div className={display}>
                            {children}
                        </div>
                    </Col>
                );
            }
        }
    }

    getColChildren = (childrenArray: any) => {

        let loader;
        const children: any = [];

        if (childrenArray){
            if (Array.isArray(childrenArray)){
                childrenArray.forEach((child) => {
                    if (child.type === Loader && child.props.active){
                        loader = child;
                    } else {
                        children.push(child);
                    }
                });
            } else {
                children.push(childrenArray);
            }
        }

        return {loader, children};
    }

    // getColChildren = (children: any) => {

    //     let loader = '';
    //     let isLoading = false;

    //     if (Array.isArray(children)){
    //         children.map((child: any) => {
    //             if (!isLoading){
    //                 if (child.type === Loader && child.props.active === true){
    //                     isLoading = true;
    //                     console.log('loader active!!');
    //                     loader = child;
    //                 }
    //             }
    //         });
    //     } else {
    //         return children;
    //     }

    //     if (isLoading){
    //         return loader;
    //     } else {
    //         return children;
    //     }
    // }

}

export const Row: React.StatelessComponent<IRowProps> = (props) => {

    const hidden = props.hidden ? styles.hidden : '';

    return(
        <div
            id={props.id}
            className={`row-component ${styles.row} ${hidden} ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

Row.defaultProps = {
    className: '',
    style: {}
};

export const Col: React.StatelessComponent<IColProps> = (props) => {

    const hidden = props.hidden ? styles.hidden : '';

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
                newCol = 'large-' + i;
                return styles[newCol];
            } else if (column === i && name === 'medium'){
                newCol = 'medium-' + i;
                return styles[newCol];
            } else if (column === i && name === 'small'){
                newCol = 'small-' + i;
                return styles[newCol];
            } else if (column === i && name === 'xSmall'){
                newCol = 'xSmall-' + i;
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

    const assembleAvengers = () => {
        if (props.lg || props.md || props.sm || props.xs){
            const lgClass = choosePath(large, 'large') || styles['large-12'];
            const mdClass = choosePath(medium, 'medium') || styles['medium-12'];
            const smClass = choosePath(small, 'small') || styles['small-12'];
            const xsClass = choosePath(xSmall, 'xSmall') || styles['xSmall-12'];
            return `${lgClass} ${mdClass} ${smClass} ${xsClass} ${props.className}`;
        } else{
            const defaultClass = !props.lg && !props.md && !props.sm && !props.xs ? styles.default : '';
            return `${defaultClass} ${props.className}`;
        }
    };

    const classes = assembleAvengers();

    return(
        <div
            id={props.id}
            className={`col-component ${styles.col} ${classes} ${hidden}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

Col.defaultProps = {
    className: '',
    style: {}
};
