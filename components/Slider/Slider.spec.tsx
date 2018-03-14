import * as React from 'react';
import Slider from './Slider';

import { mount, shallow } from 'enzyme';

describe('Slider', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Slider
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'Slider1'}
                value={4}
                range={[0, 10]}
                tooltip
                dataLabel="Slider"
                label="Slider Label"
                trackLabels
            >
                Mooskin
            </Slider>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders Slider with correct values correctly & callback function is challed on change', () => {
        const func = jest.fn();

        const component = mount(
            <Slider
                onChange={func}
                value={4}
                range={[0, 10]}
                tooltip
                label="Slider Label"
                trackLabels
            >
                Mooskin
            </Slider>
        );

        expect(component.find('input').prop('min')).toEqual(0);
        expect(component.find('input').prop('max')).toEqual(10);
        expect(component.find('input').prop('value')).toEqual(4);

        component.find('input').simulate('change', { target: { value: 1 }});
        expect(func).toHaveBeenCalled();

    });

    test('renders Slider with custom values correctly', () => {
        const func = jest.fn();

        const component = mount(
            <Slider
                onChange={func}
                value={'hello'}
                values={[34, 'hello', 60, 'moo']}
                label="Slider Label"
            >
                Mooskin
            </Slider>
        );

        expect(component.find('input').prop('min')).toEqual(0);
        expect(component.find('input').prop('max')).toEqual(3);
        expect(component.find('input').prop('value')).toEqual(1);

        expect(component.find('.trackLabels').length).toEqual(0);
        expect(component.find('.tooltip').length).toEqual(0);

    });

    test('renders track labels & tooltip correctly', () => {
        const func = jest.fn();

        const component = mount(
            <Slider
                onChange={func}
                value={'hello'}
                values={[34, 'hello', 60, 'moo']}
                label="Slider Label"
                trackLabels
                tooltip
            >
                Mooskin
            </Slider>
        );

        expect(component.find('.trackLabels').length).toEqual(1);
        expect(component.find('.trackLabel').length).toEqual(4);
        expect(component.find('span').first().text()).toEqual('34');
        expect(component.find('span').last().text()).toEqual('moo');

        expect(component.find('.tooltip').length).toEqual(1);
        expect(component.find('.tooltip').text()).toEqual('hello');

    });

});
