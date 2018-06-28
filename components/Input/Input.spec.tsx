import * as React from 'react';
import Input from './Input';

import { mount, shallow } from 'enzyme';

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

        const component = shallow(<Input value="value" placeholder="username"/>);

        expect(component.find('input').prop('placeholder')).toContain('username');
    });

    test('renders an input with a "required" prop and minlength', () => {
        const component = shallow(<Input value="value" minlength={5} required/>);

        expect(component.find('input').prop('required')).toEqual(true);
        expect(component.find('input').prop('minLength')).toEqual(5);
    });

    test('renders an input with a passed value and maxlength', () => {
        const component = shallow(<Input value="random" maxlength={50}/>);

        expect(component.find('input').prop('value')).toEqual('random');
        expect(component.find('input').prop('maxLength')).toEqual(50);
    });

    test('renders an input with id and type', () => {

        const component = shallow(<Input value="value" type="text" id="1234"/>);

        expect(component.find('input').prop('id')).toEqual('1234');
        expect(component.find('input').prop('type')).toEqual('text');
    });

    test('renders an input with custom css class and style', () => {
        const component = shallow(<Input value="value" style={{color: 'blue'}} className="input-group"/>);

        expect(component.find('.inputContainer').hasClass('input-group')).toBe(true);
        expect(component.find('.inputContainer').prop('style')).toEqual({color: 'blue'});
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<Input value="value" onChange={func}/>);

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
            if (data.value < 5){
                status = 'error';
                return false;
            }
            return true;
        };

        const component = mount(<Input status={status} validate={validate} onChange={onChange} value={inputValue}/>);

        component.find('input').simulate('blur');
        expect(component.find('.error')).toBeTruthy();

        component.find('input').simulate('change', { target: { value: 'text' }});
        component.setProps({status: 'error'});
        expect(component.find('.error')).toBeTruthy();

        component.find('input').simulate('change', { target: { value: 'more text' }});
        expect(component.find('.error')).toBeFalsy;
    });

    test('Icon is valid when icon prop is passed', () => {

        const component = shallow(<Input value="value" icon="check" />);

        expect(component.find('.icon').length).toBe(1);
    });

    test('clipboardButton is available when the prop is passed', () => {

        const component = mount(<Input value="value" clipboardButton="Copy Text" />);

        expect(component.find('Button').length).toBe(1);
    });

    test('emoji dropdown is available when emoji prop is passed', () => {

        const component = mount(<Input value="value" emoji />);

        expect(component.find('.dropDown').length).toBe(1);

        expect(component.find('.dropDown').prop('style')).toEqual({display: 'none'});

        expect(component.state('activeDropDown')).toBe(-1);

        component.find('.dropdown-icon').simulate('click');

        expect(component.state('activeDropDown')).toBe(0);

        expect(component.find('.dropDown').prop('style')).toEqual({display: 'block'});
    });

    test('both dropdowns are available when relevant props are passed', () => {

        const pers = [
            {
                label: 'Unsibscribe Link',
                value: '#unsubscribeLink#'
            },
            {
                label: 'Account Email',
                value: '#account:email#'
            }
        ];

        const component = mount(<Input value="value" personalizationTags={pers} emoji />);

        expect(component.find('.dropDown').length).toBe(2);

        expect(component.find('.dropDown').first().prop('style')).toEqual({display: 'none'});
        expect(component.find('.dropDown').last().prop('style')).toEqual({display: 'none'});

        expect(component.state('activeDropDown')).toBe(-1);

        component.find('.dropdown-icon').first().simulate('click');

        expect(component.state('activeDropDown')).toBe(0);

        expect(component.find('.dropDown').first().prop('style')).toEqual({display: 'block'});
        expect(component.find('.dropDown').last().prop('style')).toEqual({display: 'none'});

        component.find('.dropdown-icon').last().simulate('click');

        expect(component.state('activeDropDown')).toBe(1);

        expect(component.find('.dropDown').first().prop('style')).toEqual({display: 'none'});
        expect(component.find('.dropDown').last().prop('style')).toEqual({display: 'block'});
    });

    test('onChange callback is called when a personalization tag is clicked', () => {

        const func = jest.fn();

        const pers = [
            {
                label: 'Unsibscribe Link',
                value: '#unsubscribeLink#'
            },
            {
                label: 'Account Email',
                value: '#account:email#'
            }
        ];

        const component = mount(<Input onChange={func} value="value" personalizationTags={pers} />);

        expect(component.find('.dropDown').length).toBe(1);

        component.find('.tag').first().simulate('click');

        expect(func).toHaveBeenCalled();

    });

});
