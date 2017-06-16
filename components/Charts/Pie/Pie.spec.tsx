import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import PieChart from './Pie';

import { shallow } from 'enzyme';

describe('Chart', () => {

    test('renders properly into dom', () => {

        const users = [
            {
                background: '#5CCDDF',
                label: 'Doni',
                value: 70,
            },
            {
                background: '#F48770',
                label: 'Gent',
                value: 120
            },
            {
                background: '#F2C14A',
                label: 'Shkumbin',
                value: 65
            }
        ];

        const component = shallow(<PieChart data={users} />);

        expect(component.find('Pie').prop('data')).toBeDefined;
    });

});
