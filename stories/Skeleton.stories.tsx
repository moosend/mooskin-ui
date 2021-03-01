import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISkeletonCircleComponentProps, ISkeletonComponentProps, ISkeletonTextComponentProps } from '../components/Skeleton/model';
import { Skeleton, SkeletonCircle, SkeletonText } from '../components/Skeleton/Skeleton';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Skeleton,
	title: 'Example/Skeleton',
} as any) as Meta;

const SkeletonTemplate: Story<ISkeletonComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Skeleton {...args} />
		</>
	);
};

const CircleTemplate: Story<ISkeletonCircleComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<SkeletonCircle {...args} />
		</>
	);
};

const TextTemplate: Story<ISkeletonTextComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<SkeletonText {...args} />
		</>
	);
};

const boxStyle = {
	height: 40,
	width: 40,
};

export const NormalSkeleton = SkeletonTemplate.bind({});
NormalSkeleton.args = {
	children: (
		<div style={{ display: 'flex' }}>
			<div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />
			<div key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />
			<div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
		</div>
	),
	spacing: 20,
} as ISkeletonComponentProps;

export const CircleSkeleton = CircleTemplate.bind({});
CircleSkeleton.args = {
	size: '40px',
} as ISkeletonCircleComponentProps;

export const TextSkeleton = TextTemplate.bind({});
TextSkeleton.args = {
	children: (
		<div>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
			ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
			only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
			with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
			PageMaker including versions of Lorem Ipsum.
		</div>
	),
	lines: 5,
} as ISkeletonTextComponentProps;
