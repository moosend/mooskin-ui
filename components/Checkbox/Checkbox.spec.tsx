import * as React from 'react';
import renderer from 'react-test-renderer';
import CheckboxGroup, {CheckBox} from './Checkbox';

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

        const tree = shallow(
            <CheckBox
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
                <CheckBox value="checkbox1" label="dem labels" checked/>
            </CheckboxGroup>
        );

        expect(component.find(CheckBox).length).toBe(1);
        expect(component.find(CheckBox).prop('value')).toEqual('checkbox1');
        expect(component.find(CheckBox).prop('label')).toEqual('dem labels');
        expect(component.find(CheckBox).prop('id')).toEqual('0');
        expect(component.find(CheckBox).prop('checked')).toBeTruthy;
        expect(component.find('.myClass')).toBeTruthy;
        // expect(component.find('.myClass').prop('dataLabel')).toEqual('plan');
    });

    test('renders properly with multiple children', () => {

        const component = shallow(
            <CheckboxGroup >
                <CheckBox value="checkbox1" />
                <CheckBox value="checkbox2" />
                <CheckBox value="checkbox3" />
            </CheckboxGroup>
        );

        expect(component.find(CheckBox).last().prop('id')).toEqual('2');
        expect(component.find(CheckBox).length).toBe(3);
    });

    test('appends onClick callback to each checkbox', () => {
        const func = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func} style={{color: 'blue'}}>
                <CheckBox value="checkbox1" />
                <CheckBox value="checkbox2" checked/>
                <CheckBox value="checkbox3" />
            </CheckboxGroup>
        );

        // expect(component.find(CheckBoxGroup).prop('style')).toEqual({color: 'blue'});
        component.find(CheckBox).forEach((checkbox) => {
            expect(checkbox.prop('onClick')).toBeTruthy();
        });
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<CheckBox value="checkbox1" />);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('callback func is called when checkbox is clicked', () => {
        const func = jest.fn();
        const func2 = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func} >
                <CheckBox value="checkbox1" onClick={func2}/>
            </CheckboxGroup>
        );

        expect(component.find(CheckBox).simulate('click'));

        expect(func2).toHaveBeenCalled();
    });

    test('callback func is not called when a disabled checkbox is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <CheckboxGroup onChange={func}>
                <CheckBox value="checkbox1" disabled />
            </CheckboxGroup>
        );

        expect(component.find(CheckBox).prop('disabled')).toBeTruthy;
        expect(component.find(CheckBox).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });
});
