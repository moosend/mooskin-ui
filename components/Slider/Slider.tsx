import * as React from 'react';

import { ISliderComponentProps } from './Model';

import { StyledSlider } from './styles';

export const Slider: React.FC<ISliderComponentProps> = (props) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange && props.onChange(e);
		props.onChangeSlider && props.onChangeSlider(e, { dataLabel: props.dataLabel, value: e.target.value });
	};

	return <StyledSlider boxAs="input" type="range" {...props} onChange={onChange} />;
};
