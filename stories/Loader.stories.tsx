import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { Loader } from '../components/Loader/Loader';
import { ILoaderComponentProps } from '../components/Loader/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Loader,
	title: 'Example/Loader'
};

const Template: Story<ILoaderComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Loader {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as ILoaderComponentProps;
