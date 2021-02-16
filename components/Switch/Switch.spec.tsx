import * as React from 'react';
import Switch from './Switch';

import { mount } from 'enzyme';

describe('Switch', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(<Switch style={{ color: 'blue' }} onClickSwitch={func} active text="Switch" />);
        expect(tree).toMatchSnapshot();
    });

    test('renders a disabled Switch with custom css class and id', () => {
        const component = mount(<Switch text="INCOMPLETE" disabled />);

        expect(component.find('StyledSwitchLabelDisabled').length).toEqual(1);
    });

    test('onClick is not called when a disabled Switch is clicked', () => {
        const func = jest.fn();

        const component = mount(<Switch text="INCOMPLETE" disabled onClickSwitch={func} />);

        component.find('StyledSwitch').simulate('click');
        expect(func).not.toHaveBeenCalled();
    });

    test('onClick prop callback is called when the Switch is clicked', () => {
        const func = jest.fn();

        const component = mount(<Switch text="Inactive" onClickSwitch={func} />);

        component.find('StyledSwitch').simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
