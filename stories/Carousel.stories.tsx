import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Carousel } from '../components/Carousel/Carousel';
import { ICarouselComponentProps } from '../components/Carousel/model';

import { Box } from '../components/Box/Box';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Carousel,
    title: 'Example/Carousel'
} as any) as Meta;

const Template: Story<ICarouselComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Carousel {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: [...Array(7)].map((item, i) => {
        return (
            <div style={{ padding: 10 }} key={i}>
                <Box boxShadow="md" round="md" m={30} p={30}>{`Box ${i}`}</Box>
            </div>
        );
    })
} as ICarouselComponentProps;
