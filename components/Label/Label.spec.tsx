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

    test('abbreviates numerical value if abbreviate prop is passed (thousands)', () => {

        const component = shallow(<Label abbreviate>13400</Label>);

        expect(component.find('div').text()).toBe('13.4K');
    });

    test('abbreviates numerical value if abbreviate prop is passed (millions)', () => {

        const component = shallow(<Label abbreviate>3235942</Label>);

        expect(component.find('div').text()).toBe('3.2M');
    });

    test('abbreviates numerical value if abbreviate prop is passed (billions)', () => {

        const component = shallow(<Label abbreviate>6345153975</Label>);

        expect(component.find('div').text()).toBe('6.3B');
    });

    test('abbreviates numerical value if abbreviate prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label abbreviate>8675345876235</Label>);

        expect(component.find('div').text()).toBe('8.6T');
    });

    test('rounds to the nearest thousand when round prop is passed (thousands)', () => {

        const component = shallow(<Label round>13400</Label>);

        expect(component.find('div').text()).toBe('13000');
    });

    test('rounds to the nearest million when round prop is passed (millions)', () => {

        const component = shallow(<Label round>3235942</Label>);

        expect(component.find('div').text()).toBe('3000000');
    });

    test('rounds to the nearest billion when round prop is passed (billions)', () => {

        const component = shallow(<Label round>6345153975</Label>);

        expect(component.find('div').text()).toBe('6000000000');
    });

    test('rounds to the nearest trillion when round prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label round>8675345876235</Label>);

        expect(component.find('div').text()).toBe('9000000000000');
    });

    test('abbreviates and rounds numerical values if both props are passed (thousands)', () => {

        const component = shallow(<Label abbreviate round>13400</Label>);

        expect(component.find('div').text()).toBe('13K');
    });

    test('abbreviates and rounds numerical values if both props are passed (millions)', () => {

        const component = shallow(<Label abbreviate round>3235942</Label>);

        expect(component.find('div').text()).toBe('3M');
    });

    test('abbreviates and rounds numerical values if both props are passed (billions)', () => {

        const component = shallow(<Label abbreviate round>6545153975</Label>);

        expect(component.find('div').text()).toBe('7B');
    });

    test('abbreviates and rounds numerical values if both props are passed (trillion)', () => {

        const component = shallow(<Label abbreviate round>8675345876235</Label>);

        expect(component.find('div').text()).toBe('9T');
    });

});
