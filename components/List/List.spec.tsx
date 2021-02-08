import * as React from 'react';
import { Button } from '../Button/Button';
import {List, ListItem, ListItemBody, ListItemEnd, ListItemHead} from './List';

import { mount } from 'enzyme';
import Box from '../Box/Box';

const fn = jest.fn();

describe('Alert', () => {

    test('renders correctly', () => {
        const tree = mount(
            <List>

                <ListItem>
                    <ListItemHead>
                        <img
                            src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
                            style={{display: 'block'}}
                            width={50}
                        />
                    </ListItemHead>
                    <ListItemBody>
                        <Box fontWeight="600" fontSize={16}>
                            Some Bold Text
                        </Box>
                        <Box fontSize={12}>
                            Test test test test test, Test test test test test, Test test test test test,
                            Test test test test test, Test test test test test, Test test test test test.
                        </Box>
                    </ListItemBody>
                    <ListItemEnd>
                        <Button>
                            Button
                        </Button>
                    </ListItemEnd>
                </ListItem>
                <ListItem>
                    <ListItemHead>
                        <img
                            src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
                            style={{display: 'block'}}
                            width={50}
                        />
                    </ListItemHead>
                    <ListItemBody>
                        <Box fontWeight="600" fontSize={16}>
                            Some Bold Text
                        </Box>
                        <Box fontSize={12}>
                            Test test test test test, Test test test test test, Test test test test test,
                            Test test test test test, Test test test test test, Test test test test test.
                        </Box>
                    </ListItemBody>
                    <ListItemEnd>
                        <Button>
                            Button
                        </Button>
                    </ListItemEnd>
                </ListItem>
                <ListItem>
                    <ListItemHead>
                        <img
                            src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
                            style={{display: 'block'}}
                            width={50}
                        />
                    </ListItemHead>
                    <ListItemBody>
                        <Box fontWeight="600" fontSize={16}>
                            Some Bold Text
                        </Box>
                        <Box fontSize={12}>
                            Test test test test test, Test test test test test, Test test test test test,
                            Test test test test test, Test test test test test, Test test test test test.
                        </Box>
                    </ListItemBody>
                    <ListItemEnd>
                        <Button>
                            Button
                        </Button>
                    </ListItemEnd>
                </ListItem>
            </List>
        );
        expect(tree).toMatchSnapshot();
    });

});
