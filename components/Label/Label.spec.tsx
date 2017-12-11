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

        expect(component.find('span').text()).toBe('Mooskin');
    });

    test('renders simple numbers text', () => {

        const component = shallow(<Label>12345</Label>);

        expect(component.find('span').text()).toBe('12345');
    });

    test('abbreviates numerical value if abbreviate prop is passed (thousands)', () => {

        const component = shallow(<Label abbreviate>13400</Label>);

        expect(component.find('span').text()).toBe('13.4K');
    });

    test('abbreviates numerical value if abbreviate prop is passed (millions)', () => {

        const component = shallow(<Label abbreviate>3235942</Label>);

        expect(component.find('span').text()).toBe('3.2M');
    });

    test('abbreviates numerical value if abbreviate prop is passed (billions)', () => {

        const component = shallow(<Label abbreviate>6345153975</Label>);

        expect(component.find('span').text()).toBe('6.3B');
    });

    test('abbreviates numerical value if abbreviate prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label abbreviate>8675345876235</Label>);

        expect(component.find('span').text()).toBe('8.6T');
    });

    test('rounds to the nearest thousand when round prop is passed (thousands)', () => {

        const component = shallow(<Label round>13400</Label>);

        expect(component.find('span').text()).toBe('13400');
    });

    test('rounds to the nearest million when round prop is passed (millions)', () => {

        const component = shallow(<Label round>3235942</Label>);

        expect(component.find('span').text()).toBe('3200000');
    });

    test('rounds to the nearest billion when round prop is passed (billions)', () => {

        const component = shallow(<Label round>6345153975</Label>);

        expect(component.find('span').text()).toBe('6300000000');
    });

    test('rounds to the nearest trillion when round prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label round>8675345876235</Label>);

        expect(component.find('span').text()).toBe('8700000000000');
    });

    test('abbreviates and rounds numerical values if both props are passed (thousands)', () => {

        const component = shallow(<Label abbreviate round>13400</Label>);

        expect(component.find('span').text()).toBe('13.4K');
    });

    test('abbreviates and rounds numerical values if both props are passed (millions)', () => {

        const component = shallow(<Label abbreviate round>3235942</Label>);

        expect(component.find('span').text()).toBe('3.2M');
    });

    test('abbreviates and rounds numerical values if both props are passed (billions)', () => {

        const component = shallow(<Label abbreviate round>6545153975</Label>);

        expect(component.find('span').text()).toBe('6.5B');
    });

    test('abbreviates and rounds numerical values if both props are passed (trillion)', () => {

        const component = shallow(<Label abbreviate round>8675345876235</Label>);

        expect(component.find('span').text()).toBe('8.7T');
    });

    test('abbreviates with custom decimal accuracy', () => {

        const component = shallow(<Label abbreviate abbrAccuracy={2}>1774215</Label>);

        expect(component.find('span').text()).toBe('1.77M');
    });

    test('abbreviates upper value with custom decimal accuracy', () => {

        const component = shallow(<Label abbreviate round roundAccuracy="high" abbrAccuracy={2}>1774215</Label>);

        expect(component.find('span').text()).toBe('1.80M');
    });

    test('rounds with custom round accuracy (thousand)', () => {

        const component = shallow(<Label round roundAccuracy="high">15432</Label>);

        expect(component.find('span').text()).toBe('15400');
    });

    test('rounds with custom round accuracy (thousand) part 2', () => {

        const component = shallow(<Label round roundAccuracy="low">15432</Label>);

        expect(component.find('span').text()).toBe('15000');
    });

    test('rounds and abbreviates with custom accuracies (thousand)', () => {

        const component = shallow(<Label round roundAccuracy="low" abbreviate abbrAccuracy={2}>15432</Label>);

        expect(component.find('span').text()).toBe('15K');
    });

    test('abbreviates with custom accuracy (billions)', () => {

        const component = shallow(<Label abbreviate abbrAccuracy={5}>6545153975</Label>);

        expect(component.find('span').text()).toBe('6.54515B');
    });

    test('abbreviates and rounds with custom accuracy (billions)', () => {

        const component = shallow(<Label abbreviate round roundAccuracy={'low'} abbrAccuracy={5}>6545153975</Label>);

        expect(component.find('span').text()).toBe('7B');
    });

});
