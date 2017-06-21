import * as React from 'react';
import TabbedContent from './TabbedContent';

import { shallow } from 'enzyme';

describe('TabbedContent', () => {

    test('renders TabbedContent properly according to snapshot', () => {

        const component = shallow(<TabbedContent id="5" className="mySwitch"/>);

        expect(component.find('.tabbed-content-component').length).toBe(1);
    });
});
