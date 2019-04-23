import moment from 'moment';
import * as React from 'react';
import DateRange from './DateRange';

import { mount, shallow } from 'enzyme';

describe('DateRange', () => {

    test('renders correctly', () => {
        const func = jest.fn();
        // Date.now = jest.fn(() => new Date(moment.parseZone('2013-01-01T00:00:00-13:00').utcOffset()));

        const tree = shallow(
            <DateRange
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'input1'}
                date={{start: moment.parseZone('2013-01-01T00:00:00-13:00'), end: moment.parseZone('2013-01-01T00:00:00-13:00')}}
                label="with a label ofc"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with props', () => {
        // Date.now = jest.fn(() => new Date(moment.parseZone('2013-01-01T00:00:00-13:00').utcOffset()));

        const component = shallow(
            <DateRange date={{start: moment.parseZone('2013-01-01T00:00:00-13:00'), end: moment.parseZone('2013-01-01T00:00:00-13:00')}}/>
        );

        expect(component.find('InputMoment').first().prop('moment'))
        .toEqual(moment.parseZone('2013-01-01T00:00:00-13:00'));
        expect(component.find('InputMoment').last().prop('moment'))
        .toEqual(moment.parseZone('2013-01-01T00:00:00-13:00'));
    });

    test('onChange callback is called when date is changed', () => {
        const func = jest.fn();

        const component = mount(<DateRange date={{start: moment.parseZone('2013-01-01T00:00:00-13:00'), end: moment.parseZone('2013-01-01T00:00:00-13:00')}} onChange={func}/>);

        component.find('InputMoment').first().find('td').at(15).simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('datepicker shows when input is clicked and disappears when anywhere except dateRange is clicked', () => {
        const func = jest.fn();

        const component = shallow(<DateRange date={{start: moment.parseZone('2013-01-01T00:00:00-13:00'), end: moment.parseZone('2013-01-01T00:00:00-13:00')}} onChange={func}/>);

        component.find('input').simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'block'});

        component.find('div').last().simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'none'});
    });

    // test('calls onChange function when date select is clicked', () => {
    //     const func = jest.fn();

    //     const component = shallow(<DateRange onChange={func} date={{start: moment.parseZone('2013-01-01T00:00:00-13:00'), end: moment.parseZone('2013-01-01T00:00:00-13:00')}} />);

    //     component.find('Option').first().simulate('click');
    //     expect(func).toHaveBeenCalled();

    // });

});
