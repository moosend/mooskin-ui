import toJson from 'enzyme-to-json';
import * as React from 'react';
import H2 from './H2';

import { shallow } from 'enzyme';

describe('H2', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <H2
                className="myClass"
                style={{color: 'blue'}}
                id={'heading2'}
            >
                Mooskin
            </H2>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H2 id="Campaigns" className="headers">Mooo!</H2>);

        expect(component.find('h2').text()).toBe('Mooo!');
        expect(component.find('h2').prop('id')).toEqual('Campaigns');
        expect(component.find('h2').hasClass('headers')).toBe(true);
    });

});
