import { IDivBoxComponentProps } from '../Box/model';

export interface IStackComponentProps extends IDivBoxComponentProps {
    /** Divider element added between children */
    divider?: React.ReactElement;

    /** The space between each stack item */
    spacing?: number | string;

    /** Stack children */
    // children: JSX.Element | React.ReactElement<any> | JSX.Element[] | React.ReactElement[];
    children?: any;
}
