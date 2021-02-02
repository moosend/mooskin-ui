export interface ITextEditorComponentProps {

    /** id assigned to the editor */
    editorId?: string;

    /** selects different element to attach the editor to */
    selector?: any;

    /** additional plugins to be added to the RTE */
    plugins?: string[];

    /** show/hide the menu bar */
    menubar?: boolean;

    /** makes the editor read only */
    disabled?: boolean;

    /** makes the toolbar and menu bar inline, pops up on text area focus */
    inline?: boolean;

    /** what options should be available in the toolbar */
    toolbar?: string;

    /** initial value of the editor (HTML string) */
    initialValue?: string;

    /** if the return format should be html or text */
    outputFormat?: 'html' | 'text';

    /** value of the editor */
    value?: string;

    /** Only valid when <Editor inline={true} />. Used to define the HTML element for the editor in inline mode. */
    tagName?: string;

    /** Sets the name attribute for the textarea element used for the editor in forms. */
    textareaName?: string;

    /** initialization object */
    init?: {[key: string]: any};

    /** onChange event handler when changing the editor */
    onEditorChange?: (content: string, editor: any) => void;
}
