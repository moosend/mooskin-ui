import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { DateSelect } from '../components/DateSelect/DateSelect';
import { IDateSelectComponentProps } from '../components/DateSelect/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: DateSelect,
	title: 'Example/DateSelect'
} as any) as Meta;

const Template: Story<IDateSelectComponentProps> = (args) => {
	const [value, setValue] = React.useState('');
	return (
		<>
			<GlobalStyle />
			<DateSelect
				{...args}
				selectedValue={value}
				onChangeSelect={(e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => setValue(data.value)}
			/>
		</>
	);
};

export const TwelveHour = Template.bind({});
TwelveHour.args = {
	dataLabel: 'DateSelect',
	format: '12-Hour',
	// selectedValue: 0,
	type: 'hour'
} as IDateSelectComponentProps;

export const TwentyFourHour = Template.bind({});
TwentyFourHour.args = {
	dataLabel: 'DateSelect',
	format: '24-Hour',
	// selectedValue: 0,
	type: 'hour'
} as IDateSelectComponentProps;

export const Minute = Template.bind({});
Minute.args = {
	dataLabel: 'DateSelect',
	// selectedValue: 0,
	type: 'minute'
} as IDateSelectComponentProps;

export const DayOfMonth = Template.bind({});
DayOfMonth.args = {
	dataLabel: 'DateSelect',
	format: '1',
	// selectedValue: 0,
	type: 'month'
} as IDateSelectComponentProps;

export const Week = Template.bind({});
Week.args = {
	dataLabel: 'DateSelect',
	// selectedValue: 0,
	type: 'week'
} as IDateSelectComponentProps;

export const Ordinal = Template.bind({});
Ordinal.args = {
	dataLabel: 'DateSelect',
	// selectedValue: 0,
	type: 'ordinal'
} as IDateSelectComponentProps;
