import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Button, ButtonIcon } from '../components/Button/Button';
import { IButtonComponentProps } from '../components/Button/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

import variables from '../components/_utils/globals/variables';
import { MooskinContextProvider } from '../components/Styled/MooskinContextProvider';

export default ({
	// component: Button,
	title: 'Example/Button',
} as any) as Meta;

const Template: Story<IButtonComponentProps> = (args) => {
	const [backgroundPalette, setBackgroundPalette] = React.useState({ ...variables.backgroundColors });
	return (
		<>
			<GlobalStyle />
			<MooskinContextProvider
				value={{
					palette: { ...variables, backgroundColors: backgroundPalette },
				}}
			>
				<Button {...args} onClick={() => setBackgroundPalette({ ...variables.backgroundColors, primary1: 'red' })} />
			</MooskinContextProvider>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: 'VIEW CAMPAIGN',
} as IButtonComponentProps;

export const Inversed = Template.bind({});
Inversed.args = {
	children: 'VIEW CAMPAIGN',
	inverseStyle: true,
} as IButtonComponentProps;

export const Icon = Template.bind({});
Icon.args = {
	children: (
		<>
			<ButtonIcon>file_copy</ButtonIcon>
			VIEW CAMPAIGN
		</>
	),
	fontColor: 'fontColors.primary1',
} as IButtonComponentProps;

export const Href = Template.bind({});
Href.args = {
	children: 'VIEW CAMPAIGN',
	href: 'https://www.moosend.com',
	bgColor: ['red', 'blue', 'green', 'yellow'],
} as IButtonComponentProps;

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'VIEW CAMPAIGN',
	disabled: true,
} as IButtonComponentProps;
