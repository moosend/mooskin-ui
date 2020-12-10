import { IStackComponentProps } from '../Stack/model';

export interface IListComponentProps extends IStackComponentProps {
    /** number of cols in a list */
    cols?: number;
}
