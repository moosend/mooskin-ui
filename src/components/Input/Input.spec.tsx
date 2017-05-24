import * as React from 'react';
import Input from './Input';

import { mount, render, shallow } from 'enzyme';

describe('Button', () => {

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = shallow(<Input>text</Input>);

        expect(component.find('input').text()).toBe('text');
    });

});