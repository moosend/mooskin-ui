import * as React from 'react';
import {Box} from './Box';

import {shallow} from 'enzyme';

const boxStyle = {
    height: 40,
    width: 40
};

describe('Box', () => {

    test('renders Box correctly', () => {

        const tree = shallow(
            <Box>
                Box
            </Box>
        );

        expect(tree).toMatchSnapshot();
    });

});
