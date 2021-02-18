import * as React from 'react';
import { DateRange } from './DateRange';

import { mount } from 'enzyme';

const fn = jest.fn();

describe('DateRange', () => {
    test('renders correctly', () => {
        const mockDate = new Date(1466424490000);
        const tree = mount(
            <DateRange
                onChange={fn}
                ranges={[
                    {
                        endDate: mockDate,
                        key: 'selection',
                        startDate: mockDate
                    }
                ]}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});
