import * as React from 'react';

import { Editor } from '@tinymce/tinymce-react';

// Models
import { ITextEditorComponentProps } from './model';

// Styled Components
// import {  } from './styles';

/**
 * TextEditor
 */
export const TextEditor: React.FC<ITextEditorComponentProps> = (props) => {
    return (
        <Editor
            {...props}
            id={props.editorId}
            apiKey="f3vo81k6z7efry5af62a1l5nm882r1dyrqn2df1cugtsofwq"
            init={{
                ...props.init,
                // content_style: ``,
                menubar: props.menubar,
                selector: props.selector
            }}
        />
    );
};

TextEditor.defaultProps = {
    // className: '',
    disabled: false,
    inline: false,
    menubar: false,
    plugins: [
        'lists advlist',
        'anchor',
        'autolink',
        'autoresize',
        'charmap',
        'code codesample',
        'directionality',
        'emoticons',
        'fullscreen',
        'help',
        'hr',
        'image imagetools',
        'insertdatetime',
        'link',
        'nonbreaking',
        'paste',
        'preview',
        'print',
        'quickbars',
        'searchreplace',
        'table',
        // 'template',
        'toc',
        'visualblocks',
        'wordcount'
    ],
    // style: {},
    // toolbar: `bullist numlist | emoticons | code | image | anchor link | paste pastetext |
    // `
    toolbar: `newdocument |
            undo redo |
            cut copy paste pastetext |
            link unlink openlink anchor |
            numlist bulllist |
            outdent indent |
            blockquote |
            alignleft alignright aligncenter alignjustify |
            bold italic strikethrough underline removeformat |
            formatselect |
            fontselect fontsizeselect forecolor backcolor |
            visualblocks |
            code`
};

TextEditor.displayName = 'TextEditor';

export default TextEditor;
