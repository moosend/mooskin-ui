import moment from 'moment';
import * as React from 'react';
import DateSelect from './DateSelect';

import { mount, shallow } from 'enzyme';

describe('DatePicker', () => {
    test('renders other type of the component correctly', () => {
        const func = jest.fn();

        const tree = mount(<DateSelect onChangeSelect={func} format="12-Hour" type="hour" />);

        expect(tree).toMatchSnapshot();
    });

    test('creates select component for date related hours', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="24-Hour" type="hour" />);

        expect(component.find('SelectOption').length).toBe(24);
        expect(component.find('SelectOption').first().prop('value')).toEqual('0');
        expect(component.find('SelectOption').last().prop('value')).toEqual('23');
        expect(component.find('SelectOption').first().children().text()).toEqual('00');
        expect(component.find('SelectOption').last().children().text()).toEqual('23');
    });

    test('creates select component for date related hours (12-Hours)', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="12-Hour" type="hour" />);

        expect(component.find('SelectOption').length).toBe(24);
        expect(component.find('SelectOption').first().prop('value')).toEqual('0');
        expect(component.find('SelectOption').last().prop('value')).toEqual('23');
        expect(component.find('SelectOption').first().children().text()).toEqual('00 AM');
        expect(component.find('SelectOption').last().children().text()).toEqual('11 PM');
    });

    test('creates select component for minute selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="minute" />);

        expect(component.find('SelectOption').length).toBe(60);
        expect(component.find('SelectOption').first().prop('value')).toEqual('0');
        expect(component.find('SelectOption').last().prop('value')).toEqual('59');
        expect(component.find('SelectOption').first().children().text()).toEqual('00');
        expect(component.find('SelectOption').last().children().text()).toEqual('59');
    });

    test('creates select component for day of the month selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="1" type="month" />);

        expect(component.find('SelectOption').length).toBe(31);
        expect(component.find('SelectOption').first().prop('value')).toEqual('1');
        expect(component.find('SelectOption').last().prop('value')).toEqual('31');
        expect(component.find('SelectOption').first().children().text()).toEqual('1st');
        expect(component.find('SelectOption').last().children().text()).toEqual('31st');
    });

    test.skip('creates select component for day of the month (february) selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="2" type="month" />);

        expect(component.find('SelectOption').length).toBe(31);
        expect(component.find('SelectOption').first().prop('value')).toEqual('1');
        expect(component.find('SelectOption').last().prop('value')).toEqual('31');
        expect(component.find('SelectOption').first().children().text()).toEqual('1st');
        expect(component.find('SelectOption').last().children().text()).toEqual('31st');
    });

    test('creates select component for day of the week selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="week" />);

        expect(component.find('SelectOption').length).toBe(7);
        expect(component.find('SelectOption').first().prop('value')).toEqual('1');
        expect(component.find('SelectOption').last().prop('value')).toEqual('7');
        expect(component.find('SelectOption').first().children().text()).toEqual('Sunday');
        expect(component.find('SelectOption').last().children().text()).toEqual('Saturday');
    });

    test('creates select component for ordinal selection of days of the month', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="ordinal" />);

        expect(component.find('SelectOption').length).toBe(6);
        expect(component.find('SelectOption').first().prop('value')).toEqual('1');
        expect(component.find('SelectOption').last().prop('value')).toEqual('-1');
        expect(component.find('SelectOption').first().children().text()).toEqual('First');
        expect(component.find('SelectOption').last().children().text()).toEqual('Last');
    });
});
