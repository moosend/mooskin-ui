import * as React from 'react';
import CheckboxGroup, {Checkbox} from './Checkbox';

import {mount, shallow} from 'enzyme';

describe('CheckBox', () => {

    test('renders CheckboxGroup correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const checked = [
            {
                checked: true,
                label: 'Checkbox1',
                value: 'Checkbox1'
            },
            {
                checked: false,
                label: 'Checkbox2',
                value: 'Checkbox2'
            },
            {
                checked: false,
                label: 'Checkbox3',
                value: 'Checkbox3'
            }
        ];

        const tree = mount(
            <CheckboxGroup
                selectedChecks={checked}
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

    // test('renders properly with 1 child', () => {

    //     Date.now = jest.fn(() => 1490760656000);
    //     Math.random = jest.fn(() => 222333444555);

    //     const checked = [
    //         {
    //             checked: true,
    //             label: 'Checkbox1',
    //             value: 'checkbox1'
    //         }
    //     ];

    //     const component = mount(
    //         <CheckboxGroup selectedChecks={checked} className="myClass" dataLabel="plan" />
    //     );

    //     expect(component.find(Checkbox).length).toBe(1);
    //     expect(component.find(Checkbox).prop('value')).toEqual('checkbox1');
    //     expect(component.find(Checkbox).prop('label')).toEqual('Checkbox1');
    //     expect(component.find(Checkbox).prop('checked')).toEqual(true);
    //     expect(component.find('.myClass')).toBeTruthy;
    //     // expect(component.find('.myClass').prop('dataLabel')).toEqual('plan');
    // });

    test('renders properly with multiple children', () => {

        const checked = [];

        const component = shallow(
            <CheckboxGroup selectedChecks={checked}>
                <Checkbox value="checkbox1" />
                <Checkbox value="checkbox2" />
                <Checkbox value="checkbox3" />
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).length).toBe(3);
        expect(component.find(Checkbox).first().prop('value')).toEqual('checkbox1');
    });

    test('renders properly with multiple children with props only', () => {

        const checked = [
            {
                checked: true,
                label: 'Checkbox1',
                value: 'Checkbox1'
            },
            {
                checked: false,
                label: 'Checkbox2',
                value: 'Checkbox2'
            },
            {
                checked: false,
                label: 'Checkbox3',
                value: 'Checkbox3'
            }
        ];

        const component = shallow(
            <CheckboxGroup selectedChecks={checked} />
        );

        expect(component.find(Checkbox).length).toBe(3);
        expect(component.find(Checkbox).first().prop('value')).toEqual('Checkbox1');
        expect(component.find(Checkbox).first().prop('checked')).toEqual(true);
    });

    test('appends onClick callback to each checkbox', () => {
        const func = jest.fn();

        const checked = [];

        const component = shallow(
            <CheckboxGroup selectedChecks={checked} onChange={func} style={{color: 'blue'}}>
                <Checkbox value="checkbox1" />
                <Checkbox value="checkbox2" checked/>
                <Checkbox value="checkbox3" />
            </CheckboxGroup>
        );

        // expect(component.find('CheckBoxGroup').prop('style')).toEqual({color: 'blue'});
        component.find(Checkbox).forEach((checkbox) => {
            expect(checkbox.prop('onClick')).toBeTruthy();
        });
        expect(component.find(Checkbox).at(1).prop('checked')).toEqual(true);
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Checkbox value="checkbox1" />);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('callback func is called when checkbox is clicked', () => {
        const func = jest.fn();
        const func2 = jest.fn();

        const checked = [];

        const component = shallow(
            <CheckboxGroup selectedChecks={checked} onChange={func} >
                <Checkbox value="checkbox1" onClick={func2}/>
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test('callback func is not called when a disabled checkbox is clicked', () => {
        const func = jest.fn();

        const checked = [];

        const component = shallow(
            <CheckboxGroup selectedChecks={checked} onChange={func}>
                <Checkbox value="checkbox1" disabled />
            </CheckboxGroup>
        );

        expect(component.find(Checkbox).prop('disabled')).toBeTruthy;
        expect(component.find(Checkbox).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });
});
