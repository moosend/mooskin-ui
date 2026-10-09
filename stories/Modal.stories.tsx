import React from 'react';

import type { StoryFn as Story } from '@storybook/react';

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '../components/Modal/Modal';
import { IModalComponentProps } from '../components/Modal/model';

import '../components/Styled/GlobalStyles';

export default {
	component: Modal,
	title: 'Example/Modal'
};

const Template: Story<IModalComponentProps> = (args) => {
	return (
		<>
			{/*<GlobalStyle />*/}
			<Modal {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: (
		<ModalOverlay onClick={() => console.log('Overlay Clicked!')}>
			<ModalContent w="50%" h="50%">
				<ModalCloseButton position="absolute" top={10} right={10} />
				<ModalHeader>Create your account</ModalHeader>

				<ModalBody>Modal Content Body</ModalBody>

				<ModalFooter>Modal Footer goes here!</ModalFooter>
			</ModalContent>
		</ModalOverlay>
	),
	isOpen: true,
	onClose: () => alert('Close!')
} as IModalComponentProps;
