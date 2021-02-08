import * as React from 'react';
import Label from './Label';

import { mount } from 'enzyme';

describe('Label', () => {
    test('renders correctly', () => {
        const tree = mount(
            <Label>Label here!</Label>
        );
        expect(tree).toMatchSnapshot();
    });
});
