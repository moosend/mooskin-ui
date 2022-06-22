import { IAllProps } from '@tinymce/tinymce-react';

export interface ITextEditorComponentProps extends Partial<IAllProps> {
	onInit?: any;

	/** selects different element to attach the editor to */
	selector?: any;

	/** show/hide the menu bar */
	menubar?: boolean;

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
