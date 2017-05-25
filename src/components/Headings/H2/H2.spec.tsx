import * as React from 'react';
import H2 from './H2';

import { shallow } from 'enzyme';

describe('H2', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H2>Mooo!</H2>);

        expect(component.find('h2').text()).toBe('Mooo!');
    });

});
