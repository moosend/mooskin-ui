import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ISwitchComponentProps } from '../components/Switch/model';
import { Switch, SwitchHandle } from '../components/Switch/Switch';

import '../components/Styled/GlobalStyles';

export default {
	component: Switch,
	title: 'Example/Switch'
} as any as Meta;

const Template: Story<ISwitchComponentProps> = (args) => {
	const [status, setStatus] = React.useState(false);
	return (
		<>
			{/*<GlobalStyle />*/}
			<Switch active={status} {...args} onClickSwitch={(e, data) => setStatus(data.value)} text={status ? 'Active' : 'Inactive'} />
		</>
	);
};

export const Active = Template.bind({});
Active.args = {} as ISwitchComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true
} as ISwitchComponentProps;

export const Custom = Template.bind({});
Custom.args = {
	bgColor: 'red',
	children: <SwitchHandle bgColor="green" />,
	w: 120
} as ISwitchComponentProps;
