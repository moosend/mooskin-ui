import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { IPaginationComponentProps } from '../components/Pagination/model';
import { Pagination, PaginationButton } from '../components/Pagination/Pagination';

import '../components/Styled/GlobalStyles';

export default {
	component: Pagination,
	title: 'Example/Pagination'
};

const Template: Story<IPaginationComponentProps> = (args) => {
	const [page, setPage] = React.useState(5);
	return (
		<>
			{/*<GlobalStyle />*/}
			<Pagination {...args} activePage={page} onClickButton={(e: React.MouseEvent<HTMLElement>, value: number) => setPage(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: [...Array(9)].map((item, i) => {
		return <PaginationButton key={i} />;
	})
} as IPaginationComponentProps;
