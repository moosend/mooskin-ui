import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { Layout } from '../components/Layout/Layout';
import { ILayoutComponentProps } from '../components/Layout/model';

import { Box } from '../components/Box/Box';
import '../components/Styled/GlobalStyles';

export default {
	component: Layout,
	title: 'Example/Layout'
};

const Template: Story<ILayoutComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Layout {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
			<Box p={30} round="sm" boxShadow="md">
				Box
			</Box>
		</>
	),
	cols: 3
} as ILayoutComponentProps;
