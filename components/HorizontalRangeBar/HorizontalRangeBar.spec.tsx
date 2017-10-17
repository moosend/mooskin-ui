// tslint:disable-next-line:no-reference
/// <reference path="../custom.d.ts"/>

import * as React from 'react';
import HorizontalRangeBar from './HorizontalRangeBar';

import { shallow } from 'enzyme';

describe('HorizontalRangeBar', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <HorizontalRangeBar
                progress={20}
                className="myClass"
                height={5}
                id="Range bar"
            />
        );
        expect(tree).toMatchSnapshot();
    });

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
        (global as any).console = {error: jest.fn()};
        const component = shallow(<HorizontalRangeBar progress={20} range={[0, 10]}/>);

        const bar = component.find('.loader-bar');

        expect(component.find('.loader-component').text()).toBe('20');

        expect(bar.prop('style')).toBeDefined();
        expect(bar.prop('style').width).toBe('100%');
        expect(console.error).toHaveBeenCalled();

    });
});
