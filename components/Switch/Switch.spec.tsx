import * as React from 'react';
import Switch from './Switch';

import { shallow } from 'enzyme';

describe('Switch', () => {

    test('renders a disabled Switch with custom css class and id', () => {

        const component = shallow(<Switch id="5" className="mySwitch" disabled/>);

        expect(component.find('div').hasClass('mySwitch')).toBe(true);
        expect(component.find('div').prop('id')).toEqual('5');
        expect(component.find('input').prop('disabled')).toBeTruthy;
    });

    test('renders a Switch with disabled prop and default type', () => {

        const component = shallow(<Switch required checked/>);

        expect(component.find('label').prop('checked')).toBeTruthy;
        expect(component.find('input').prop('required')).toBeTruthy;
    });

    test('onChange prop callback is called when the Switch is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Switch onChange={func}/>);

        component.find('input').simulate('change', { target: { checked: true }});
        expect(func).toHaveBeenCalled();
    });

});
