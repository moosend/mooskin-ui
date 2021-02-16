import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IRadioComponentProps } from '../components/Radio/model';
import { Radio, RadioDescription, RadioIcon, RadioLabel } from '../components/Radio/Radio';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Radio,
    title: 'Example/Radio'
} as any) as Meta;

const Template: Story<IRadioComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Radio {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <>
            <RadioLabel>Normal Radio</RadioLabel>
        </>
    ),
    onClickRadio: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
} as IRadioComponentProps;

export const Selected = Template.bind({});
Selected.args = {
    children: (
        <>
            <RadioLabel>Selected Radio</RadioLabel>
        </>
    ),
    onClickRadio: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    selected: true,
    value: 'test'
} as IRadioComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
    children: (
        <>
            <RadioLabel>Disabled Radio</RadioLabel>
        </>
    ),
    disabled: true,
    onClick: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
} as IRadioComponentProps;

export const Description = Template.bind({});
Description.args = {
    children: (
        <Box>
            <RadioLabel>Disabled Radio</RadioLabel>
            <RadioDescription>Radio description goes here</RadioDescription>
        </Box>
    ),
    onClick: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
} as IRadioComponentProps;

export const CustomButton = Template.bind({});
CustomButton.args = {
    children: (
        <>
            <RadioIcon color="red" />
            <RadioLabel>Normal Radio</RadioLabel>
        </>
    ),
    onClickRadio: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    selected: false,
    value: 'test'
} as IRadioComponentProps;
