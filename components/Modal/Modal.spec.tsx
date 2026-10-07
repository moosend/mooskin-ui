import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from './Modal';

describe('Modal', () => {
	test('renders correctly', () => {
		const fn = jest.fn();
		const fn2 = jest.fn();

		const { container } = render(
			<Modal onClose={fn} isOpen>
				<ModalOverlay onClick={fn2}>
					<ModalContent w="50%" h="50%">
						<ModalCloseButton position="absolute" top={10} right={10} />
						<ModalHeader>Create your account</ModalHeader>

						<ModalBody>Modal Content Body</ModalBody>

						<ModalFooter>Modal Footer goes here!</ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('closes Modal on Overlay click or on click ESC key', () => {
		const fn = jest.fn();
		const fn2 = jest.fn();

		const { container } = render(
			<Modal onClose={fn} isOpen>
				<ModalOverlay onClick={fn2}>
					<ModalContent w="50%" h="50%">
						<ModalCloseButton position="absolute" top={10} right={10} />
						<ModalHeader>Create your account</ModalHeader>

						<ModalBody>Modal Content Body</ModalBody>

						<ModalFooter>Modal Footer goes here!</ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</Modal>
		);

		const modal = container.firstChild as HTMLElement;
		fireEvent.keyDown(modal, { keyCode: 27, key: 'Escape' });
		fireEvent.click(modal.firstElementChild as HTMLElement);
		expect(fn).toHaveBeenCalledTimes(2);
		expect(fn2).toHaveBeenCalled();
	});
});
