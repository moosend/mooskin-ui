import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISelectComponentProps } from '../components/Select/model';
import {
	Select,
	SelectContainer,
	SelectFilter,
	SelectIcon,
	SelectLoader,
	SelectOption,
	SelectOptionList,
	SelectOverlay,
	SelectPagination,
	SelectPlaceholder,
} from '../components/Select/Select';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Select,
	title: 'Example/Select',
} as any) as Meta;

const Template: Story<ISelectComponentProps> = (args) => {
	const [selected, setSelected] = React.useState('');
	return (
		<>
			<GlobalStyle />
			<Select
				selectedValue={selected}
				{...args}
				onChangeSelect={(e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => setSelected(data.value)}
			/>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<SelectContainer>
				<SelectPlaceholder>Select an option</SelectPlaceholder>
			</SelectContainer>
			<SelectOptionList>
				<SelectOption onClick={(e) => console.log('Option clicked!')} value="1">
					Option 1
				</SelectOption>
				<SelectOption value="2">Option 2</SelectOption>
				<SelectOption value="3">Option 3</SelectOption>
				<SelectOption value="4">Option 4</SelectOption>
				<SelectOption value="5">Option 5</SelectOption>
			</SelectOptionList>
		</>
	),
	dataLabel: 'Select',
	selectedValue: '2',
} as ISelectComponentProps;

export const Multi = Template.bind({});
Multi.args = {
	children: (
		<>
			<SelectContainer>
				<SelectPlaceholder>Select multiple options</SelectPlaceholder>
			</SelectContainer>
			<SelectOptionList>
				<SelectOption onClick={(e) => console.log('Option clicked!')} value="1">
					Option 1
				</SelectOption>
				<SelectOption value="2">Option 2</SelectOption>
				<SelectOption value="3">Option 3</SelectOption>
				<SelectOption value="4">Option 4</SelectOption>
				<SelectOption value="5">Option 5</SelectOption>
			</SelectOptionList>
		</>
	),
	dataLabel: 'Select',
	selectedValue: ['2', '4'],
} as ISelectComponentProps;

export const WithPagination = Template.bind({});
WithPagination.args = {
	children: (
		<>
			<SelectContainer>
				<SelectPlaceholder>Select an option</SelectPlaceholder>
			</SelectContainer>
			<SelectOptionList>
				<SelectOption onClick={(e) => console.log('Option clicked!')} value="1">
					Option 1
				</SelectOption>
				<SelectOption value="2">Option 2</SelectOption>
				<SelectOption value="3">Option 3</SelectOption>
				<SelectOption value="4">Option 4</SelectOption>
				<SelectOption value="5">Option 5</SelectOption>
				<SelectOption value="6">Option 6</SelectOption>
				<SelectOption value="7">Option 7</SelectOption>
				<SelectOption value="8">Option 8</SelectOption>
				<SelectOption value="9">Option 9</SelectOption>
				<SelectOption value="10">Option 10</SelectOption>
				<SelectPagination page={2} onClickPagination={(e, page) => console.log('Pagination Clicked: ', page)} />
			</SelectOptionList>
		</>
	),
	dataLabel: 'Select',
} as ISelectComponentProps;

export const CustomElements = Template.bind({});
CustomElements.args = {
	children: (
		<>
			<SelectContainer>
				<SelectPlaceholder>Select an option</SelectPlaceholder>
				<SelectFilter
					fontColor="red"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log('On Filter Change: ', e.target.value)}
				/>
				<SelectLoader />
				<SelectIcon fontColor="red" />
			</SelectContainer>
			<SelectOptionList>
				<SelectOption onClick={(e) => console.log('Option clicked!')} value="1">
					Option 1
				</SelectOption>
				<SelectOption value="2">Option 2</SelectOption>
				<SelectOption value="3">Option 3</SelectOption>
				<SelectOption value="4">Option 4</SelectOption>
				<SelectOption value="5">Option 5</SelectOption>
				<SelectPagination page={2} onClickPagination={(e, page) => console.log('Pagination Clicked: ', page)} />
			</SelectOptionList>
			<SelectOverlay bgColor="rgba(0, 0, 0, 0.1)" />
		</>
	),
	dataLabel: 'Select',
	showList: true,
} as ISelectComponentProps;
