import * as React from 'react';
import Anchor from './Anchor';

import { mount } from 'enzyme';

describe('Anchor', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Anchor
                onClick={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'Anchor1'}
                href={'www.moosend.com'}
            >
                Mooskin
            </Anchor>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = mount(<Anchor href="https://www.moosend.com" onClick={func}>asd</Anchor>);

        expect(component.find('a').text()).toBe('asd');
    });

    test('renders a an Anchor with href', () => {
        const func = jest.fn();

        const component = mount(<Anchor onClick={func} href={'https://www.moosend.com'}>asd</Anchor>);

        expect(component.find('a').prop('href')).toBe('https://www.moosend.com');
    });

    test('onClick prop callback is called when clicked', () => {
        const func = jest.fn();

        const component = mount(<Anchor href="https://www.moosend.com" onClick={func}>asd</Anchor>);
        component.find('a').simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
