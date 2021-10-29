import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { IStepsComponentProps } from '../components/Steps/model';
import { Step, StepContent, StepHeader, Steps } from '../components/Steps/Steps';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Steps,
	title: 'Example/Steps'
} as any) as Meta;

const Template: Story<IStepsComponentProps> = (args) => {
	const [activeItem, setActiveItem] = React.useState(2);
	return (
		<>
			<GlobalStyle />
			<Steps activeItem={activeItem} {...args} onClickStep={(e: React.MouseEvent<HTMLElement>, value: number) => setActiveItem(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: [...Array(5)].map((item, i) => {
		return (
			<Step key={i} activeId={i}>
				<StepHeader disabled={i === 0}>{`Item: ${i}`}</StepHeader>
				<StepContent p={15}>
					<div>{`Content for item with index: ${i}`}</div>
				</StepContent>
			</Step>
		);
	})
} as IStepsComponentProps;
