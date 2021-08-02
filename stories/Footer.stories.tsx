import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { Footer, FooterBody, FooterEnd, FooterHead } from '../components/Footer/Footer';

import { IBoxComponentProps } from '../components/Box/model';
import { Button, ButtonIcon, ButtonSecondary } from '../components/Button/Button';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Footer,
	title: 'Example/Footer',
} as any) as Meta;

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<Footer {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<>
			<FooterHead fontSize={12} fontWeight={800}>
				SAVE AS DRAFT
			</FooterHead>
			<FooterBody>
				<Button mr={10}>
					<ButtonIcon>chevron_left</ButtonIcon>
					BACK
				</Button>
				<Button>
					NEXT
					<ButtonIcon>chevron_right</ButtonIcon>
				</Button>
			</FooterBody>
			<FooterEnd>
				<ButtonSecondary>DESIGN & DELIVERY TEST</ButtonSecondary>
			</FooterEnd>
		</>
	),
} as IBoxComponentProps;
