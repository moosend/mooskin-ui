import * as React from 'react';
import renderer from 'react-test-renderer';
import RadioGroup, {Radio} from './Radio';

import {shallow} from 'enzyme';

describe('Radio', () => {

    it('renders RadioGroup correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <RadioGroup
                onChange={func}
                selected="radio1"
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

    it('renders Radio correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => 1482363367071);

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
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly with 1 child', () => {

        const component = shallow(
            <RadioGroup selected="radio1" className="myClass" dataLabel="plan">
                <Radio value="radio1" id={'main'} label="dem labels" />
            </RadioGroup>
        );

        expect(component.find(Radio).length).toBe(1);
        expect(component.find(Radio).prop('value')).toEqual('radio1');
        expect(component.find(Radio).prop('label')).toEqual('dem labels');
        expect(component.find(Radio).prop('id')).toEqual('main');
        expect(component.find(Radio).prop('selected')).toEqual('radio1');
        expect(component.find('.myClass')).toBeTruthy;
        // expect(component.find('.myClass').prop('dataLabel')).toEqual('plan');
    });

    test('renders properly with multiple children', () => {

        const component = shallow(
            <RadioGroup selected="radio1">
                <Radio value="radio1" />
                <Radio value="radio2" />
                <Radio value="radio3" />
            </RadioGroup>
        );

        expect(component.find(Radio).length).toBe(3);
    });

    test('appends onClick callback to each Radio', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup onChange={func} selected="radio1" style={{color: 'blue'}}>
                <Radio value="radio1" />
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
            <RadioGroup onChange={func} >
                <Radio value="radio1" />
            </RadioGroup>
        );

        expect(component.find(Radio).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test('callback func is not called when a disabled Radio is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <RadioGroup onChange={func}>
                <Radio value="radio1" disabled />
            </RadioGroup>
        );

        expect(component.find(Radio).prop('disabled')).toBeTruthy;
        expect(component.find(Radio).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });
});
