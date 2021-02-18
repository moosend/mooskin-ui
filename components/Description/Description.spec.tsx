import * as React from 'react';
import { Description } from './Description';

import { mount } from 'enzyme';

describe('Description', () => {
    test('renders correctly', () => {
        const tree = mount(<Description>Description here!</Description>);
        expect(tree).toMatchSnapshot();
    });
});
