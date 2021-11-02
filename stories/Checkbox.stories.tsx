import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Checkbox, CheckboxDescription, CheckboxIcon, CheckboxLabel } from '../components/Checkbox/Checkbox';
import { ICheckboxComponentProps } from '../components/Checkbox/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Checkbox,
	title: 'Example/Checkbox'
} as any) as Meta;

const Template: Story<ICheckboxComponentProps> = (args) => {
	const [value, setValue] = React.useState(false);
	return (
		<>
			<GlobalStyle />
			<Checkbox
				checked={value}
				{...args}
				onClickCheckbox={(e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => setValue(data.value)}
			/>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: <CheckboxLabel>Normal Checkbox</CheckboxLabel>
} as ICheckboxComponentProps;

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
	children: <CheckboxLabel>Checked Checkbox</CheckboxLabel>
} as ICheckboxComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	children: <CheckboxLabel>Disabled Checkbox</CheckboxLabel>,
	disabled: true
} as ICheckboxComponentProps;

export const Description = Template.bind({});
Description.args = {
	children: (
		<Box>
			<CheckboxLabel onClick={() => alert('Label Clicked!')}>Checkbox</CheckboxLabel>
			<CheckboxDescription>Checkbox description goes here</CheckboxDescription>
		</Box>
	)
} as ICheckboxComponentProps;

export const CustomButton = Template.bind({});
CustomButton.args = {
	children: (
		<>
			<CheckboxIcon fontColor="red" />
			<Box>
				<CheckboxLabel>Checkbox</CheckboxLabel>
				<CheckboxDescription>Checkbox description goes here</CheckboxDescription>
			</Box>
		</>
	),
	onClick: (e: React.MouseEvent<HTMLElement>) => console.log(e)
} as ICheckboxComponentProps;
