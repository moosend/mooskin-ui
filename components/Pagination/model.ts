import { IBoxComponentProps } from '../Box/model';

export interface IPaginationComponentProps extends IBoxComponentProps {
    /** number of the active button page */
    activePage: number;

    /** onclick callback when the button is clicked */
    onClickButton?: (e: React.MouseEvent<HTMLElement>, value: number) => void;

    children?: React.ReactElement<IPaginationButtonComponentProps> | Array<React.ReactElement<IPaginationButtonComponentProps>>;
}

export interface IPaginationButtonComponentProps extends IBoxComponentProps {
    /** whether the current button is active */
    active?: boolean;
}
