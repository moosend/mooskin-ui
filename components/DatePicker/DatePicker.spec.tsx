import toJson from 'enzyme-to-json';
import moment from 'moment';
import * as React from 'react';
import DatePicker from './DatePicker';

import { shallow } from 'enzyme';

describe('DatePicker', () => {

    test('renders correctly', () => {
        const func = jest.fn();
        Date.now = jest.fn(() => new Date(Date.UTC(2017, 0, 1)).valueOf());

        const tree = shallow(
            <DatePicker
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'input1'}
                date={moment()}
                label="with a label ofc"
                required
            />
        );
        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders properly into dom with props', () => {
        Date.now = jest.fn(() => new Date(Date.UTC(2017, 0, 1)).valueOf());

        const component = shallow(<DatePicker date={moment()} required/>);

        expect(component.find('InputMoment').prop('moment')).toEqual(moment());
        expect(component.find('input').prop('required')).toBeTruthy;
    });

    test('onChange callback is called when date is changed', () => {
        const func = jest.fn();

        const component = shallow(<DatePicker onChange={func}/>);

        component.find('InputMoment').dive().filter('td').at(1).simulate('click');
        expect(func).toHaveBeenCalled;
    });

    test('onChange callback is NOT called when date is changed when disabled is passed', () => {
        const func = jest.fn();

        const component = shallow(<DatePicker onChange={func} disabled/>);

        component.find('InputMoment').dive().filter('td').at(1).simulate('click');
        expect(func).toHaveBeenCalled;
    });

    test('datepicker shows when input is clicked and disappears when anywhere except datepicker is clicked', () => {
        const func = jest.fn();

        const component = shallow(<DatePicker onChange={func}/>);

        component.find('input').simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'block'});

        component.find('div').last().simulate('click');
        expect(component.find('div').at(2).prop('style')).toEqual({display: 'none'});
    });

});
