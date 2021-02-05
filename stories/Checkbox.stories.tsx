import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Checkbox, {CheckboxDescription, CheckboxIcon, CheckboxLabel} from '../components/Checkbox/Checkbox';
import { ICheckboxComponentProps } from '../components/Checkbox/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Checkbox,
    title: 'Example/Checkbox',
} as any) as Meta;

const Template: Story<ICheckboxComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Checkbox  {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    checked: false,
    children: (
        <>
            <CheckboxLabel>Normal Checkbox</CheckboxLabel>
        </>
    ),
    onClickCheckbox: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
} as ICheckboxComponentProps;

export const Selected = Template.bind({});
Selected.args = {
    checked: true,
    children: (
        <>
            <CheckboxLabel>Selected Checkbox</CheckboxLabel>
        </>
    ),
    onClickCheckbox: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
} as ICheckboxComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    children: (
        <>
            <CheckboxLabel>Disabled Checkbox</CheckboxLabel>
        </>
    ),
    disabled: true,
    onClick: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
} as ICheckboxComponentProps;

export const Description = Template.bind({});
Description.args = {
    checked: false,
    children: (
        <Box>
            <CheckboxLabel onClick={() => alert('Label Clicked!')}>Checkbox</CheckboxLabel>
            <CheckboxDescription>Checkbox description goes here</CheckboxDescription>
        </Box>
    ),
    onClick: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
} as ICheckboxComponentProps;

export const CustomButton = Template.bind({});
CustomButton.args = {
    checked: false,
    children: (
        <>
            <CheckboxIcon color="red" />
            <Box>
                <CheckboxLabel>Checkbox</CheckboxLabel>
                <CheckboxDescription>Checkbox description goes here</CheckboxDescription>
            </Box>
        </>
    ),
    onClick: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    value: 'test'
} as ICheckboxComponentProps;
