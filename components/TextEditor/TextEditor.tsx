import * as React from 'react';

import { Editor } from '@tinymce/tinymce-react';

// Models
// import { Editor as TinyMCEEditor } from 'tinymce';
import { IPersonalizationTag, ITextEditorComponentProps } from './model';

/**
 * TextEditor
 */
export const TextEditor: React.FC<ITextEditorComponentProps> = ({
	disabled = false,
	init = {},
	inline = false,
	menubar = false,
	plugins = [
		'lists',
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
	toolbar = `newdocument |
            undo redo |
            cut copy paste pastetext |
            link unlink openlink anchor |
            numlist bullist |
            outdent indent |
            blockquote |
            alignleft alignright aligncenter alignjustify |
            bold italic strikethrough underline removeformat |
            formatselect |
            fontselect fontsizeselect forecolor backcolor |
            visualblocks |
            code |`,
	...props
}) => {
	const editorRef = React.useRef<any>(null);
	const onInit = (evt: any, editor: any) => {
		editorRef.current = editor; // Store editor instance
		props.onInit && props.onInit(editor);
	};

	const getSetup = (editor: any) => {
		if (props.personalizationTags && editorRef.current) {
			editorRef.current.ui.registry.addMenuButton(props.personalizationTags.id, {
				fetch: (callback: any) => {
					const items = props.personalizationTags
						? props.personalizationTags.tags.map((item: IPersonalizationTag) => ({
								onAction: () => {
									editor.insertContent(item.value);
								},
								text: item.label,
								type: 'menuitem'
						  }))
						: [];
					callback(items);
				},
				text: props.personalizationTags.buttonLabel
			});
		}
	};

	const getToolbar = () => {
		if (props.personalizationTags) {
			return `${toolbar ?? ''} | ${props.personalizationTags.id}`;
		}
		return toolbar;
	};

	return (
		<Editor
			{...props}
			apiKey="f3vo81k6z7efry5af62a1l5nm882r1dyrqn2df1cugtsofwq"
			toolbar={getToolbar()}
			onInit={onInit}
			init={{
				setup: (editor: any) => getSetup(editor),
				...init,
				menubar: menubar,
				selector: props.selector,
				toolbar: toolbar,
				plugins: plugins
			}}
		/>
	);
};

TextEditor.displayName = 'TextEditor';
