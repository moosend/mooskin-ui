import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {
	Input,
	InputContainer,
	InputEmoji,
	InputIcon,
	InputOption,
	InputOptionList,
	InputOptionListTitle,
} from '../components/Input/Input';
import { IInputContainerComponentProps } from '../components/Input/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import { Box } from '../components/Box/Box';

import { Box } from '../components/Box/Box';
import { Description } from '../components/Description/Description';
import { Label } from '../components/Label/Label';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Input,
	title: 'Example/Input',
} as any) as Meta;

const Template: Story<IInputContainerComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Box d="flex" {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<InputContainer
				dataLabel="Input"
				onChangeInput={(e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => console.log(data)}
				value="Input"
			>
				<Input />
				<InputOptionList icon="check">
					<InputOptionListTitle>Personalization Tags</InputOptionListTitle>
					<InputOption value="tag1">Tag 1</InputOption>
					<InputOption value="tag2">Tag 2</InputOption>
					<InputOption value="tag3">Tag 3</InputOption>
				</InputOptionList>
				<InputEmoji />
				<InputIcon>search</InputIcon>
			</InputContainer>
		</>
	),
} as IInputContainerComponentProps;

export const WithLabel = Template.bind({});
WithLabel.args = {
	children: (
		<>
			<Label>Some Field:</Label>
			<Input autoFocus />
		</>
	),
} as IInputContainerComponentProps;

export const WithDescription = Template.bind({});
WithDescription.args = {
	children: (
		<>
			<Input placeholder="With description..." />
			<Description>Description goes here</Description>
		</>
	),
	d: 'block',
} as IInputContainerComponentProps;
