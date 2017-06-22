import * as React from 'react';
import renderer from 'react-test-renderer';
import H3 from './H3';

import { shallow } from 'enzyme';

describe('H3', () => {

    it('renders correctly', () => {

        const tree = renderer.create(
            <H3
                className="myClass"
                style={{color: 'blue'}}
                id={'heading3'}
            >
                Mooskin
            </H3>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H3 id="Campaigns" className="headers">Mooo!</H3>);

        expect(component.find('h3').text()).toBe('Mooo!');
        expect(component.find('h3').prop('id')).toEqual('Campaigns');
        expect(component.find('h3').hasClass('headers')).toBe(true);
    });

});
