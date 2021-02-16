import * as React from 'react';
import { Box } from '../Box/Box';
import Carousel from './Carousel';

import { mount } from 'enzyme';

describe('Carousel', () => {
    test('renders correctly', () => {
        const tree = mount(
            <Carousel>
                {[...Array(7)].map((item, i) => {
                    return (
                        <div style={{ padding: 10 }} key={i}>
                            <Box boxShadow="md" round="md" m={30} p={30}>{`Box ${i}`}</Box>
                        </div>
                    );
                })}
            </Carousel>
        );
        expect(tree).toMatchSnapshot();
    });
});
