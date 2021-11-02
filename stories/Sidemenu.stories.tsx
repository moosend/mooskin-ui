import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ISidemenuComponentProps } from '../components/Sidemenu/model';
import { Sidemenu, SidemenuItem } from '../components/Sidemenu/Sidemenu';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Sidemenu,
	title: 'Example/Sidemenu'
} as any) as Meta;

const Template: Story<ISidemenuComponentProps> = (args) => {
	// const [activeItem, setActiveItem] = React.useState<number | string>('/settings');
	return (
		<>
			<GlobalStyle />
			<Sidemenu
				// activeItem={activeItem}
				{...args}
				// onClickItem={(e: React.MouseEvent<HTMLElement>, value: number | string) => setActiveItem(value)}
			/>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<SidemenuItem value="/settings">Settings</SidemenuItem>
			<SidemenuItem active value="/template" onClick={(e) => console.log('Template Clicked')}>
				Template
			</SidemenuItem>
			<SidemenuItem value="/preview">Preview</SidemenuItem>
		</>
	)
} as ISidemenuComponentProps;
