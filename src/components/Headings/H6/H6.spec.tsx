import * as React from 'react';
import H6 from './H6';

import { shallow } from 'enzyme';

describe('H6', () => {

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H6 id="Campaigns" className="headers">Mooo!</H6>);

        expect(component.find('h6').text()).toBe('Mooo!');
        expect(component.find('h6').prop('id')).toEqual('Campaigns');
        expect(component.find('h6').hasClass('headers')).toBe(true);
    });

});
