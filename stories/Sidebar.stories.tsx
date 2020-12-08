import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Box from '../components/Box/Box';
import {ISidebarComponentProps} from '../components/Sidebar/model';
import Sidebar, {SidebarItem} from '../components/Sidebar/Sidebar';

import { IInputCallbackData } from '../components/index';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Sidebar,
    title: 'Example/Sidebar',
} as any as Meta;

const Template: Story<ISidebarComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Sidebar {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    activeItem: '/settings',
    children: (
        <Box>
            <SidebarItem dataLabel="settings" value="/settings">
                Settings
            </SidebarItem>
            <SidebarItem dataLabel="template" value="/template" onClick={(e, data) => console.log('Template Clicked')}>
                Template
            </SidebarItem>
            <SidebarItem dataLabel="preview" value="/preview">
                Preview
            </SidebarItem>
        </Box>
    ),
    onClickItem: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)
};
