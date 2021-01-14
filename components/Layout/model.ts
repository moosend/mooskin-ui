import { IDivBoxComponentProps } from '../Box/model';

export interface ILayoutComponentProps extends IDivBoxComponentProps {
    /** number of cols in a Layout */
    cols?: number;

    /** spacing between blocks */
    spacing?: number;
}
