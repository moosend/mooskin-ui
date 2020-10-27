import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Button from '../components/Button/Button';
import {IButtonComponentProps} from '../components/Button/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Button,
    title: 'Example/Button',
} as any as Meta;

const Template: Story<IButtonComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Button {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: 'VIEW CAMPAIGN'
};

export const Inversed = Template.bind({});
Inversed.args = {
    children: 'VIEW CAMPAIGN',
    inverseStyle: true
};

export const Icon = Template.bind({});
Icon.args = {
    children: 'VIEW CAMPAIGN',
    icon: 'file_copy'
};

export const Href = Template.bind({});
Href.args = {
    children: 'VIEW CAMPAIGN',
    href: 'https://www.moosend.com'
};
