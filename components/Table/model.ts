import { IDivBoxComponentProps } from '../Box/model';

export interface ITableComponentProps extends IDivBoxComponentProps {
    data: object[] | Element[];

    dragAndDrop?: { pos: number, hoverCb: (dragIndex: number, hoverIndex: number) => void, dropCb: (dragIndex: number) => void };
}

export interface IHeaderProps {

    /** which obj prop should be displayed in this col */
    dataField: string;

    /** wether the row should be sortable or not */
    sortable?: boolean;

    /** determines the direction of the sorting arrow */
    arrowDirection?: 'asc' | 'desc';

    /** custom sort function */
    sortfn?: any;

    children?: any;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IColProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IRowProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    dragAndDrop?: { pos: number, hoverCb: (dragIndex: number, hoverIndex: number) => void, dropCb: (dragIndex: number) => void };
}
