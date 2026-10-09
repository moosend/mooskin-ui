import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { Box } from '../components/Box/Box';
import { IBoxComponentProps } from '../components/Box/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Box,
	title: 'Example/Box'
};

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Box {...args} noRender={[]} />
			<Box {...args} noRender={[]} />
			<Box {...args} noRender={[]} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	boxShadow: 'md',
	children: 'Box',
	fontColor: 'blue',
	p: 30,
	round: 'md',
	className: 'LALALA'
};
