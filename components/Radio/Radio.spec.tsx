import * as React from 'react';
import renderer from 'react-test-renderer';
import RadioGroup, {Radio} from './Radio';

import {mount, shallow} from 'enzyme';

describe('Radio', () => {

    test('renders RadioGroup correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const selected = [
            {
                label: 'Radio1',
                selected: true,
                value: 'Radio1'
            },
            {
                label: 'Radio2',
                selected: false,
                value: 'Radio2'
            },
            {
                label: 'Radio3',
                selected: false,
                value: 'Radio3'
            }
        ];

        const tree = mount(
            <RadioGroup
                selectedRadios={selected}
                onChange={func}
                dataLabel="plan"
                id="radio1"
                className="myClass"
                style={{color: 'blue'}}
                spacing={10}
                title={'Select a plan'}
                vertical
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Radio correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const tree = shallow(
            <Radio
                value="radio1"
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                disabled
                label="This is radio 1"
                vertical
                id={'radio1'}
                selected
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly with 1 child', () => {

        const selected = [];

        const component = shallow(
            <RadioGroup selectedRadios={selected} className="myClass" dataLabel="plan">
                <Radio value="radio1" id={'main'} label="dem labels" selected/>
            </RadioGroup>
        );

        expect(component.find(Radio).length).toBe(1);
        expect(component.find(Radio).prop('value')).toEqual('radio1');
        expect(component.find(Radio).prop('label')).toEqual('dem labels');
        expect(component.find(Radio).prop('id')).toEqual('main');
        expect(component.find(Radio).prop('selected')).toBeTruthy;
        expect(component.find('.myClass')).toBeTruthy;
        // expect(component.find('.myClass').prop('dataLabel')).toEqual('plan');
    });

    test('renders properly with multiple children', () => {

        const selected = [
            {
                label: 'Radio1',
                selected: false,
                value: 'Radio1'
            },
            {
                label: 'Radio2',
                selected: true,
                value: 'Radio2'
            },
            {
                label: 'Radio3',
                selected: false,
                value: 'Radio3'
            }
        ];

        const component = shallow(
            <RadioGroup selectedRadios={selected} />
        );

        expect(component.find(Radio).length).toBe(3);
        expect(component.find(Radio).first().prop('selected')).toBeFalsy;
        expect(component.find(Radio).at(1).prop('selected')).toBeTruthy;
    });

    test('appends onClick callback to each Radio', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup selectedRadios={[]} onChange={func} style={{color: 'blue'}}>
                <Radio value="radio1" selected/>
                <Radio value="radio2" />
                <Radio value="radio3" />
            </RadioGroup>
        );

        // expect(component.find(RadioGroup).prop('style')).toEqual({color: 'blue'});
        component.find(Radio).forEach((radio) => {
            expect(radio.prop('onClick')).toBeTruthy();
        });
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Radio value="radio1" />);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('callback func is called when Radio is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup selectedRadios={[]} onChange={func} >
                <Radio value="radio1" />
            </RadioGroup>
        );

        expect(component.find(Radio).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test('callback func is not called when a disabled Radio is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup selectedRadios={[]} onChange={func}>
                <Radio value="radio1" disabled />
            </RadioGroup>
        );

        expect(component.find(Radio).prop('disabled')).toBeTruthy;
        expect(component.find(Radio).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });

    test('Selected is assigned to the first radio if none is has selected prop', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup selectedRadios={[]} onChange={func}>
                <Radio value="radio1" />
                <Radio value="radio2" />
            </RadioGroup>
        );

        expect(component.find(Radio).first().prop('selected')).toBeTruthy;

        expect(component.find(Radio).first().dive().find('input').simulate('click'));

        expect(component.find(Radio).first().prop('selected')).toBeTruthy;
    });
});
