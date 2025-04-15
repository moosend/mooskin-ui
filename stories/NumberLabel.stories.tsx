import React from 'react';

import { Meta, Story } from '@storybook/react';

import { INumberLabelComponentProps } from '../components/NumberLabel/model';
import { NumberLabel } from '../components/NumberLabel/NumberLabel';

import { Box } from '../components/Box/Box';
import '../components/Styled/GlobalStyles';

export default {
	component: NumberLabel,
	title: 'Example/NumberLabel'
} as any as Meta;

const Template: Story<INumberLabelComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Box {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: <NumberLabel>12345</NumberLabel>
} as INumberLabelComponentProps;

export const WithAbbreviate = Template.bind({});
WithAbbreviate.args = {
	children: <NumberLabel abbreviate>15432</NumberLabel>
} as INumberLabelComponentProps;

export const WithAbbreviateAccuracyLow = Template.bind({});
WithAbbreviateAccuracyLow.args = {
	children: (
		<NumberLabel abbrAccuracy={0} abbreviate>
			3522439
		</NumberLabel>
	)
} as INumberLabelComponentProps;

export const WithAbbreviateAccuracyHigh = Template.bind({});
WithAbbreviateAccuracyHigh.args = {
	children: (
		<NumberLabel abbrAccuracy={3} abbreviate>
			7102522433
		</NumberLabel>
	)
} as INumberLabelComponentProps;

export const WithRoundAccuracyLow = Template.bind({});
WithRoundAccuracyLow.args = {
	children: (
		<NumberLabel roundAccuracy="low" roundNumber>
			15432
		</NumberLabel>
	)
} as INumberLabelComponentProps;

export const WithRoundAccuracyHigh = Template.bind({});
WithRoundAccuracyHigh.args = {
	children: (
		<NumberLabel roundNumber roundAccuracy="high">
			7102522433
		</NumberLabel>
	)
} as INumberLabelComponentProps;

export const WithAbbreviateDefaultRound = Template.bind({});
WithAbbreviateDefaultRound.args = {
	children: (
		<NumberLabel abbreviate roundNumber>
			3522439
		</NumberLabel>
	)
} as INumberLabelComponentProps;
