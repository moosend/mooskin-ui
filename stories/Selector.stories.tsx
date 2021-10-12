import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISelectorComponentProps } from '../components/Selector/model';
import { Selector, SelectorItem } from '../components/Selector/Selector';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Selector,
	title: 'Example/Selector',
} as any) as Meta;

const Template: Story<ISelectorComponentProps> = (args) => {
	const [activeItem, setActiveItem] = React.useState(1);
	return (
		<>
			<GlobalStyle />
			<Selector activeItem={activeItem} {...args} onClickItem={(e: React.MouseEvent<HTMLElement>, value: number) => setActiveItem(value)} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<SelectorItem value={1}>HTML</SelectorItem>
			<SelectorItem value={2} onClick={(e) => console.log('Plain Text Clicked')}>
				PLAIN TEXT
			</SelectorItem>
			<SelectorItem value={3}>IMPORT</SelectorItem>
		</>
	),
} as ISelectorComponentProps;
