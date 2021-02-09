import * as React from 'react';
import TextArea from './TextArea';

import { shallow } from 'enzyme';

describe('TextArea', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(<TextArea value="asd" onChange={func} />);
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom and has Placeholder prop', () => {
        const component = shallow(<TextArea value="value" placeholder="username" />);

        expect(component.find('StyledTextArea').prop('placeholder')).toContain('username');
    });

    test('renders an input with a "required" prop and minlength', () => {
        const component = shallow(<TextArea value="value" minLength={5} required />);

        expect(component.find('StyledTextArea').prop('required')).toEqual(true);
        expect(component.find('StyledTextArea').prop('minLength')).toEqual(5);
    });

    test('renders an input with a passed value and maxlength', () => {
        const component = shallow(<TextArea value="random" maxLength={50} />);

        expect(component.find('StyledTextArea').prop('value')).toEqual('random');
        expect(component.find('StyledTextArea').prop('maxLength')).toEqual(50);
    });

    test('renders an input with custom css class and style', () => {
        const component = shallow(<TextArea value="value" style={{ color: 'blue' }} className="input-group" />);

        expect(component.find('StyledTextArea').hasClass('input-group')).toBe(true);
        expect(component.find('StyledTextArea').prop('style')).toEqual({ color: 'blue' });
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = shallow(<TextArea value="value" onChange={func} />);

        component.find('StyledTextArea').simulate('change', { target: { value: 'text' } });
        expect(func).toHaveBeenCalled();
    });
});
