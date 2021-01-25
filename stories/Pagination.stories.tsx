import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IPaginationComponentProps } from '../components/Pagination/model';
import Pagination, {PaginationButton} from '../components/Pagination/Pagination';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Pagination,
    title: 'Example/Pagination',
} as any) as Meta;

const Template: Story<IPaginationComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Pagination  {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    activePage: 1,
    children: [
        <PaginationButton value={1} key={1} />,
        <PaginationButton value={2} key={2} />,
        <PaginationButton value={3} key={3} />,
        <PaginationButton value={4} key={4} />,
        <PaginationButton value={5} key={5} />,
        <PaginationButton value={6} key={6} />,
        <PaginationButton value={7} key={7} />,
        <PaginationButton value={8} key={8} />,
        <PaginationButton value={9} key={9} />
    ],
    onClickButton: (e: React.MouseEvent<HTMLElement>, value: number) => console.log(e, value)
} as IPaginationComponentProps;
