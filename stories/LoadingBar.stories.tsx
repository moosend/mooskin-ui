import React from 'react';

import { Meta, Story } from '@storybook/react';

import { LoadingBar } from '../components/LoadingBar/LoadingBar';
import { ILoadingBarComponentProps } from '../components/LoadingBar/model';

import '../components/Styled/GlobalStyles';

export default {
	component: LoadingBar,
	title: 'Example/LoadingBar'
} as any as Meta;

const Template: Story<ILoadingBarComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<LoadingBar {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	onLoaderDone: () => console.log('Done'),
	onLoaderError: () => console.log('Error'),
	progress: 70
} as ILoadingBarComponentProps;
