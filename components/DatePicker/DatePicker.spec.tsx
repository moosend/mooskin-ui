import * as React from 'react';
import { DatePicker } from './DatePicker';

import { mount } from 'enzyme';

const fn = jest.fn();

describe('DatePicker', () => {
    test('renders correctly', () => {
        const tree = mount(<DatePicker value="01/02/2021" onChange={fn} />);
        expect(tree).toMatchSnapshot();
    });
});
