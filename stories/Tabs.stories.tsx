import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ITabsComponentProps } from '../components/Tabs/model';
import { Tab, TabContent, TabHeader, Tabs } from '../components/Tabs/Tabs';

import '../components/Styled/GlobalStyles';

export default {
	component: Tabs,
	title: 'Example/Tabs'
} as any as Meta;

const Template: Story<ITabsComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Tabs {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	activeItem: 4,
	children: [...Array(9)].map((item, i) => {
		return (
			<Tab key={i} activeId={i}>
				<TabHeader>{`Item: ${i}`}</TabHeader>
				<TabContent p={15}>
					<div>{`Content for item with index: ${i}`}</div>
				</TabContent>
			</Tab>
		);
	}),
	onClickTab: (e: React.MouseEvent<HTMLElement>, value: number) => console.log(e, value)
} as ITabsComponentProps;
