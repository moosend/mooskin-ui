import * as React from 'react';
import TextArea from './TextArea';

import { mount, shallow } from 'enzyme';

describe('TextArea', () => {

    test('renders correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);

        const tree = mount(
            <TextArea
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'textarea'}
                value="textarea value"
                placeholder="textarea placeholder"
                maxlength={50}
                minlength={10}
                name="textarea name"
                description="just some textarea"
                label="with a label ofc"
                labelWidth={30}
                cols={40}
                rows={10}
                required
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom and has Placeholder, rows and cols props', () => {

        const component = mount(<TextArea placeholder="username" rows={30} cols={50}/>);

        expect(component.find('textarea').prop('placeholder')).toContain('username');
        expect(component.find('textarea').prop('rows')).toEqual(30);
        expect(component.find('textarea').prop('cols')).toEqual(50);
    });

    test('renders an textarea with a "required" prop and minlength', () => {
        const component = mount(<TextArea minlength={5} required/>);

        expect(component.find('textarea').prop('required')).toEqual(true);
        expect(component.find('textarea').prop('minLength')).toEqual(5);
    });

    test('renders an textarea with a passed value and maxlength', () => {
        const component = mount(<TextArea value="random" maxlength={50}/>);

        expect(component.find('textarea').prop('value')).toEqual('random');
        expect(component.find('textarea').prop('maxLength')).toEqual(50);
    });

    test('renders an textarea with id', () => {

        const component = mount(<TextArea id="1234"/>);

        expect(component.find('textarea').prop('id')).toEqual('1234');
    });

    test('renders an textarea with custom css class and style', () => {
        const component = mount(<TextArea style={{color: 'blue'}} className="textarea-group"/>);

        expect(component.find('.areaContainer').hasClass('textarea-group')).toBe(true);
        expect(component.find('textarea').prop('style')).toEqual({color: 'blue'});
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = mount(<TextArea onChange={func}/>);

        component.find('textarea').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });

    test('onChange prop callback is called when a key is pressed', () => {

        const component = mount(<TextArea richEditor/>);
        expect(component.find('textarea')).toBeFalsy;

        expect(component.find('div').first().hasClass('rdw-editor-wrapper')).toBeTruthy;
    });

    test('error classes get applied when textarea is not validated', () => {
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

        const component = mount(
            <TextArea status={status} validate={validate} onChange={onChange} value={inputValue}/>
        );

        component.simulate('blur');
        expect(component.find('textarea').hasClass('error')).toBeTruthy;

        component.find('textarea').simulate('change', { target: { value: 'text' }});
        expect(component.find('textarea').hasClass('error')).toBeTruthy;

        component.find('textarea').simulate('change', { target: { value: 'more text' }});
        expect(component.find('textarea').hasClass('error')).toBeFalsy;
    });

});
