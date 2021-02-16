import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IPaginationComponentProps } from '../components/Pagination/model';
import { Pagination, PaginationButton } from '../components/Pagination/Pagination';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Pagination,
    title: 'Example/Pagination'
} as any) as Meta;

const Template: Story<IPaginationComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Pagination {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    activePage: 1,
    children: [...Array(9)].map((item, i) => {
        return <PaginationButton key={i} onClick={() => console.log('Button Clicked!')} />;
    }),
    onClickButton: (e: React.MouseEvent<HTMLElement>, value: number) => console.log(e, value)
} as IPaginationComponentProps;
