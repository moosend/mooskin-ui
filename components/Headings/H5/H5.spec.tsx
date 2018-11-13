import * as React from 'react';
import H5 from './H5';

import { shallow } from 'enzyme';

describe('H5', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <H5
                className="myClass"
                style={{color: 'blue'}}
                id={'heading5'}
            >
                Mooskin
            </H5>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H5 id="Campaigns" className="headers">Mooo!</H5>);

        expect(component.find('p').text()).toBe('Mooo!');
        expect(component.find('p').prop('id')).toEqual('Campaigns');
        expect(component.find('p').hasClass('headers')).toBe(true);
    });

});
