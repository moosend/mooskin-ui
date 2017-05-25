import * as React from 'react';
import Input from './Input';

import { mount, render, shallow } from 'enzyme';

describe('Input', () => {

    test('renders properly into dom and has the proper disabled class', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} disabled></Input>);

        expect(component.find('input').hasClass('disabledInput')).toBe(true);
    });

    test('renders properly into dom and has Placeholder prop', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} placeholder="username"></Input>);

        expect(component.find('input').prop('placeholder')).toContain("username");
    });

    test('renders an input with a "required" prop', () => {
        const func = jest.fn();

        const component = shallow(<Input  onChange={func} required/>);

        expect(component.find('input').prop('required')).toEqual(true);
    });

    test('renders an input with a passed value', () => {
        const func = jest.fn();

        const component = shallow(<Input  onChange={func} value="random"/>);

        expect(component.find('input').prop('value')).toEqual('random');
    });

    test('renders an input with id', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} id="1234"></Input>);

        expect(component.find('input').prop('id')).toEqual('1234');
    });

    test('renders an input with custom css class', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} className="input-group"></Input>);

        expect(component.find('input').hasClass('input-group')).toBe(true);
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func}></Input>);

        component.find('input').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });

});