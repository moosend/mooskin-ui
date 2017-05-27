import * as React from 'react';
import Switch from './Switch';

import { shallow } from 'enzyme';

describe('Switch', () => {

    test('renders an input with custom css class', () => {

        const component = shallow(<Switch className="mySwitch"/>);

        expect(component.find('label').find('div').hasClass('mySwitch')).toBe(true);
    });

});
