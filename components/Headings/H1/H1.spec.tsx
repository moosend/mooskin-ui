import * as React from 'react';
import H1 from './H1';

import { shallow } from 'enzyme';

describe('H1', () => {

    it('renders correctly', () => {

        const tree = shallow(
            <H1
                className="myClass"
                style={{color: 'blue'}}
                id={'heading1'}
            >
                Mooskin
            </H1>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H1 id="Campaigns" className="headers">Mooo!</H1>);

        expect(component.find('h1').text()).toBe('Mooo!');
        expect(component.find('h1').prop('id')).toEqual('Campaigns');
        expect(component.find('h1').hasClass('headers')).toBe(true);
    });

});
