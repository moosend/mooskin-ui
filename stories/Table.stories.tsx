import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Table, TableHeader, TableHeaderItem, TableRow, TableRowItem } from '../components/Table/Table';

import { IBoxComponentProps } from '../components/Box/model';
import { Checkbox } from '../components/Checkbox/Checkbox';
import '../components/Styled/GlobalStyles';

export default {
	component: Table,
	title: 'Example/Table'
} as any as Meta;

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Table {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<TableHeader>
				<TableHeaderItem flex={2} justify="center">
					<Checkbox onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)} />
				</TableHeaderItem>
				<TableHeaderItem flex={8}>Mailing list name</TableHeaderItem>
				<TableHeaderItem flex={3}>SEGMENTS</TableHeaderItem>
				<TableHeaderItem flex={3}>Change (last day)</TableHeaderItem>
				<TableHeaderItem flex={3}>Active recipients</TableHeaderItem>
				<TableHeaderItem flex={3}>Tags</TableHeaderItem>
				<TableHeaderItem flex={2} />
			</TableHeader>
			<TableRow>
				<TableRowItem flex={2} justify="center">
					<Checkbox fontColor="grey" onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)} />
				</TableRowItem>
				<TableRowItem flex={8}>Main mailing list #1</TableRowItem>
				<TableRowItem flex={3}>2</TableRowItem>
				<TableRowItem flex={3}>+12</TableRowItem>
				<TableRowItem flex={3}>124,543</TableRowItem>
				<TableRowItem flex={3}>Tags component!</TableRowItem>
				<TableRowItem flex={2}>Actions</TableRowItem>
			</TableRow>
			<TableRow>
				<TableRowItem flex={2} justify="center">
					<Checkbox fontColor="grey" onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)} />
				</TableRowItem>
				<TableRowItem flex={8}>Main mailing list #2</TableRowItem>
				<TableRowItem flex={3}>3</TableRowItem>
				<TableRowItem flex={3}>+7</TableRowItem>
				<TableRowItem flex={3}>80,000</TableRowItem>
				<TableRowItem flex={3}>Tags component!</TableRowItem>
				<TableRowItem flex={2}>Actions</TableRowItem>
			</TableRow>
		</>
	)
} as IBoxComponentProps;
