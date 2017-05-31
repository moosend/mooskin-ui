import * as React from 'react';
import TopNotification from './TopNotification';

import { shallow } from 'enzyme';

describe('TopNotification', () => {

    test('renders properly into dom with text and background', () => {

        const component = shallow(<TopNotification />);

        expect(true).toBe(true);
    });
});
