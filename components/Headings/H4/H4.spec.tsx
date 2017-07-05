import * as React from 'react';
import H4 from './H4';

import { shallow } from 'enzyme';

describe('H4', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <H4
                className="myClass"
                style={{color: 'blue'}}
                id={'heading4'}
            >
                Mooskin
            </H4>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H4 id="Campaigns" className="headers">Mooo!</H4>);

        expect(component.find('h4').text()).toBe('Mooo!');
        expect(component.find('h4').prop('id')).toEqual('Campaigns');
        expect(component.find('h4').hasClass('headers')).toBe(true);
    });

});
