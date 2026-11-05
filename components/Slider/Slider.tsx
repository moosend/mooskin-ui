import * as React from 'react';

import type { ISliderComponentProps } from './model';

import { StyledSlider } from './styles';

export const Slider: React.FC<ISliderComponentProps> = (props) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange?.(e);
		props.onChangeSlider?.(e, { dataLabel: props.dataLabel, value: e.target.value });
	};

	return <StyledSlider boxAs="input" type="range" {...props} onChange={onChange} />;
};
