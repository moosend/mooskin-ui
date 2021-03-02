import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Box } from '../components/Box/Box';
import { IBoxComponentProps } from '../components/Box/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Box,
	title: 'Example/Box',
} as any) as Meta;

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Box {...args} position="absolute" top={0} right={0} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	boxShadow: 'md',
	children: 'Box',
	color: 'blue',
	p: 30,
	round: 'md',
};
