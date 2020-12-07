import * as React from 'react';
import Alert, {AlertCloseButton, AlertDescription, AlertIcon, AlertTitle} from './Alert';

import { mount } from 'enzyme';
import Box from '../Box/Box';

const fn = jest.fn();

describe('Alert', () => {

    test('renders correctly', () => {
        const tree = mount(
            <Alert variant="left-accent">
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
                <AlertCloseButton onClick={fn} position="absolute" right="8px" top="8px" />
            </Alert>
        );
        expect(tree).toMatchSnapshot();
    });

    test('Status and Variant are inherited by alert children', () => {
        const tree = mount(
            <Alert variant="left-accent" status="success">
                <AlertIcon />
                <Box>
                    <AlertTitle>Your browser is outdated!</AlertTitle>
                    <AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
                    <AlertCloseButton onClick={fn} position="absolute" right="8px" top="8px" />
                </Box>
            </Alert>
        );

        expect(tree.find(AlertTitle).prop('status')).toEqual('success');
        expect(tree.find(AlertTitle).prop('variant')).toEqual('left-accent');

        expect(tree.find(AlertDescription).prop('status')).toEqual('success');
        expect(tree.find(AlertDescription).prop('variant')).toEqual('left-accent');

        expect(tree.find(AlertCloseButton).prop('status')).toEqual('success');
        expect(tree.find(AlertCloseButton).prop('variant')).toEqual('left-accent');
    });

    test('calls callback on close click', () => {
        const tree = mount(
            <Alert variant="left-accent">
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
                <AlertCloseButton onClick={fn} position="absolute" right="8px" top="8px" />
            </Alert>
        );

        tree.find(AlertCloseButton).simulate('click');
        expect(fn).toHaveBeenCalled();
    });

});
