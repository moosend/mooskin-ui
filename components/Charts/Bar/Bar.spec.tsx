import * as React from 'react';
import {Bar} from 'react-chartjs-2';
import BarChart from './Bar';

import { shallow } from 'enzyme';

describe('Bar Chart', () => {

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

        const component = shallow(<BarChart data={users} title="this and that" label="subscribers"/>);

        expect(component.find('Bar').prop('data')).toBeDefined;
    });

});
