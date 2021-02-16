import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { DatePicker } from '../components/DatePicker/DatePicker';
import { IDatePickerComponentProps } from '../components/DatePicker/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: DatePicker,
    title: 'Example/DatePicker'
} as any) as Meta;

const Template: Story<IDatePickerComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <DatePicker {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    onChange: (date: any) => console.log(date),
    value: new Date()
} as IDatePickerComponentProps;
