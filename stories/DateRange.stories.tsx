import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { DateRange } from '../components/DateRange/DateRange';

import { IDateRangePickerComponentProps, IRangeSelection } from '../components/DateRange/model';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: DateRange,
    title: 'Example/DateRange'
} as any) as Meta;

const Template: Story<IDateRangePickerComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <DateRange {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    onChange: (ranges: { [key: string]: IRangeSelection }) => console.log(ranges),
    ranges: [
        {
            endDate: new Date(),
            key: 'selection',
            startDate: new Date()
        }
    ]
} as IDateRangePickerComponentProps;
