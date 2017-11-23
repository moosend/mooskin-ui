import * as React from 'react';
import Loader from './Loader';

import { shallow } from 'enzyme';

describe('Loader', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Loader active />
        );
        expect(tree).toMatchSnapshot();
    });

});
