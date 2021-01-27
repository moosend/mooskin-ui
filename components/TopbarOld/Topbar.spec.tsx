import * as React from 'react';
import Topbar from './Topbar';

import { shallow } from 'enzyme';

describe('Topbar', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Topbar
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                Mooskin
            </Topbar>
        );
        expect(tree).toMatchSnapshot();

        expect(tree.find('div').text()).toBe('Mooskin');
    });

});
