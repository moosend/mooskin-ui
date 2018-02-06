import * as React from 'react';
import TextEditor from './TextEditor';

import { shallow } from 'enzyme';

describe('TextEditor', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <TextEditor />
        );
        expect(tree).toMatchSnapshot();
    });

});
