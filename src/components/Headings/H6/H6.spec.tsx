import * as React from 'react';
import H6 from './H6';

import { shallow } from 'enzyme';

describe('H6', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H6>Mooo!</H6>);

        expect(component.find('h6').text()).toBe('Mooo!');
    });

});
