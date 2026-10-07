import { IAllProps } from '@tinymce/tinymce-react';

export interface ITextEditorComponentProps extends Partial<IAllProps> {
	onInit?: any;

	/** selects different element to attach the editor to */
	selector?: any;

	/** class on the editor element */
	className?: string;

	/** show/hide the menu bar */
	menubar?: boolean;

	/** keep the toolbar visible while scrolling */
	toolbar_sticky?: boolean;

	/** TinyMCE toolbar mode, for example floating or sliding */
	toolbar_mode?: string;

	/** allow the editor to be resized */
	resize?: boolean;

	/** minimum editor width in pixels */
	min_width?: number;

	/** personalization tags custom dropdown */
	personalizationTags?: {
		buttonLabel: string;
		id: string;
		tags: IPersonalizationTag[];
	};
}

export interface IPersonalizationTag {
	label: string;
	value: string;
}
