import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { DateTimePicker } from '../components/DateTimePicker/DateTimePicker';
import { IDateTimePickerComponentProps } from '../components/DateTimePicker/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: DateTimePicker,
    title: 'Example/DateTimePicker'
} as any) as Meta;

const Template: Story<IDateTimePickerComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <DateTimePicker {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    onChange: (date: any) => console.log(date),
    value: new Date()
} as IDateTimePickerComponentProps;
