import toJson from 'enzyme-to-json';
import * as React from 'react';
import H3 from './H3';

import { shallow } from 'enzyme';

describe('H3', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <H3
                className="myClass"
                style={{color: 'blue'}}
                id={'heading3'}
            >
                Mooskin
            </H3>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H3 id="Campaigns" className="headers">Mooo!</H3>);

        expect(component.find('h3').text()).toBe('Mooo!');
        expect(component.find('h3').prop('id')).toEqual('Campaigns');
        expect(component.find('h3').hasClass('headers')).toBe(true);
    });

});
