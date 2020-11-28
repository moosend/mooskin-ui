import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Checkbox from '../components/Checkbox/Checkbox';
import { ICheckboxComponentProps } from '../components/Checkbox/model';

import { IInputCallbackData } from '../components/index';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Checkbox,
    title: 'Example/Checkbox',
} as any) as Meta;

const Template: Story<ICheckboxComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Checkbox {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    checked: false,
    label: 'Normal Checkbox',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    label: 'Checked Checkbox',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    disabled: true,
    label: 'Disabled Checkbox',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
};

export const Description = Template.bind({});
Description.args = {
    checked: false,
    description: 'Checkbox description goes here',
    label: 'With description',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
};
