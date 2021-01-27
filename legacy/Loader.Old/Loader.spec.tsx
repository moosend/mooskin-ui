import * as React from 'react';
import Loader from './Loader';

import { shallow } from 'enzyme';

describe('Loader', () => {

    test('renders correctly', () => {
        const tree = shallow(
            <Loader active />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders non-active Loader correctly', () => {
        const tree = shallow(
            <Loader active />
        );
        expect(tree).toMatchSnapshot();
    });

    test('Renders with custom loader and animation', () => {
        const component = shallow(
            <Loader
                active
                loader="someImage"
                animation="someAnimation"
            />
        );

        expect(component.find('img').prop('src')).toEqual('someImage');
        expect(component.find('img').prop('className')).toContain('someAnimation');

    });

});
