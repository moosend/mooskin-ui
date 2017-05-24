import * as React from 'react';
import Input from './Input';

import { mount, render, shallow } from 'enzyme';

describe('Input', () => {

    test('renders properly into dom', () => {
        const func = jest.fn();

        const component = shallow(<Input>text</Input>);

        expect(component.find('input').text()).toBe('text');
    });

});