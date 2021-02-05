import { IBoxComponentProps } from '../Box/model';

export interface IExpandableComponentProps extends IBoxComponentProps {
    /** number of the active item or items */
    activeItem?: number | number[] | string | string[];

    /** onclick callback when the item is clicked */
    onClickItem?: (e: React.MouseEvent<HTMLElement>, value?: number | string) => void;

    children?: React.ReactElement<IExpandableItemComponentProps> | Array<React.ReactElement<IExpandableItemComponentProps>>;
}

export interface IExpandableCommonComponentProps extends IBoxComponentProps {
    /** whether the current item is active */
    active?: boolean;
}

export interface IExpandableItemComponentProps extends IBoxComponentProps, IExpandableCommonComponentProps {
    /** identifier for togglin the expanded item */
    activeId?: string | number;
}
