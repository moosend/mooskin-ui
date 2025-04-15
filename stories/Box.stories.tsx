import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Box } from '../components/Box/Box';
import { IBoxComponentProps } from '../components/Box/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Box,
	title: 'Example/Box'
} as any as Meta;

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Box {...args} noRender={['sm', 'xs']} />
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
