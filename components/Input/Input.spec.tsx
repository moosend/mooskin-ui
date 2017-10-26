import * as React from 'react';
import Input from './Input';

import { shallow } from 'enzyme';

describe('Input', () => {

    test('renders correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const tree = shallow(
            <Input
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'input1'}
                value="input value"
                placeholder="input placeholder"
                maxlength={50}
                minlength={10}
                name="input name"
                type="text"
                description="just some input"
                label="with a label ofc"
                labelWidth={30}
                autofocus
                autocomplete
                required
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom and has Placeholder prop', () => {

        const component = shallow(<Input placeholder="username"/>);

        expect(component.find('input').prop('placeholder')).toContain('username');
    });

    test('renders an input with a "required" prop and minlength', () => {
        const component = shallow(<Input minlength={5} required/>);

        expect(component.find('input').prop('required')).toEqual(true);
        expect(component.find('input').prop('minLength')).toEqual(5);
    });

    test('renders an input with a passed value and maxlength', () => {
        const component = shallow(<Input value="random" maxlength={50}/>);

        expect(component.find('input').prop('value')).toEqual('random');
        expect(component.find('input').prop('maxLength')).toEqual(50);
    });

    test('renders an input with id and type', () => {

        const component = shallow(<Input type="text" id="1234"/>);

        expect(component.find('input').prop('id')).toEqual('1234');
        expect(component.find('input').prop('type')).toEqual('text');
    });

    test('renders an input with custom css class and style', () => {
        const component = shallow(<Input style={{color: 'blue'}} className="input-group"/>);

        expect(component.find('.inputContainer').hasClass('input-group')).toBe(true);
        expect(component.find('input').prop('style')).toEqual({color: 'blue'});
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input onChange={func}/>);

        component.find('input').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });

    test('error classes get applied when input is not validated', () => {
        let inputValue = '';
        let status = null;

        const onChange = (e, data) => {
            inputValue = data.value;
        };

        const validate = (data) => {
            status = data.value ? data.value < 5 ? 'error' : '' : 'error';
        };

        const component = shallow(<Input status={status} validate={validate} onChange={onChange} value={inputValue}/>);

        component.find('input').simulate('blur');
        expect(component.find('input').hasClass('error')).toBeTruthy;

        component.find('input').simulate('change', { target: { value: 'text' }});
        expect(component.find('input').hasClass('error')).toBeTruthy;

        component.find('input').simulate('change', { target: { value: 'more text' }});
        expect(component.find('input').hasClass('error')).toBeFalsy;
    });

});
