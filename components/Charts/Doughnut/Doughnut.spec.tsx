import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import Doughnut from './Doughnut';

import { shallow } from 'enzyme';

describe('Chart', () => {

    test('renders properly into dom', () => {

        const data = [10, 20, 30];
        const labels = ['Gold', 'Exp', 'Assists'];

        const component = shallow(<Doughnut data={data} labels={labels} />);

        expect(component.find('Pie').prop('data')).toBeDefined;
    });

});
