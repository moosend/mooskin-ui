import * as React from 'react';
import H3 from './H3';

import { shallow } from 'enzyme';

describe('H3', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H3>Mooo!</H3>);

        expect(component.find('h3').text()).toBe('Mooo!');
    });

});
