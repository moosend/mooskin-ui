import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Button, {IButtonProps} from '../components/Button/Button';

export default {
  component: Button,
  title: 'Example/Button',
} as any as Meta;

const Template: Story<IButtonProps> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  inverseStyle: true
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  style: {backgroundColor: 'black'},
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  disabled: true,
};
