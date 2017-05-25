import * as React from 'react';
import H1 from './H1';

import { shallow } from 'enzyme';

describe('H1', () => {

    test('renders properly into dom with text', () => {

        const component = shallow(<H1>Mooo!</H1>);

        expect(component.find('h1').text()).toBe('Mooo!');
    });

});
