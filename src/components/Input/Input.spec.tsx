import * as React from 'react';
import Input from './Input';

import { mount, render, shallow } from 'enzyme';

describe('Input', () => {

    test('renders properly into dom and has disabled class', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} disabled></Input>);

        expect(component.find('input').hasClass('disabledInput')).toBe(true);
    });

    test('renders properly into dom and has Placeholder prop', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} placeholder="username"></Input>);

        expect(component.find('input').prop('placeholder')).toContain("username");
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func}></Input>);
        component.find('input').simulate('keyDown', {keyCode: 40});
        expect(func).toHaveBeenCalled();
    });

});