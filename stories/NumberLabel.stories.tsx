import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { INumberLabelComponentProps } from '../components/NumberLabel/model';
import { NumberLabel } from '../components/NumberLabel/NumberLabel';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: NumberLabel,
	title: 'Example/NumberLabel',
} as any) as Meta;

const Template: Story<INumberLabelComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<NumberLabel {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: 12345,
} as INumberLabelComponentProps;

export const WithAbbreviate = Template.bind({});
WithAbbreviate.args = {
	abbreviate: true,
	children: 15432,
} as INumberLabelComponentProps;

export const WithAbbreviateAccuracyLow = Template.bind({});
WithAbbreviateAccuracyLow.args = {
	abbrAccuracy: 0,
	abbreviate: true,
	children: 3522439,
} as INumberLabelComponentProps;

export const WithAbbreviateAccuracyHigh = Template.bind({});
WithAbbreviateAccuracyHigh.args = {
	abbrAccuracy: 3,
	abbreviate: true,
	children: 7102522433,
} as INumberLabelComponentProps;

export const WithRoundAccuracyLow = Template.bind({});
WithRoundAccuracyLow.args = {
	children: 15432,
	roundAccuracy: 'low',
	roundNumber: true,
} as INumberLabelComponentProps;

export const WithRoundAccuracyHigh = Template.bind({});
WithRoundAccuracyHigh.args = {
	children: 7102522433,
	roundAccuracy: 'high',
	roundNumber: true,
} as INumberLabelComponentProps;

export const WithAbbreviateDefaultRound = Template.bind({});
WithAbbreviateDefaultRound.args = {
	abbreviate: true,
	children: 3522439,
	roundNumber: true,
} as INumberLabelComponentProps;
