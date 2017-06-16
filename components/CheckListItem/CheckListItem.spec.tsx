import * as React from 'react';
import Button from '../Button/Button';
import CheckListItem from './CheckListItem';

import { shallow } from 'enzyme';

describe('CheckListItem', () => {

    test('renders into dom with title text and status', () => {

        const component = shallow(<CheckListItem title="One Ring" text="Toss the One Ring into Mt. Doom" />);

        expect(component.find('div')).toHaveLength(3);
        // expect(component.find('span').text()).toBe('Toss the One Ring into Mt. Doom');
    });

    // test('callback function called when check item button is clicked', () => {
    //     const func = jest.fn();

    //     const component = shallow(<CheckListItem onClick={func} className={'myClass'}/>);

    //     expect(component.find)
    //     component.find('Button').simulate('click');
    //     expect(func).toHaveBeenCalled();
    // });

    // test('renders an active Switch when a related task is already running', () => {

    //     const component = shallow(<Switch on/>);

    //     expect(component.find('label').text()).toEqual('ACTIVE');
    // });

    // test('onClick is not called when a disabled Switch is clicked', () => {
    //     const func = jest.fn();

    //     const component = shallow(<Switch onClick={func} disabled/>);

    //     component.find('div').simulate('click');
    //     expect(func).not.toHaveBeenCalled();
    // });

    // test('onClick prop callback is called when the Switch is clicked', () => {
    //     const func = jest.fn();

    //     const component = shallow(<Switch onClick={func}/>);

    //     component.find('div').simulate('click');
    //     expect(func).toHaveBeenCalled();
    // });

});
