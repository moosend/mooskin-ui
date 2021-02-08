import * as React from 'react';
import NumberLabel from './NumberLabel';

import { shallow } from 'enzyme';

describe('Button', () => {
    test('renders correctly', () => {
        const tree = shallow(
            <NumberLabel className="myClass" style={{ color: 'blue' }} id={'label'} abbreviate>
                Mooskin
            </NumberLabel>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders simple text with label styles', () => {
        const component = shallow(<NumberLabel>Mooskin</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('Mooskin');
    });

    test('renders simple numbers text', () => {
        const component = shallow(<NumberLabel>12345</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('12345');
    });

    test('abbreviates numerical value if abbreviate prop is passed (thousands)', () => {
        const component = shallow(<NumberLabel abbreviate>13400</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('13.4K');
    });

    test('abbreviates numerical value if abbreviate prop is passed (millions)', () => {
        const component = shallow(<NumberLabel abbreviate>3235942</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('3.2M');
    });

    test('abbreviates numerical value if abbreviate prop is passed (billions)', () => {
        const component = shallow(<NumberLabel abbreviate>6345153975</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('6.3B');
    });

    test('abbreviates numerical value if abbreviate prop is passed (trillion - enthusiast mode)', () => {
        const component = shallow(<NumberLabel abbreviate>8675345876235</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('8.6T');
    });

    test('rounds to the nearest thousand when roundNumber prop is passed (thousands)', () => {
        const component = shallow(<NumberLabel roundNumber>13400</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('13400');
    });

    test('rounds to the nearest million when roundNumber prop is passed (millions)', () => {
        const component = shallow(<NumberLabel roundNumber>3235942</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe('3200000');
    });

    test('rounds to the nearest billion when roundNumber prop is passed (billions)', () => {
        const component = shallow(<NumberLabel roundNumber>6345153975</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe(6300000000);
    });

    test('rounds to the nearest trillion when roundNumber prop is passed (trillion - enthusiast mode)', () => {
        const component = shallow(<NumberLabel roundNumber>8675345876235</NumberLabel>);

        expect(component.find('Label').prop('children')).toBe(8700000000000);
    });

    test('abbreviates and rounds numerical values if both props are passed (thousands)', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber>
                13400
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('13.4K');
    });

    test('abbreviates and rounds numerical values if both props are passed (millions)', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber>
                3235942
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('3.2M');
    });

    test('abbreviates and rounds numerical values if both props are passed (billions)', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber>
                6545153975
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('6.5B');
    });

    test('abbreviates and rounds numerical values if both props are passed (trillion)', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber>
                8675345876235
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('8.7T');
    });

    test('abbreviates with custom decimal accuracy', () => {
        const component = shallow(
            <NumberLabel abbreviate abbrAccuracy={2}>
                1774215
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('1.77M');
    });

    test('abbreviates upper value with custom decimal accuracy', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber roundAccuracy="high" abbrAccuracy={2}>
                1774215
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('1.80M');
    });

    test('rounds with custom round accuracy (thousand)', () => {
        const component = shallow(
            <NumberLabel roundNumber roundAccuracy="high">
                15432
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('15400');
    });

    test('rounds with custom round accuracy (thousand) part 2', () => {
        const component = shallow(
            <NumberLabel roundNumber roundAccuracy="low">
                15432
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('15000');
    });

    test('rounds and abbreviates with custom accuracies (thousand)', () => {
        const component = shallow(
            <NumberLabel roundNumber roundAccuracy="low" abbreviate abbrAccuracy={2}>
                15432
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('15K');
    });

    test('abbreviates with custom accuracy (billions)', () => {
        const component = shallow(
            <NumberLabel abbreviate abbrAccuracy={5}>
                6545153975
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('6.54515B');
    });

    test('abbreviates and rounds with custom accuracy (billions)', () => {
        const component = shallow(
            <NumberLabel abbreviate roundNumber roundAccuracy={'low'} abbrAccuracy={5}>
                6545153975
            </NumberLabel>
        );

        expect(component.find('Label').prop('children')).toBe('7B');
    });
});
