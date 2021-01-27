import * as React from 'react';
import {Checkbox} from './Checkbox';

import {mount, shallow} from 'enzyme';
import { StyledCheckbox } from './styles';

describe('CheckBox', () => {

    test('renders CheckBox correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const tree = shallow(
            <Checkbox
                value="CheckBox1"
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                disabled
                label="This is CheckBox 1"
                id={'checkbox1'}
                checked
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Checkbox checked={false} label="asd" value="checkbox1" />);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test.skip('callback func is called when checkbox is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <Checkbox checked={false} label="asd" value="checkbox1" onClick={func}/>
        );

        expect(component.find('div').at(1).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test.skip('callback func is not called when a disabled checkbox is clicked', () => {
        const func = jest.fn();

        const checked = [];

        const component = shallow(
            <Checkbox checked={false} label="asd" value="checkbox1" disabled />
        );

        component.find('div').at(1).simulate('click');

        expect(func).not.toHaveBeenCalled();
    });
});
