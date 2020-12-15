import * as React from 'react';
import Modal, {ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from './Modal';

import { mount } from 'enzyme';

describe('Modal', () => {

    test('renders correctly', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();

        const tree = mount(
            <Modal onClose={fn}>
                <ModalOverlay onClick={fn2}>
                    <ModalContent w="50%" h="50%">
                        <ModalCloseButton position="absolute" top={10} right={10} />
                        <ModalHeader>Create your account</ModalHeader>

                        <ModalBody>
                            Modal Content Body
                        </ModalBody>

                        <ModalFooter>
                            Modal Footer goes here!
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        );

        expect(tree).toMatchSnapshot();
    });

});
