import * as React from 'react';
import Switch from './Switch';

import { shallow } from 'enzyme';

describe('Switch', () => {

    test('renders a Switch with custom css class and id', () => {

        const component = shallow(<Switch id="5" className="mySwitch" required/>);

        expect(component.find('div').hasClass('mySwitch')).toBe(true);
        expect(component.find('label').prop('id')).toEqual('5');
        expect(component.find('input').prop('required')).toBeTruthy;
    });

    test('renders a Switch with disabled prop and default type', () => {

        const component = shallow(<Switch disabled/>);

        expect(component.find('label').prop('disabled')).toBeTruthy;
        expect(component.find('input').prop('type')).toEqual('checkbox');
    });

    test('onChange prop callback is called when the Switch is clicked', () => {
        const func = jest.fn();

        const component = shallow(<Switch onChange={func}/>);

        component.find('input').simulate('change', { target: { checked: true }});
        expect(func).toHaveBeenCalled();
    });

});
