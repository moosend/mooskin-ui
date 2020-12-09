import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {ISelectorComponentProps} from '../components/Selector/model';
import Selector, {SelectorItem} from '../components/Selector/Selector';

import { IInputCallbackData } from '../components/index';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Selector,
    title: 'Example/Selector',
} as any as Meta;

const Template: Story<ISelectorComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Selector {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    activeItem: 1,
    children: (
        <>
            <SelectorItem value={1}>
                HTML
            </SelectorItem>
            <SelectorItem value={2} onClick={(e, data) => console.log('Plain Text Clicked')}>
                PLAIN TEXT
            </SelectorItem>
            <SelectorItem value={3}>
                IMPORT
            </SelectorItem>
        </>
    ),
    onClickItem: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)
};
