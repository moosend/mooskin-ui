export interface IGridProps {
    /** id of the Grid container */
    id?: string;

    /** custom classes for Grid */
    className?: string;

    /** custom styles for Grid */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IRowProps>> | React.ReactElement<IRowProps>;
}

export interface IRowProps {
    /** id of the Row container */
    id?: string;

    /** custom classes for Row */
    className?: string;

    /** custom styles for Row */
    style?: React.CSSProperties;

    children?: Array<React.ReactElement<IColProps>> | React.ReactElement<IColProps>;
}

export type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IColWidths {
    lg?: ColWidth | 'hidden';
    md?: ColWidth | 'hidden';
    sm?: ColWidth | 'hidden';
    xs?: ColWidth | 'hidden';
}

export interface IColProps extends IColWidths {
    /** id of the Col container */
    id?: string;

    /** custom classes for Col */
    className?: string;

    /** custom styles for Col */
    style?: React.CSSProperties;

    children?: any;
}
