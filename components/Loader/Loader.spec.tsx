import * as React from 'react';
import Loader from './Loader';

import { shallow } from 'enzyme';

describe('Loader', () => {
    test('renders correctly', () => {
        const tree = shallow(
            <Loader />
        );
        expect(tree).toMatchSnapshot();
    });
});
