import * as React from 'react';
import Select, {Option} from './Select';

import {mount, shallow} from 'enzyme';

describe('Select', () => {

    test('renders Select correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Select
                onChange={func}
                selected="option1"
                dataLabel="plan"
                id="select1"
                label="Select something"
                placeholder="placeholder"
                className="myClass"
                style={{color: 'blue'}}
                description="with description"
                isLoading
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders Option correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Option value="option1" onClick={func}>Option1</Option>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly with 1 child', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
            </Select>
        );

        expect(component.find('.select-component').length).toBe(1);

        expect(component.find(Option).length).toBe(1);
    });

    test('renders properly with multiple children', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find(Option).length).toBe(2);
    });

    test('appends onClick callback to each Option', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        component.find(Option).forEach((option) => {
            expect(option.prop('onClick')).toBeTruthy();
        });
    });

    test('Option renders without onClick by default', () => {

        const component = shallow(<Option value="option1">Option1</Option>);

        expect(component.prop('onClick')).toBeFalsy();
    });

    test('opens the list when clicked with right mouse btn', () => {
        const func = jest.fn();

        const component = shallow(
            <Select onChange={func} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find('.options-container').prop('style')).toEqual({display: 'none'});

        component.find('.label-container').simulate('click', {button: 0});

        expect(component.find('.options-container').prop('style')).toEqual({display: 'block'});
    });

    test('applies correct classes when the related status is passed', () => {

        const component = shallow(
            <Select status={'error'} selected="option1" dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find('.error')).toBeTruthy;
    });

    test('text from prop is applied when there are no options available', () => {

        const component = shallow(
            <Select dataLabel="plan" emptySelectText="The select is empty" />
        );

        expect(component.find('.label-container').text()).toEqual('The select is empty');
    });

    test('adds alternate styles when prop is passed', () => {

        const component = mount(
            <Select selected="option1" alternate dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find('.options-container').hasClass('alternateOptions')).toBe(true);
        expect(component.find('.selectContainer').hasClass('alternateContainer')).toBe(true);
    });

    test('locks the Select when an option is selected, with the relevant prop', () => {

        const component = mount(
            <Select selected="option1" alternate lockSelected dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
            </Select>
        );

        expect(component.find('.lockContainer').length).toBe(1);
    });

    test('should be rendered as a multi select if the selected prop is an array', () => {

        let options = [
            'option1',
            'option3'
        ];

        const onChange = (e, data) => {
            options = data.value;
        };

        const component = mount(
            <Select selected={options} onChange={onChange} dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
                <Option value="option4">Option4</Option>
            </Select>
        );

        expect(component.find('i').length).toBe(2);
        expect(component.prop('selected')).toEqual(options);

        component.find('li').first().simulate('click');
        component.setProps({selected: options});

        expect(component.prop('selected')).toEqual(options);
        expect(component.find('i').length).toBe(1);

        component.find('li').at(1).simulate('click');
        component.setProps({selected: options});

        expect(component.prop('selected')).toEqual(options);
        expect(component.find('i').length).toBe(2);

        component.find('li').last().simulate('click');
        component.setProps({selected: options});

        expect(component.prop('selected')).toEqual(options);
        expect(component.find('i').length).toBe(3);
    });

    test('should call the onFilterChange callback when changing the filter input value', () => {

        const onFilterChange = jest.fn();

        const component = mount(
            <Select selected={'option1'} onFilterChange={onFilterChange} dataLabel="plan">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
                <Option value="option4">Option4</Option>
            </Select>
        );

        component.find('input').first().simulate('change', { target: { value: 'filter' }});

        expect(onFilterChange).toHaveBeenCalled();
    });
});
