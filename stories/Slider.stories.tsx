import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { ISliderComponentProps } from '../components/Slider/model';
import { Slider } from '../components/Slider/Slider';

import '../components/Styled/GlobalStyles';

export default {
	component: Slider,
	title: 'Example/Slider'
};

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
