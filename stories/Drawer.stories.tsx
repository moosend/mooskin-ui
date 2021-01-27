import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay} from '../components/Drawer/Drawer';
import {IDrawerComponentProps} from '../components/Drawer/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default {
    component: Drawer,
    title: 'Example/Drawer',
} as any as Meta;

const Template: Story<IDrawerComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Drawer {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: (
        <DrawerOverlay onClick={() => console.log('Overlay Clicked!')}>
          <DrawerContent>
            <DrawerCloseButton position="absolute" top={10} right={10} />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
                Drawer Content Body
            </DrawerBody>

            <DrawerFooter>
                Drawer Footer goes here!
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
    ),
    onClose: () => alert('Close!')
};
