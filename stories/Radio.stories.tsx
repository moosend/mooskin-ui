import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IRadioComponentProps } from '../components/Radio/model';
import Radio from '../components/Radio/Radio';

import { IInputCallbackData } from '../components/index';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Radio,
    title: 'Example/Radio',
} as any) as Meta;

const Template: Story<IRadioComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Radio  {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    label: 'Normal radio',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
};

export const Selected = Template.bind({});
Selected.args = {
    label: 'Selected radio',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    selected: true,
    value: 'test'
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Disabled radio',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
};

export const Description = Template.bind({});
Description.args = {
    description: 'Radio description goes here',
    label: 'With description',
    onClick: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
};
