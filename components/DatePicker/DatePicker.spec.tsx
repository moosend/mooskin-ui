import moment from 'moment';
import * as React from 'react';
import DatePicker, {DateSelect} from './DatePicker';

import { mount, shallow } from 'enzyme';

describe('DatePicker', () => {

    test('renders correctly', () => {
        const func = jest.fn();
        // Date.now = jest.fn(() => new Date(moment.parseZone('2013-01-01T00:00:00-13:00').utcOffset()));

        const tree = shallow(
            <DatePicker
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'input1'}
                date={moment.parseZone('2013-01-01T00:00:00-13:00')}
                label="with a label ofc"
                required
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders other type of the component correctly', () => {
        const func = jest.fn();
        // Date.now = jest.fn(() => new Date(moment.parseZone('2013-01-01T00:00:00-13:00').utcOffset()));

        const tree = shallow(
            <DateSelect
                onChange={func}
                className="myClass"
                style={{color: 'blue'}}
                id={'input1'}
                format="12-Hour"
                type="hour"
                label="Hour"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with props', () => {
        // Date.now = jest.fn(() => new Date(moment.parseZone('2013-01-01T00:00:00-13:00').utcOffset()));

        const component = shallow(
            <DatePicker date={moment.parseZone('2013-01-01T00:00:00-13:00')} required/>
        );

        expect(component.find('InputMoment').prop('moment'))
        .toEqual(moment.parseZone('2013-01-01T00:00:00-13:00'));
        expect(component.find('input').prop('required')).toBeTruthy;
    });

    test('onChange callback is called when date is changed', () => {
        const func = jest.fn();

        const component = mount(<DatePicker onChange={func}/>);

        component.find('InputMoment').find('td').at(15).simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('onChange callback is NOT called when date is changed when disabled is passed', () => {
        const func = jest.fn();

        const component = mount(<DatePicker onChange={func} disabled/>);

        component.find('InputMoment').find('td').at(15).simulate('click');
        expect(func).not.toHaveBeenCalled();
    });

    test('datepicker shows when input is clicked and disappears when anywhere except datepicker is clicked', () => {
        const func = jest.fn();

        const component = shallow(<DatePicker onChange={func}/>);

        component.find('input').simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'block'});

        component.find('div').last().simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'none'});
    });

    test('applies relevant classes when the status prop is passed', () => {
        const func = jest.fn();

        const component = shallow(<DatePicker status="error" onChange={func}/>);

        expect(component.find('.error')).toBeTruthy;

    });

    test('datepicker to date only if dateOnly prop is passed', () => {
        const func = jest.fn();

        const component = mount(<DatePicker dateOnly onChange={func}/>);

        // expect(component.find('.ion-calendar').prop('style')).toEqual({display: 'none'});

    });

    test('creates select component for date related hours', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="24-Hour" type="hour" label="Hour (24H)" />);

        expect(component.find('Option').length).toBe(24);
        expect(component.find('Option').first().prop('value')).toEqual('0');
        expect(component.find('Option').last().prop('value')).toEqual('23');
        expect(component.find('Option').first().children().text()).toEqual('00');
        expect(component.find('Option').last().children().text()).toEqual('23');

    });

    test('creates select component for date related hours (12-Hours)', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="12-Hour" type="hour" label="Hour (12H)" />);

        expect(component.find('Option').length).toBe(24);
        expect(component.find('Option').first().prop('value')).toEqual('0');
        expect(component.find('Option').last().prop('value')).toEqual('23');
        expect(component.find('Option').first().children().text()).toEqual('00 AM');
        expect(component.find('Option').last().children().text()).toEqual('11 PM');

    });

    test('creates select component for minute selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="minute" />);

        expect(component.find('Option').length).toBe(60);
        expect(component.find('Option').first().prop('value')).toEqual('0');
        expect(component.find('Option').last().prop('value')).toEqual('59');
        expect(component.find('Option').first().children().text()).toEqual('00');
        expect(component.find('Option').last().children().text()).toEqual('59');

    });

    test('creates select component for day of the month selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="1" type="month" label="Day" />);

        expect(component.find('Option').length).toBe(31);
        expect(component.find('Option').first().prop('value')).toEqual('1');
        expect(component.find('Option').last().prop('value')).toEqual('31');
        expect(component.find('Option').first().children().text()).toEqual('1st');
        expect(component.find('Option').last().children().text()).toEqual('31st');

    });

    test('creates select component for day of the month (february) selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} format="2" type="month" label="Day" />);

        expect(component.find('Option').length).toBe(28);
        expect(component.find('Option').first().prop('value')).toEqual('1');
        expect(component.find('Option').last().prop('value')).toEqual('28');
        expect(component.find('Option').first().children().text()).toEqual('1st');
        expect(component.find('Option').last().children().text()).toEqual('28th');

    });

    test('creates select component for day of the week selection', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="week" />);

        expect(component.find('Option').length).toBe(7);
        expect(component.find('Option').first().prop('value')).toEqual('1');
        expect(component.find('Option').last().prop('value')).toEqual('7');
        expect(component.find('Option').first().children().text()).toEqual('Monday');
        expect(component.find('Option').last().children().text()).toEqual('Sunday');

    });

    test('creates select component for ordinal selection of days of the month', () => {
        const func = jest.fn();

        const component = shallow(<DateSelect onChange={func} type="ordinal" />);

        expect(component.find('Option').length).toBe(6);
        expect(component.find('Option').first().prop('value')).toEqual('1');
        expect(component.find('Option').last().prop('value')).toEqual('-1');
        expect(component.find('Option').first().children().text()).toEqual('First');
        expect(component.find('Option').last().children().text()).toEqual('Last');

    });
});
