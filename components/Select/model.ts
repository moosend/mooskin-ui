import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';

export interface ISelectComponentProps extends IBoxComponentProps {
	/** Callback that fires when you click on an option on the list */
	onChangeSelect?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;

	/** to specify which value is selected, has to be one of the option values */
	selectedValue?: string | number | Array<string | number>;

	/** disables this Select */
	disabled?: boolean;

	hideMobileSearch?: boolean;
}

export interface ISelectOptionListProps extends IBoxComponentProps {
	/** control whether to show the Options list */
	showList?: boolean;
}

export interface ISelectFilterComponentProps extends IInputBoxComponentProps {
	/** onchange event handler when the filter value changes */
	onChangeFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelectOptionComponentProps extends IBoxComponentProps {
	/** value for this option */
	value: string;

	/** filters according to this when available (so Option children can be elements) */
	searchLabel?: string;

	/** disables this option */
	disabled?: boolean;
}

export interface ISelectPaginationComponentProps extends IBoxComponentProps {
	/** current page value */
	page: number;

	/** onclick event handler when clicking on a pagination icon */
	onClickPagination?: (e: React.MouseEvent<HTMLElement>, page: number) => void;
}
