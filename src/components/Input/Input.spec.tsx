import * as React from 'react';
import Input from './Input';

import { shallow } from 'enzyme';

describe('Input', () => {

    test('renders properly into dom and has Placeholder prop', () => {
        const component = shallow(<Input placeholder="username"/>);

        expect(component.find('input').prop('placeholder')).toContain('username');
    });

    test('renders an input with a "required" prop and minlength', () => {
        const component = shallow(<Input minlength="5" required/>);

        expect(component.find('input').prop('required')).toEqual(true);
        expect(component.find('input').prop('minLength')).toEqual(5);
    });

    test('renders an input with id and value', () => {

        const component = shallow(<Input id="1234" value="random"/>);

        expect(component.find('input').prop('id')).toEqual('1234');
        expect(component.find('input').prop('value')).toEqual('random');
    });

    test('renders an input with custom css class and maxlength', () => {
        const component = shallow(<Input className="input-group" maxlength="25"/>);

        expect(component.find('input').hasClass('input-group')).toBe(true);
        expect(component.find('input').prop('maxLength')).toEqual(25);
    });

    test('renders an input with custom css style and type', () => {
        const component = shallow(<Input style={{color: 'blue'}} type="text"/>);

        expect(component.find('input').prop('style')).toEqual({color: 'blue'});
        expect(component.find('input').prop('type')).toEqual('text');
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func}/>);

        component.find('input').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });

});
