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

    // test('assigns minmax prop correctly and returns the expected value', () => {

    //     let value = 5;

    //     const onChange = (e, data) => {
    //         value = data.value;
    //     };

    //     const component = mount(<Input onChange={onChange} type="number" value={value} minmax={[32]} />);

    //     component.find('input').simulate('change', { target: { valueAsNumber: 7 }});

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(7);

    //     component.find('input').simulate('change', { target: { valueAsNumber: 35 }});

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(32);

    // });

    // test('assigns minmax prop correctly and returns the expected value, chapter 2', () => {

    //     let value = '5';

    //     const onChange = (e, data) => {
    //         value = data.value;
    //     };

    //     const component = mount(<Input onChange={onChange} type="number" value={value} minmax={[32, 153]} />);

    //     component.find('input').simulate('change', { target: { valueAsNumber: 7 }});

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(7);

    //     component.find('input').simulate('blur');

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(32);

    //     component.find('input').simulate('change', { target: { valueAsNumber: 99 }});

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(99);

    //     component.find('input').simulate('change', { target: { valueAsNumber: 170 }});

    //     component.setProps({value});

    //     expect(component.prop('value')).toEqual(153);

    // });

    test('close personalization tags dropdown when a personalization tag is added', () => {

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

        const component = shallow(<Input value="value" personalizationTags={pers}/>);

        expect(component.find('.dropDown').prop('style')).toEqual({display: 'none'});

        component.find('.dropdown-icon').simulate('click');

        expect(component.find('.dropDown').prop('style')).toEqual({display: 'block'});

        component.find('.tag').first().simulate('click');

        setTimeout(() => {
            expect(component.find('.dropDown').prop('style')).toEqual({display: 'none'});
        }, 100);

    });

    test('renders custom dropdown when relevant prop is passed', () => {

        const customDropdown = {
            content: [
                <div key={1}>Content 1</div>,
                <div key={2}>Content 2</div>,
                <div key={3}>Content 3</div>,
                <div key={4}>Content 4</div>,
                <div key={5}>Content 5</div>
            ],
            icon: 'https://s1.piq.land/2015/10/05/Fix77XEm3n3EfO1dObGIEAnO_400x400.png',
            title: 'Custom Dropdown',
        };

        const component = shallow(<Input value="value" customDropdowns={customDropdown}/>);

        expect(component.find('.dropDown').length).toEqual(1);

        expect(component.find('.dropDownLabel').text()).toEqual(customDropdown.title);

        expect(component.find('.dropDownContent').prop('children')).toEqual(customDropdown.content);

    });

    test('renders multiple custom dropdowns when relevant prop is passed', () => {

        const multipleDropdowns = [
            {
                content: [
                    <div key={1}>Content 1</div>,
                    <div key={2}>Content 2</div>,
                    <div key={3}>Content 3</div>,
                    <div key={4}>Content 4</div>,
                    <div key={5}>Content 5</div>
                ],
                icon: 'https://s1.piq.land/2015/10/05/Fix77XEm3n3EfO1dObGIEAnO_400x400.png',
                title: 'Custom Dropdown 1',
            },
            {
                content: [
                    <div key={1}>Content 1</div>,
                    <div key={2}>Content 2</div>,
                    <div key={3}>Content 3</div>,
                    <div key={4}>Content 4</div>,
                    <div key={5}>Content 5</div>
                ],
                icon: 'https://doitgeekly.files.wordpress.com/2016/01/22c04c094e328d92fc7488fc6e2262b3.jpg',
                title: 'Custom Dropdown 2',
            },
            {
                content: [
                    <div key={1}>Content 1</div>,
                    <div key={2}>Content 2</div>,
                    <div key={3}>Content 3</div>,
                    <div key={4}>Content 4</div>,
                    <div key={5}>Content 5</div>
                ],
                icon: 'https://s1.piq.land/2016/02/17/kmeRltKJo5wELTWFipYHl5je_400x400.png',
                title: 'Custom Dropdown 3',
            }
        ];

        const component = shallow(<Input value="value" customDropdowns={multipleDropdowns}/>);

        expect(component.find('.dropDown').length).toEqual(3);

        multipleDropdowns.forEach((dropdown, i = 1) => {
            expect(component.find('.dropDownLabel').at(i).text()).toEqual(dropdown.title);

            expect(component.find('.dropDownContent').at(i).prop('children')).toEqual(dropdown.content);
        });

    });

});
