import { IDivBoxComponentProps, IInputBoxComponentProps } from '../Box/model';

import { IInputCallbackData } from '../index';

export interface ISelectComponentProps extends IDivBoxComponentProps {

    /** Callback that fires when you click on an option on the list */
    onChangeSelect?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** to specify which value is selected, has to be one of the option values */
    selectedValue?: string | number | Array<string | number>;

    /** control whether to show the Options list */
    showList?: boolean;

    /** disables this Select */
    disabled?: boolean;
}

export interface ISelectFilterComponentProps extends IInputBoxComponentProps {
    /** onchange event handler when the filter value changes */
    onChangeFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelectOptionComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the component */
    onClickOption?: (e: React.MouseEvent<HTMLElement>, value: string) => void;

    /** value for this option */
    value: string;

    /** filters according to this when available (so Option children can be elements) */
    searchLabel?: string;

    /** disables this option */
    disabled?: boolean;
}

export interface ISelectIconComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the icon */
    onClickIcon?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ISelectOverlayComponentProps extends IDivBoxComponentProps {
    /** onclick event handler when clicking on the icon */
    onClickOverlay?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ISelectPaginationComponentProps extends IDivBoxComponentProps {
    /** current page value */
    page: number;

    /** onclick event handler when clicking on a pagination icon */
    onClickPagination?: (e: React.MouseEvent<HTMLElement>, page: number) => void;
}
