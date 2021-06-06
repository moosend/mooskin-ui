import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IconButton } from '../components/IconButton/IconButton';
import { IIconButtonComponentProps } from '../components/IconButton/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: IconButton,
	title: 'Example/IconButton',
} as any) as Meta;

const Template: Story<IIconButtonComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<IconButton {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	className: 'far fa-coffee',
	onClick: (e: React.MouseEvent<HTMLElement>) => console.log(e),
} as IIconButtonComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	className: 'far fa-coffee',
	disabled: true,
	onClick: (e: React.MouseEvent<HTMLElement>) => console.log(e),
} as IIconButtonComponentProps;
