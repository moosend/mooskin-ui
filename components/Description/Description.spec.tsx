import * as React from 'react';
import Description from './Description';

import { shallow } from 'enzyme';

describe('Description', () => {
    test('renders correctly', () => {
        const tree = shallow(<Description>Description here!</Description>);
        expect(tree).toMatchSnapshot();
    });
});
