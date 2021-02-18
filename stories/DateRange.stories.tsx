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
    const [range, setRange] = React.useState({
        endDate: new Date(),
        key: 'selection',
        startDate: new Date()
    });
    return (
        <>
            <GlobalStyle />
            <DateRange {...args} ranges={[range]} onChange={(ranges: { [key: string]: IRangeSelection }) => setRange(ranges.selection)} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {} as IDateRangePickerComponentProps;
