import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Anchor from '../components/Anchor/Anchor';
import {IAnchorComponentProps} from '../components/Anchor/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Anchor,
    title: 'Example/Anchor',
} as any as Meta;

const Template: Story<IAnchorComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Anchor {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: 'VIEW CAMPAIGN',
    href: 'https://www.moosend.com'
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'VIEW CAMPAIGN',
    disabled: true,
    href: 'https://www.moosend.com'
};
