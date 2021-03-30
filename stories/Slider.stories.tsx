import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISliderComponentProps } from '../components/Slider/model';
import { Slider } from '../components/Slider/Slider';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Slider,
	title: 'Example/Slider',
} as any) as Meta;

const Template: Story<ISliderComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Slider {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	onChangeSlider: (e, data) => console.log(e, data),
} as ISliderComponentProps;
