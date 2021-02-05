import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import ActionsDropdown, {ActionsDropdownArrow, ActionsDropdownItem} from '../components/ActionsDropdown/ActionsDropdown';
import {IActionsDropdownComponentProps} from '../components/ActionsDropdown/model';

import { IInputCallbackData } from '../components/index/index';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: ActionsDropdown,
    title: 'Example/ActionsDropdown',
} as any as Meta;

const Template: Story<IActionsDropdownComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <ActionsDropdown {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <>
            <ActionsDropdownItem dataLabel="settings" value="settings" onClick={() => alert('Random on Click!')}>
                Settings
            </ActionsDropdownItem>
            <ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
                Duplicate
            </ActionsDropdownItem>
            <ActionsDropdownItem dataLabel="preview" value="preview">
                Preview
            </ActionsDropdownItem>
        </>
    ),
    onClickItem: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)
} as IActionsDropdownComponentProps;

export const BottomArrow = Template.bind({});
BottomArrow.args = {
    bgColor: '#232c3d',
    children: (
        <>
            <ActionsDropdownArrow arrowDirection="down" right={'unset !important'} left={22} />
            <ActionsDropdownItem dataLabel="settings" value="settings">
                Settings
            </ActionsDropdownItem>
            <ActionsDropdownItem dataLabel="duplicate" value="duplicate" onClick={(e) => console.log('Duplicate Clicked')}>
                Duplicate
            </ActionsDropdownItem>
            <ActionsDropdownItem dataLabel="preview" value="preview">
                Preview
            </ActionsDropdownItem>
        </>
    ),
    onClickItem: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => alert(data.value)
} as IActionsDropdownComponentProps;
