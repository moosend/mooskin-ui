import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IStackComponentProps } from '../components/Stack/model';
import { HStack, VStack } from '../components/Stack/Stack';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: HStack,
    title: 'Example/Stack'
} as any) as Meta;

const HTemplate: Story<IStackComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <HStack {...args} />
        </>
    );
};

const VTemplate: Story<IStackComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <VStack {...args} />
        </>
    );
};

const boxStyle = {
    height: 40,
    width: 40
};

const secondaryBoxStyle = {
    height: 60,
    width: 60
};

export const Horizontal = HTemplate.bind({});
Horizontal.args = {
    align: 'stretch',
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    direction: 'row',
    justify: 'initial',
    spacing: 20
} as IStackComponentProps;

export const HorizontalWithDivider = HTemplate.bind({});
HorizontalWithDivider.args = {
    align: 'stretch',
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    direction: 'row',
    divider: <div style={{ backgroundColor: 'grey', width: 1, height: '100%' }} />,
    justify: 'initial',
    p: 50,
    spacing: 20
} as IStackComponentProps;

export const HorizontalReverse = HTemplate.bind({});
HorizontalReverse.args = {
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    direction: 'row-reverse',
    justify: 'flex-end',
    spacing: 20
};

export const Vertical = VTemplate.bind({});
Vertical.args = {
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    spacing: 20
} as IStackComponentProps;

export const VerticalWithDivider = HTemplate.bind({});
VerticalWithDivider.args = {
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    divider: <div style={{ backgroundColor: 'grey', height: 1 }} />,
    spacing: 20
} as IStackComponentProps;

export const VerticalReverse = HTemplate.bind({});
VerticalReverse.args = {
    children: [
        <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
        <div key={1} style={{ ...secondaryBoxStyle, backgroundColor: 'green' }} />,
        <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
    ],
    direction: 'column-reverse',
    spacing: 20
} as IStackComponentProps;
