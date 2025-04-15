import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ISliderComponentProps } from '../components/Slider/model';
import { Slider } from '../components/Slider/Slider';

import '../components/Styled/GlobalStyles';

export default {
	component: Slider,
	title: 'Example/Slider'
} as any as Meta;

const Template: Story<ISliderComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Slider {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	onChangeSlider: (e, data) => console.log(e, data)
} as ISliderComponentProps;
