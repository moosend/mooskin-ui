import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ActionsDropdown, ActionsDropdownArrow, ActionsDropdownItem } from '../components/ActionsDropdown/ActionsDropdown';
import { IActionsDropdownComponentProps } from '../components/ActionsDropdown/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import '../components/Styled/GlobalStyles';
// import { GlobalStyle } from '../components/Styled/GlobalStyles';

export default {
	component: ActionsDropdown,
	title: 'Example/ActionsDropdown'
} as any as ComponentMeta<typeof ActionsDropdown>;

const Template: ComponentStory<typeof ActionsDropdown> = (args) => {
	return (
		<>
			<ActionsDropdown {...args} onClickItem={(e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<ActionsDropdownItem className="LALALA" dataLabel="settings" value="settings" onClick={() => alert('Random on Click!')}>
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
