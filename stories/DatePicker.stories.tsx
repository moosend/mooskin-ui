import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { DatePicker } from '../components/DatePicker/DatePicker';
import { DatePickerValue, IDatePickerComponentProps } from '../components/DatePicker/model';
import '../components/Styled/GlobalStyles';

export default {
	component: DatePicker,
	title: 'Example/DatePicker'
};

const Template: Story<IDatePickerComponentProps> = (args) => {
	const [date, setDate] = React.useState<DatePickerValue>(new Date());
	return (
		<>
			{/*<GlobalStyle />*/}
			<DatePicker {...args} value={date} onChange={(value) => setDate(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as IDatePickerComponentProps;
