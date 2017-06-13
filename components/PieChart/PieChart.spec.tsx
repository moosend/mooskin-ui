import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import PieChart from './PieChart';

import { shallow } from 'enzyme';

describe('PieChart', () => {

    test('renders properly into dom', () => {

        const data = [10, 20, 30];
        const labels = ['Gold', 'Exp', 'Assists'];

        const component = shallow(<PieChart data={data} labels={labels} doughnut/>);

        expect(component.find('Pie').prop('data')).toBeDefined;
    });

});
