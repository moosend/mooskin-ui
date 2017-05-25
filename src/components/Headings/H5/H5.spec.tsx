import * as React from 'react';
import H5 from './H5';

import { shallow } from 'enzyme';

describe('H5', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H5>Mooo!</H5>);

        expect(component.find('h5').text()).toBe('Mooo!');
    });

});
