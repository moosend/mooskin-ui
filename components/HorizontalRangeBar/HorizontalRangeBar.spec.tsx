import * as React from 'react';
import HorizontalRangeBar from './HorizontalRangeBar';

import { shallow } from 'enzyme';

describe('HorizontalRangeBar', () => {

    test('renders properly into dom progress number', () => {
        const component = shallow(<HorizontalRangeBar progress={20}/>);

        expect(component.find('.loader-component').length).toBe(1);
        expect(component.find('.loader-component').text()).toBe('20');
    });

    test('renders properly with percentage even when the range is not 0-100', () => {
        const component = shallow(<HorizontalRangeBar progress={500} range={[0, 1000]}/>);

        expect(component.find('.loader-bar').prop('style').width).toBe('50%');
    });

    test('just the number should exceed the range of the bar', () => {
        const component = shallow(<HorizontalRangeBar progress={20} range={[0, 10]}/>);

        expect(component.find('.loader-component').text()).toBe('20');
        expect(component.find('.loader-bar').prop('style').width).toBe('100%');
    });
});
