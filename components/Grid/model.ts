import { IDivBoxComponentProps } from '../Box/model';

export interface IGridProps extends IDivBoxComponentProps {
    children?: Array<React.ReactElement<IRowProps>> | React.ReactElement<IRowProps>;
}

export interface IRowProps extends IDivBoxComponentProps {
    children?: Array<React.ReactElement<IColProps>> | React.ReactElement<IColProps>;
}

export type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IColWidths {
    lg?: ColWidth | 'hidden';
    md?: ColWidth | 'hidden';
    sm?: ColWidth | 'hidden';
    xs?: ColWidth | 'hidden';
}

export interface IColProps extends IColWidths, IDivBoxComponentProps {
    children?: any;
}
