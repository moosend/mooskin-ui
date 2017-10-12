import toJson from 'enzyme-to-json';
import * as React from 'react';
import StatsBox, {StatsNumber, StatsResult, StatsTitle} from './StatsBox';

import { shallow } from 'enzyme';

describe('StatsBox', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <StatsBox>
                <StatsTitle>Unique Opens</StatsTitle>
                <StatsNumber>100%</StatsNumber>
                <StatsResult>5 total</StatsResult>
            </StatsBox>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('StatsTitle renders correctly', () => {

        const tree = shallow(
            <StatsTitle>Unique Opens</StatsTitle>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('StatsNumber renders correctly', () => {

        const tree = shallow(
            <StatsNumber>100%</StatsNumber>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('StatsResult renders correctly', () => {

        const tree = shallow(
            <StatsResult>5 total</StatsResult>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });
});
