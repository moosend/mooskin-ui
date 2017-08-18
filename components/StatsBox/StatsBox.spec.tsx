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

        expect(tree).toMatchSnapshot();
    });

    test('StatsTitle renders correctly', () => {

        const tree = shallow(
            <StatsTitle>Unique Opens</StatsTitle>
        );

        expect(tree).toMatchSnapshot();
    });

    test('StatsNumber renders correctly', () => {

        const tree = shallow(
            <StatsNumber>100%</StatsNumber>
        );

        expect(tree).toMatchSnapshot();
    });

    test('StatsResult renders correctly', () => {

        const tree = shallow(
            <StatsResult>5 total</StatsResult>
        );

        expect(tree).toMatchSnapshot();
    });
});
