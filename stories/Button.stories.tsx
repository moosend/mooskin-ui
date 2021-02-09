import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {Button, ButtonIcon} from '../components/Button/Button';
import { IButtonComponentProps } from '../components/Button/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

import variables from '../components/_utils/globals/variables';
import { MooskinContextProvider } from '../components/Styled/MooskinContextProvider';

export default ({
    // component: Button,
    title: 'Example/Button',
} as any) as Meta;

const Template: Story<IButtonComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <MooskinContextProvider value={{palette: variables}}>
                <Button {...args} />
            </MooskinContextProvider>
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: 'VIEW CAMPAIGN',
} as IButtonComponentProps;

export const Inversed = Template.bind({});
Inversed.args = {
    children: 'VIEW CAMPAIGN',
    inverseStyle: true,
} as IButtonComponentProps;

export const Icon = Template.bind({});
Icon.args = {
    bgColor: '#293346',
    children: (
        <>
            <ButtonIcon>file_copy</ButtonIcon>
            VIEW CAMPAIGN
        </>
    )
} as IButtonComponentProps;

export const Href = Template.bind({});
Href.args = {
    bgColor: '#37a037',
    children: 'VIEW CAMPAIGN',
    href: 'https://www.moosend.com'
} as IButtonComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'VIEW CAMPAIGN',
    disabled: true
} as IButtonComponentProps;
