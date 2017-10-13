import * as React from 'react';
import CheckboxGroup, {Checkbox} from './Checkbox';

import {shallow} from 'enzyme';

describe('CheckBox', () => {

    test('renders CheckboxGroup correctly', () => {
        const func = jest.fn();

        const checked = {
            values: ['Checkbox1', 'Checkbox3']
        };

        const tree = shallow(
            <CheckboxGroup
                onChange={func}
                dataLabel="plan"
                id="checkbox1"
                className="myClass"
                style={{color: 'blue'}}
                spacing={10}
                title={'Select a plan'}
                horizontal
            />
        );

        expect(tree).toMatchSnapshot();
    });

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

    test('renders properly with 1 child', () => {

        const component = shallow(
            <CheckboxGroup className="myClass" dataLabel="plan">
                <Checkbox value="checkbox1" id="checky" label="dem labels" checked/>
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).length).toBe(1);
        expect(component.find(Checkbox).prop('value')).toEqual('checkbox1');
        expect(component.find(Checkbox).prop('label')).toEqual('dem labels');
        expect(component.find(Checkbox).prop('id')).toEqual('checky');
        expect(component.find(Checkbox).prop('checked')).toBeTruthy;
        expect(component.find('.myClass')).toBeTruthy;
        // expect(component.find('.myClass').prop('dataLabel')).toEqual('plan');
    });

    test('renders properly with multiple children', () => {

        const component = shallow(
            <CheckboxGroup >
                <Checkbox value="checkbox1" />
                <Checkbox value="checkbox2" />
                <Checkbox value="checkbox3" />
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).length).toBe(3);
    });

    test('appends onClick callback to each checkbox', () => {
        const func = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func} style={{color: 'blue'}}>
                <Checkbox value="checkbox1" />
                <Checkbox value="checkbox2" checked/>
                <Checkbox value="checkbox3" />
            </CheckboxGroup>
        );

        // expect(component.find(CheckBoxGroup).prop('style')).toEqual({color: 'blue'});
        component.find(Checkbox).forEach((checkbox) => {
            expect(checkbox.prop('onClick')).toBeTruthy();
        });
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Checkbox value="checkbox1" />);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('callback func is called when checkbox is clicked', () => {
        const func = jest.fn();
        const func2 = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func} >
                <Checkbox value="checkbox1" onClick={func2}/>
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test('callback func is not called when a disabled checkbox is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func}>
                <Checkbox value="checkbox1" disabled />
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).prop('disabled')).toBeTruthy;
        expect(component.find(Checkbox).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });
});
