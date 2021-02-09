import * as React from 'react';
import DateRange from './DateRange';

import { mount } from 'enzyme';

const fn = jest.fn();

describe('DateRange', () => {
    test('renders correctly', () => {
        Date.now = jest.fn(() => 1482363367071);
        const tree = mount(
            <DateRange
                onChange={fn}
                ranges={[
                    {
                        endDate: new Date(),
                        key: 'selection',
                        startDate: new Date()
                    }
                ]}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});
