import * as React from 'react';
import Button from '../Button';
import Modal from './Modal';

import { shallow } from 'enzyme';

describe('Modal', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Modal
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
                onClickOverlay={func}
            >
                <div>
                    Mooskin
                </div>
            </Modal>
        );
        expect(tree).toMatchSnapshot();
    });

    test('onOverlayClick callback is called when cover is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Modal onClickOverlay={func}>asd</Modal>);

        component.find('.cover').simulate('click');

        expect(func).toHaveBeenCalled();

    });

});
