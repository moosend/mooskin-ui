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
});
