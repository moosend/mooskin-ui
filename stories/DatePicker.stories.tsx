import React from 'react';

import { Meta, Story } from '@storybook/react';

import { DatePicker } from '../components/DatePicker/DatePicker';
import { IDatePickerComponentProps } from '../components/DatePicker/model';
import dayjs from 'dayjs';
import '../components/Styled/GlobalStyles';

export default {
	component: DatePicker,
	title: 'Example/DatePicker'
} as any as Meta;

const Template: Story<IDatePickerComponentProps> = (args) => {
	const [date, setDate] = React.useState(dayjs());
	return (
		<>
			{/*<GlobalStyle />*/}
			<DatePicker {...args} value={date} onChange={(value: any) => setDate(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as IDatePickerComponentProps;
