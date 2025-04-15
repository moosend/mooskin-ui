import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Anchor } from '../components/Anchor/Anchor';
import { IAnchorComponentProps } from '../components/Anchor/model';

//import '../components/Styled/GlobalStyles';
import '../components/Styled/GlobalStyles';
export default {
	component: Anchor,
	title: 'Example/Anchor'
} as any as Meta;

const Template: Story<IAnchorComponentProps> = (args) => {
	return (
		<>
			<Anchor {...args} onClick={(e: React.MouseEvent<HTMLElement>) => alert('Being redirected...')} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: 'VIEW CAMPAIGN',
	href: 'https://www.moosend.com'
} as IAnchorComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'VIEW CAMPAIGN',
	disabled: true,
	href: 'https://www.moosend.com'
} as IAnchorComponentProps;
