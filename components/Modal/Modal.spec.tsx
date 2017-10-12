import toJson from 'enzyme-to-json';
import * as React from 'react';
import {Button} from '../index';
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
                active
            >
                <div>
                    Mooskin
                </div>
            </Modal>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    test('onOverlayClick callback is called when cover is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Modal onClickOverlay={func}>asd</Modal>);

        component.find('.cover').simulate('click');

        expect(func).toHaveBeenCalled();

    });

    test('modal toggles on and off', () => {

        let active = false;

        const on = () => {
            active = false;
        };

        const off = () => {
            active = false;
        };

        const button = shallow(<Button onClick={on}>asd</Button>);
        const component = shallow(<Modal active={active} onClickOverlay={off}>asd</Modal>);

        expect(component.find('.modalOn')).toBeFalsy;

        button.simulate('click');

        expect(component.find('.modalOn')).toBeTruthy;

    });

});
