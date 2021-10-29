import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ITextEditorComponentProps } from '../components/TextEditor/model';
import { TextEditor } from '../components/TextEditor/TextEditor';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: TextEditor,
	title: 'Example/TextEditor'
} as any) as Meta;

const Template: Story<ITextEditorComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<TextEditor {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	onEditorChange: (content, editor) => console.log(content)
} as ITextEditorComponentProps;

export const WithMenu = Template.bind({});
WithMenu.args = {
	menubar: true
} as ITextEditorComponentProps;

export const Inline = Template.bind({});
Inline.args = {
	inline: true
} as ITextEditorComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true
} as ITextEditorComponentProps;

export const WithPersonalizationTags = Template.bind({});
WithPersonalizationTags.args = {
	personalizationTags: {
		buttonLabel: 'My Tags',
		id: 'personalizationTags',
		tags: [
			{ label: 'Tag 1', value: '#tag1#' },
			{ label: 'Tag 2', value: '#tag2#' },
			{ label: 'Tag 3', value: '#tag3#' },
			{ label: 'Tag 4', value: '#tag4#' },
			{ label: 'Tag 5', value: '#tag5#' },
			{ label: 'Tag 6', value: '#tag6#' }
		]
	}
} as ITextEditorComponentProps;
