import * as React from 'react';
import StatsBox from './StatsBox';

import { shallow } from 'enzyme';

describe('StatsBox', () => {

    test('renders correctly', () => {

        const tree = shallow(
            <StatsBox style={{width: 200}} sideColor="#2D2D2D" sideTitle="Recipients">
                <div>Content 1</div>
            </StatsBox>
        );

        expect(tree).toMatchSnapshot();
    });

    test('applies props correctly correctly', () => {

        const component = shallow(
            <StatsBox sideColor="#FEFEFE" sideTitle="Recipients" sideTextColor="blue">
                <div>Content 1</div>
            </StatsBox>
        );

        expect(component.find('.statsTitle').prop('style')).toEqual({background: '#FEFEFE', color: 'blue'});
        expect(component.find('.statsTitle').text()).toEqual('Recipients');
    });

});
