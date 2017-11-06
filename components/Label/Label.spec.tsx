import * as React from 'react';
import Label from './Label';

import { shallow } from 'enzyme';

describe('Button', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Label
                className="myClass"
                style={{color: 'blue'}}
                id={'label'}
                abbreviate
            >
                Mooskin
            </Label>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders simple text with label styles', () => {

        const component = shallow(<Label>Mooskin</Label>);

        expect(component.find('div').text()).toBe('Mooskin');
    });

    test('renders simple numbers text', () => {

        const component = shallow(<Label>12345</Label>);

        expect(component.find('div').text()).toBe('12345');
    });

    test('abbreviates number values if type prop of number is passed (thousands)', () => {

        const component = shallow(<Label type="number">13400</Label>);

        expect(component.find('div').text()).toBe('13.4K');
    });

    test('abbreviates number values if type prop of number prop is passed (millions)', () => {

        const component = shallow(<Label type="number">3235942</Label>);

        expect(component.find('div').text()).toBe('3.2M');
    });

    test('abbreviates number values if type prop of number prop is passed (billions)', () => {

        const component = shallow(<Label type="number">6345153975</Label>);

        expect(component.find('div').text()).toBe('6.3B');
    });

    test('abbreviates number values if type prop of number prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label type="number">8675345876235</Label>);

        expect(component.find('div').text()).toBe('8.6T');
    });

    test('abbreviates number values and rounds them if type prop of round_number is passed (thousands)', () => {

        const component = shallow(<Label type="round_number">13400</Label>);

        expect(component.find('div').text()).toBe('13K');
    });

    test('abbreviates number values and rounds them if type prop of round_number is passed (millions)', () => {

        const component = shallow(<Label type="round_number">3235942</Label>);

        expect(component.find('div').text()).toBe('3M');
    });

    test('abbreviates number values and rounds them if type prop of round_number is passed (billions)', () => {

        const component = shallow(<Label type="round_number">6545153975</Label>);

        expect(component.find('div').text()).toBe('7B');
    });

    test('abbreviates number values and rounds them if type prop of round_number is passed (trillion)', () => {

        const component = shallow(<Label type="round_number">8675345876235</Label>);

        expect(component.find('div').text()).toBe('9T');
    });

});
