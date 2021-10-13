import * as React from 'react';

import { Editor } from '@tinymce/tinymce-react';

// Models
import { Editor as TinyMCEEditor } from 'tinymce';
import { IPersonalizationTag, ITextEditorComponentProps } from './model';

/**
 * TextEditor
 */
export const TextEditor: React.FC<ITextEditorComponentProps> = (props) => {
	const getSetup = (editor: TinyMCEEditor) => {
		props.personalizationTags &&
			editor.ui.registry.addMenuButton(props.personalizationTags.id, {
				fetch: (callback) => {
					const items: any =
						props.personalizationTags &&
						props.personalizationTags.tags.map((item: IPersonalizationTag) => {
							return {
								onAction: () => {
									editor.insertContent(item.value);
								},
								text: item.label,
								type: 'menuitem'
							};
						});
					callback(items);
				},
				text: props.personalizationTags.buttonLabel
			});
	};

	const getToolbar = () => {
		if (props.personalizationTags) {
			return `${props.toolbar} | ${props.personalizationTags.id}`;
		}
		return props.toolbar;
	};

	return (
		<Editor
			{...props}
			apiKey="f3vo81k6z7efry5af62a1l5nm882r1dyrqn2df1cugtsofwq"
			toolbar={getToolbar()}
			init={{
				setup: props.personalizationTags ? getSetup : undefined,
				...props.init,
				menubar: props.menubar,
				selector: props.selector
			}}
		/>
	);
};

TextEditor.defaultProps = {
	// className: '',
	disabled: false,
	init: {},
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
            numlist bullist |
            outdent indent |
            blockquote |
            alignleft alignright aligncenter alignjustify |
            bold italic strikethrough underline removeformat |
            formatselect |
            fontselect fontsizeselect forecolor backcolor |
            visualblocks |
            code |`
};

TextEditor.displayName = 'TextEditor';
