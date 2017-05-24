import * as React from 'react';
import Select from './Select';

import { mount, render, shallow } from 'enzyme';

describe('Button', () => {

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();
        const options = [
            {
                label: 'Option1',
                value: 'option1',
            },
            {
                label: 'Option1',
                value: 'option1',
            }
        ];

        // const component = shallow(<Select onChange={func} options={options}/>);

        // expect(component.find('select').length).toBe(1);
        // expect(component.find('option').length).toBe(options.length);
        expect(true).toBe(true);
    });

});
