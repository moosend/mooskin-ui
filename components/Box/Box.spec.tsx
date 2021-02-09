import * as React from 'react';
import { Box } from './Box';

import { shallow } from 'enzyme';

describe('Box', () => {
    test('renders Box correctly', () => {
        const tree = shallow(
            <Box align="baseline" p={5} m={5}>
                Box
            </Box>
        );
        expect(tree).toMatchSnapshot();
    });
});
