import * as React from 'react';
import Switch from './Switch';

import { shallow } from 'enzyme';

describe('Switch', () => {

    test('renders a disabled Switch with custom css class and id', () => {

        const component = shallow(<Switch id="5" className="mySwitch" disabled/>);

        expect(component.find('div').hasClass('mySwitch')).toBe(true);
        expect(component.find('div').prop('id')).toEqual('5');
        expect(component.find('div').prop('disabled')).toBeTruthy;
    });

    test('renders an active Switch when a related task is already running', () => {

        const component = shallow(<Switch on/>);

        expect(component.find('label').text()).toEqual('ACTIVE');
    });

    test('onClick is not called when a disabled Switch is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Switch onClick={func} disabled/>);

        component.find('div').simulate('click');
        expect(func).not.toHaveBeenCalled();
    });

    test('onClick prop callback is called when the Switch is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Switch onClick={func}/>);

        component.find('div').simulate('click');
        expect(func).toHaveBeenCalled();
    });

});
