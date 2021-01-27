import * as React from 'react';
import ClipboardButton from './ClipboardButton';

import { shallow } from 'enzyme';

describe('ClipboardButton.spec', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <ClipboardButton
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                label={'some label'}
                value="Input value"
            >
                Mooskin
            </ClipboardButton>
        );
        expect(tree).toMatchSnapshot();

        // expect(tree.find('Button').prop('children')).toBe('some label');

        // tree.find('Button').simulate('click');

        // expect(func).toHaveBeenCalled();
    });

});
