import { IBoxComponentProps } from '../Box/model';

import { IInputCallbackData } from '../index';

export interface ISelectComponentProps extends IBoxComponentProps {

    /** Callback that fires when you click on an option on the list */
    onChange?: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** to specify which value is selected, has to be one of the option values */
    selected?: string | number | Array<string | number>;

    /** loading indicator */
    isLoading?: boolean;

    /** control whether to show the Options list */
    showList?: boolean;

    /** select description (small italic bottom) */
    description?: string;

    /** disables this Select */
    disabled?: boolean;

    /** status of the select, error or success */
    status?: 'error' | 'success';

    /** children here can only be Option elements */
    children?: Array<React.ReactElement<ISelectOptionComponentProps>> | React.ReactElement<ISelectOptionComponentProps> | JSX.Element[];
}

export interface ISelectFilterComponentProps extends IBoxComponentProps {
    /** onchange event handler when the filter value changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelectOptionComponentProps extends IBoxComponentProps {
    /** onclick event handler when clicking on the component */
    onClick?: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;

    /** value for this option */
    value: string;

    /** filters according to this when available (so Option children can be elements) */
    searchLabel?: string;

    /** disables this option */
    disabled?: boolean;

    /** children must be a string */
    children?: string | JSX.Element;
}

export interface ISelectIconComponentProps extends IBoxComponentProps {
    /** onclick event handler when clicking on the icon */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ISelectPaginationComponentProps extends IBoxComponentProps {
    /** current page value */
    page: number;

    /** onclick event handler when clicking on a pagination icon */
    onClick?: (e: React.MouseEvent<HTMLDivElement>, page: number) => void;
}
