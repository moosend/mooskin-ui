import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ActionsDropdown, ActionsDropdownArrow, ActionsDropdownItem } from '../components/ActionsDropdown/ActionsDropdown';
import { IActionsDropdownComponentProps } from '../components/ActionsDropdown/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import GlobalStyle from '../components/Styled/GlobalStyles';
import '../components/Styled/GlobalStyles.css';

export default ({
	component: ActionsDropdown,
	title: 'Example/ActionsDropdown'
} as any) as Meta;

const Template: Story<IActionsDropdownComponentProps> = (args) => {
	return (
		<>
			<ActionsDropdown {...args} onClickItem={(e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)} />
			{/* <GlobalStyle /> */}
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<ActionsDropdownItem dataLabel="settings" value="settings" onClick={() => alert('Random on Click!')}>
				Settings
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
				Duplicate
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="preview" value="preview">
				Preview
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="settings" value="settings" onClick={() => alert('Random on Click!')}>
				Settings 1
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
				Duplicate 1
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="preview" value="preview">
				Preview 1
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="settings" value="settings" onClick={() => alert('Random on Click!')}>
				Settings 2
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
				Duplicate 2
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="preview" value="preview">
				Preview 2
			</ActionsDropdownItem>
		</>
	),
	isOpen: true
} as IActionsDropdownComponentProps;

export const BottomArrow = Template.bind({});
BottomArrow.args = {
	children: (
		<>
			<ActionsDropdownArrow right="unset" left={22} bottom={-6} top="unset" />
			<ActionsDropdownItem dataLabel="settings" value="settings">
				Settings
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
				Duplicate
			</ActionsDropdownItem>
			<ActionsDropdownItem dataLabel="preview" value="preview">
				Preview
			</ActionsDropdownItem>
		</>
	),
	isOpen: true
} as IActionsDropdownComponentProps;
