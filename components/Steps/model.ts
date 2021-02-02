import { IDivBoxComponentProps } from '../Box/model';

export interface IStepsComponentProps extends IDivBoxComponentProps {
    /** number of the active item or items */
    activeItem?: number | string;

    /** onclick callback when the item is clicked */
    onClickStep?: (e: React.MouseEvent<HTMLElement>, value?: number | string) => void;

    children?: React.ReactElement<IStepCommonComponentProps> | Array<React.ReactElement<IStepCommonComponentProps>>;
}

export interface IStepCommonComponentProps extends IDivBoxComponentProps {
    /** whether the current item is active */
    active?: boolean;
}

export interface IStepComponentProps extends IStepCommonComponentProps {
    /** identifier for togglin the Stepbed item */
    activeId?: string | number;

    children?: Array<React.ReactElement<IStepCommonComponentProps>>;
}
