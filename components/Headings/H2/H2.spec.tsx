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
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H2 id="Campaigns" className="headers">Mooo!</H2>);

        expect(component.find('div').text()).toBe('Mooo!');
        expect(component.find('div').prop('id')).toEqual('Campaigns');
        expect(component.find('div').hasClass('headers')).toBe(true);
    });

});
