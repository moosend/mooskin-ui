import * as React from 'react';
import H4 from './H4';

import { shallow } from 'enzyme';

describe('H4', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H4>Mooo!</H4>);

        expect(component.find('h4').text()).toBe('Mooo!');
    });

});
