import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import Alert, {AlertCloseButton, AlertDescription, AlertIcon, AlertTitle} from '../components/Alert/Alert';
import {IAlertComponentProps} from '../components/Alert/model';
import Box from '../components/Box/Box';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Alert,
    title: 'Example/Alert',
} as any as Meta;

const Template: Story<IAlertComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Alert {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: [
        <AlertIcon key="0" />,
        <AlertTitle key="1">Your browser is outdated!</AlertTitle>,
        <AlertDescription key="2">Your Mooskin experience may be degraded.</AlertDescription>,
        <AlertCloseButton key="3" onClick={(e) => alert('close')} position="absolute" right="8px" top="8px" />
    ]
};

export const WithBox = Template.bind({});
WithBox.args = {
    children: [
        <AlertIcon key="0" />,
        (
            <Box key="1" d="flex" direction="column" justify="center">
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
                <AlertCloseButton onClick={(e) => alert('close')} position="absolute" right="8px" top="8px" />
            </Box>
        )
    ]
};
