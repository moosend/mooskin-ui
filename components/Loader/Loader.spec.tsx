import * as React from 'react';
import Loader from './Loader';

import { mount } from 'enzyme';

describe('Loader', () => {
    test('renders correctly', () => {
        const tree = mount(<Loader />);
        expect(tree).toMatchSnapshot();
    });
});
