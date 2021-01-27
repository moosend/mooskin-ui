import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {
    Input,
    InputContainer,
    InputEmoji,
    InputIcon,
    InputOption,
    InputOptionList,
    InputOptionListTitle
} from '../components/Input/Input';
import { IInputComponentProps, IInputContainerComponentProps } from '../components/Input/model';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
// import { Box } from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Input,
    title: 'Example/Input',
} as any) as Meta;

const Template: Story<IInputComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <InputContainer value="asd" {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <>
            <Input />
            <InputOptionList icon="check" pr={5}>
                <InputOptionListTitle>Personalization Tags</InputOptionListTitle>
                <InputOption value="tag1">Tag 1</InputOption>
                <InputOption value="tag2">Tag 2</InputOption>
                <InputOption value="tag3">Tag 3</InputOption>
            </InputOptionList>
            <InputEmoji pr={5} />
            <InputIcon>search</InputIcon>
        </>
    ),
    dataLabel: 'Input',
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => console.log(data),
    value: 'Input'
} as IInputContainerComponentProps;
