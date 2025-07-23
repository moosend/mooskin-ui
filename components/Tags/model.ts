import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';

export interface ITagsComponentProps extends IBoxComponentProps {
	/** what data is being used, helps whn extracting user input, you know on what field changes are made */
	dataLabel?: string;

	/** limits max tags */
	limit?: number;

	onAddTag?: (data: IInputCallbackData) => void;

	onRemoveTag?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, data: number | IInputCallbackData) => void;

	onClickTag?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

	validateTag?: (tag: string) => boolean;
}

export interface ITagComponentProps extends IInputBoxComponentProps {
	/** whether to show the remove icon */
	removeIcon?: boolean;
}

export interface ITagsInputComponentProps extends IInputBoxComponentProps {
	/** an array of possible delimiters, enter key is the default delimiter */
	delimiters?: Array<string | number>;

	onAddTag?: (value: string | string[]) => void;

	onRemoveTag?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, data: number | IInputCallbackData) => void;

	onClickTag?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}
