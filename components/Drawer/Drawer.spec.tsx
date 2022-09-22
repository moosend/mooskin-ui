import * as React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from './Drawer';

import { mount } from 'enzyme';

describe('Drawer', () => {
	test('renders correctly', () => {
		const fn = jest.fn();
		const fn2 = jest.fn();

		const tree = mount(
			<Drawer onClose={fn}>
				<DrawerOverlay onClick={fn2} isOpen>
					<DrawerContent w="50%" h="50%">
						<DrawerCloseButton position="absolute" top={10} right={10} />
						<DrawerHeader>Create your account</DrawerHeader>

						<DrawerBody>Drawer Content Body</DrawerBody>

						<DrawerFooter>Drawer Footer goes here!</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);

		expect(tree).toMatchSnapshot();
	});

	test('closes drawer on Overlay click or on ESC key', () => {
		const fn = jest.fn();
		const fn2 = jest.fn();

		const tree = mount(
			<Drawer onClose={fn} isOpen>
				<DrawerOverlay onClick={fn2}>
					<DrawerContent w="50%" h="50%">
						<DrawerCloseButton position="absolute" top={10} right={10} />
						<DrawerHeader>Create your account</DrawerHeader>

						<DrawerBody>Drawer Content Body</DrawerBody>

						<DrawerFooter>Drawer Footer goes here!</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);

		tree.find(DrawerOverlay).simulate('click');

		tree.find('StyledDrawer').simulate('keyDown', { keyCode: 27, key: 'Escape', preventDefault: () => undefined });

		expect(fn).toHaveBeenCalledTimes(2);
		expect(fn2).toHaveBeenCalled();
	});
});
