import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISwitchComponentProps } from '../components/Switch/model';
import Switch from '../components/Switch/Switch';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Switch,
    title: 'Example/Switch',
} as any) as Meta;

const Template: Story<ISwitchComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Switch {...args} />
        </>
    );
};

export const Active = Template.bind({});
Active.args = {
    label: 'Automation status',
    offLabel: 'Off',
    on: true,
    onLabel: 'On',
};

export const Inactive = Template.bind({});
Inactive.args = {
    label: 'Automation status',
    labelWidth: 200,
    primaryColor: '#37a037',
    secondaryColor: '#d84840',
    width: 120,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
