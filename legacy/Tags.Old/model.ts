import { IDivBoxComponentProps } from '../../components/Box/model';
import { IInputCallbackData } from '../../components/index/index';

export interface ITagsComponentProps extends IDivBoxComponentProps{
    /** tagged data */
    tags: string[];

    /** tags that are active e.g. used in filters */
    activeTags?: string[];

    /** validate input wether it should accept emails or add a custom validation */
    validateTag?: 'email' | ((tag: string) => boolean);

    /** wether the tags should be deletable by backspace */
    deletable?: boolean;

    /** prevent submit on input blur */
    preventSubmit?: boolean;

    /** error message when invalid input type is passed */
    errorMessage?: string;

    /** an array of possible delimiters, enter key is the default delimiter */
    delimiters?: Array<string | number>;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    onAdd?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => string [] | void;

    onRemove?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData, index: number) => string [] | void;

    onTagClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData, index: number) => void;
}

export interface ITagComponentProps extends IDivBoxComponentProps {
    /** children */
    children?: string;

    /** applies active classes to tag */
    active?: boolean;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    onClickRemove?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ITagsInputComponentProps extends IDivBoxComponentProps {
    /** input field placehonder */
    placeholder?: string;

    /** source of data for type ahead completion */
    source?: (() => Promise<string[]>) | (() => string[]) | string[];

    /** limit number of items available on the source list */
    sourceLimit?: number;

    /** maximum number of characters allowed */
    maxLength?: number;
}
