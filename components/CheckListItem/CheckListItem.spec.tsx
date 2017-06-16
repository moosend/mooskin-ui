import * as React from 'react';
import {H2} from '../Headings';
import SmallIconButton from '../SmallIconButton';
import CheckListItem from './CheckListItem';

import { shallow } from 'enzyme';

describe('CheckListItem', () => {

    test('renders into dom with title text and status', () => {

        const component = shallow(<CheckListItem title="One Ring" text="Toss the One Ring into Mt. Doom" />);

        expect(component.find(H2).prop('children')).toBe('One Ring');
        expect(component.find('span').text()).toBe('Toss the One Ring into Mt. Doom');
        expect(component.find('i').hasClass('material-icons')).toBe(true);
        expect(component.find('i').text()).toBe('close');
    });

    test('callback function called when check item button is clicked', () => {
        const func = jest.fn();

        const component = shallow(<CheckListItem onClick={func} className={'myClass'} status/>);

        expect(component.find('i').text()).toBe('check');
        component.find(SmallIconButton).simulate('click');
        expect(func).toHaveBeenCalled();
    });

});
