import * as React from 'react';
import renderer from 'react-test-renderer';
import H5 from './H5';

import { shallow } from 'enzyme';

describe('H5', () => {

    it('renders correctly', () => {
        const func = jest.fn();

        const tree = renderer.create(
            <H5
                className="myClass"
                style={{color: 'blue'}}
                id={'heading5'}
            >
                Mooskin
            </H5>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text, id and class', () => {

        const component = shallow(<H5 id="Campaigns" className="headers">Mooo!</H5>);

        expect(component.find('h5').text()).toBe('Mooo!');
        expect(component.find('h5').prop('id')).toEqual('Campaigns');
        expect(component.find('h5').hasClass('headers')).toBe(true);
    });

});
