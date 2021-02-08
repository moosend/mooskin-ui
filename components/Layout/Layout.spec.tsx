import * as React from 'react';
import { Box } from '../Box/Box';
import {Layout} from './Layout';

import { mount } from 'enzyme';

describe('Layout', () => {

    test('renders correctly', () => {
        const tree = mount(
            <Layout>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
                <Box p={30} round="sm" boxShadow="md">
                    Box
                </Box>
            </Layout>
        );
        expect(tree).toMatchSnapshot();
    });

});
