import * as React from 'react';

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

    static displayName = 'Grid';

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
                {this.props.children}
            </div>
        );
    }

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

Row.displayName = 'Row';

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
            const lgClass = choosePath(large, 'large') || /* styles['large-12'] */ styles.default;
            const mdClass = choosePath(medium, 'medium') || /* styles['medium-12'] */ styles.default;
            const smClass = choosePath(small, 'small') || /* styles['small-12'] */ styles.default;
            const xsClass = choosePath(xSmall, 'xSmall') || /* styles['xSmall-12'] */ styles.default;
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

Col.displayName = 'Col';
