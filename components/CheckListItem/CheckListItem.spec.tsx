import * as React from 'react';
import SmallIconButton from '../SmallIconButton';
import CheckListItem from './CheckListItem';

import { shallow } from 'enzyme';

describe('CheckListItem', () => {

    test('renders into dom with title text and status', () => {

        const component = shallow(<CheckListItem title="One Ring" text="Toss the One Ring into Mt. Doom" />);

        expect(component.find('div')).toHaveLength(3);
        expect(component.find('span').text()).toBe('Toss the One Ring into Mt. Doom');
        expect(component.find('i').hasClass('fa fa-times fa-lg')).toBe(true);
    });

    test('callback function called when check item button is clicked', () => {
        const func = jest.fn();

        const component = shallow(<CheckListItem onClick={func} className={'myClass'} status/>);

        expect(component.find('i').hasClass('fa fa-check fa-lg')).toBe(true);
        component.find(SmallIconButton).simulate('click');
        expect(func).toHaveBeenCalled();
    });

});
