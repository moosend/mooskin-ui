import * as React from 'react';
import IconButton from './IconButton';

import { shallow } from 'enzyme';

describe('SmallIconButton', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(<IconButton onClick={func}>close</IconButton>);
        expect(tree).toMatchSnapshot();
    });

    test('callback is called when clicked', () => {
        const func = jest.fn();

        const component = shallow(<IconButton onClick={func}>close</IconButton>);

        component.find('StyledIconButton').simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('renders a disabled button', () => {
        const func = jest.fn();

        const component = shallow(
            <IconButton onClick={func} disabled>
                close
            </IconButton>
        );

        component.find('StyledIconButton').simulate('click');
        expect(func).not.toHaveBeenCalled();
    });
});
