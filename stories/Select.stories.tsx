import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISelectComponentProps } from '../components/Select/model';
import {
    Select,
    SelectContainer,
    SelectFilter,
    SelectIcon,
    SelectOption,
    SelectOptionList,
    SelectOverlay,
    SelectPagination,
    SelectPlaceholder
} from '../components/Select/Select';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Select,
    title: 'Example/Select',
} as any) as Meta;

const Template: Story<ISelectComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Select  {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <>
            <SelectContainer>
                <SelectPlaceholder>Select an option</SelectPlaceholder>
                <SelectFilter onChange={(e) => console.log('On Filter Change: ', e.target.value)} />
                <SelectIcon />
            </SelectContainer>
            <SelectOptionList>
                <SelectOption onClick={(e, value) => console.log('Option clicked: ', value)} value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
                <SelectOption value="4">Option 4</SelectOption>
                <SelectOption value="5">Option 5</SelectOption>
            </SelectOptionList>
            <SelectOverlay />
        </>
    ),
    dataLabel: 'Select',
    onChange: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(data),
    selected: '2'
} as ISelectComponentProps;

export const Multi = Template.bind({});
Multi.args = {
    children: (
        <>
            <SelectContainer>
                <SelectPlaceholder>Select multiple options</SelectPlaceholder>
                <SelectFilter onChange={(e) => console.log('On Filter Change: ', e.target.value)} />
                <SelectIcon />
            </SelectContainer>
            <SelectOptionList>
                <SelectOption onClick={(e, value) => console.log('Option clicked: ', value)} value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
                <SelectOption value="4">Option 4</SelectOption>
                <SelectOption value="5">Option 5</SelectOption>
            </SelectOptionList>
            <SelectOverlay />
        </>
    ),
    dataLabel: 'Select',
    onChange: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(data),
    selected: ['2', '4']
} as ISelectComponentProps;

export const WithPagination = Template.bind({});
WithPagination.args = {
    children: (
        <>
            <SelectContainer>
                <SelectPlaceholder>Select multiple options</SelectPlaceholder>
                <SelectFilter onChange={(e) => console.log('On Filter Change: ', e.target.value)} />
                <SelectIcon />
            </SelectContainer>
            <SelectOptionList>
                <SelectOption onClick={(e, value) => console.log('Option clicked: ', value)} value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
                <SelectOption value="4">Option 4</SelectOption>
                <SelectOption value="5">Option 5</SelectOption>
                <SelectPagination page={2} onClick={(e, page) => console.log('Pagination Clicked: ', page)} />
            </SelectOptionList>
            <SelectOverlay />
        </>
    ),
    dataLabel: 'Select',
    onChange: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(data),
    selected: '2'
} as ISelectComponentProps;
