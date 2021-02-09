import { IBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index/index';

export interface ITagsComponentProps extends IBoxComponentProps {
    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    onAddTag?: (data: IInputCallbackData) => void;

    onRemoveTag?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    onClickTag?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ITagsInputComponentProps extends IInputBoxComponentProps {
    /** an array of possible delimiters, enter key is the default delimiter */
    delimiters?: Array<string | number>;

    onAddTag?: (value: string | string[]) => void;
}