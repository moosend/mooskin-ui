import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Loader } from '../components/Loader/Loader';
import { ILoaderComponentProps } from '../components/Loader/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Loader,
	title: 'Example/Loader'
} as any) as Meta;

const Template: Story<ILoaderComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Loader {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as ILoaderComponentProps;
