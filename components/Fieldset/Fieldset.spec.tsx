import * as React from 'react';
import Fieldset from './Fieldset';

import { shallow } from 'enzyme';

describe('Fieldset', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <Fieldset
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
                legend="Moosend"
            >
                Mooskin
            </Fieldset>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = shallow(
            <Fieldset className="myClass" legend="Moosend">
                Mooskin
            </Fieldset>
        );

        expect(component.children.length).toBe(1);
        expect(component.hasClass('.myClass')).toBeTruthy;
        expect(component.find('legend').text()).toEqual('Moosend');
    });

});
