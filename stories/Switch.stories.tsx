import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISwitchComponentProps } from '../components/Switch/model';
import Switch, {SwitchHandle} from '../components/Switch/Switch';

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
    active: true,
    onClickSwitch: (e, data) => console.log(data),
    text: 'STATUS'
} as ISwitchComponentProps;

export const Inactive = Template.bind({});
Inactive.args = {
    onClickSwitch: (e, data) => console.log(data),
    text: 'PUBLISHED',
    w: 120,
} as ISwitchComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    text: 'DISABLED'
} as ISwitchComponentProps;

export const Custom = Template.bind({});
Custom.args = {
    active: true,
    bgColor: 'red',
    children: <SwitchHandle bgColor="green" />,
    onClickSwitch: (e, data) => console.log(data),
    text: 'STATUS'
} as ISwitchComponentProps;
