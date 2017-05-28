import * as React from 'react';
import Input from './Input';

import { shallow } from 'enzyme';

describe('Input', () => {

    test('renders properly into dom and has Placeholder prop', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} placeholder="username"/>);

        expect(component.find('input').prop('placeholder')).toContain('username');
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

        const component = shallow(<Input onChange={func} id="1234"/>);

        expect(component.find('input').prop('id')).toEqual('1234');
    });

    test('renders an input with custom css class', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func} className="input-group"/>);

        expect(component.find('input').hasClass('input-group')).toBe(true);
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func}/>);

        component.find('input').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });

});
