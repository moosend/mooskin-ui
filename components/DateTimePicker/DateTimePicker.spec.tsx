import * as React from 'react';
import { DateTimePicker } from './DateTimePicker';

import { mount } from 'enzyme';

const fn = jest.fn();

describe('DateTimePicker', () => {
    test('renders correctly', () => {
        const tree = mount(<DateTimePicker value="01/02/2021" onChange={fn} />);
        expect(tree).toMatchSnapshot();
    });
});
