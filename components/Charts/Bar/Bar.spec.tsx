import * as React from 'react';
import {Bar} from 'react-chartjs-2';
import BarChart from './Bar';

import { shallow } from 'enzyme';

describe('Bar Chart', () => {

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

    test('renders correctly', () => {

        const tree = shallow(
            <BarChart
                id="bar"
                data={users}
                height={200}
                width={400}
                gridLinesX
                gridLinesY
                title={'Title'}
                noLegend
                maintainAspectRatio
                label="Just a label"
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with data and props', () => {

        const component = shallow(<BarChart data={users} label="subscribers" gridLinesX gridLinesY/>);

        expect(component.find('Bar').prop<any>('data').datasets[0].label).toEqual('subscribers');
        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].gridLines.display).toBeTruthy;
        expect(component.find('Bar').prop<any>('options').scales.yAxes[0].gridLines.display).toBeTruthy;
        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].barPercentage).toEqual(0.6);
        expect(component.find('Bar').prop<any>('options').scales.yAxes[0].ticks.min).toEqual(0);
        expect(component.find('Bar').prop<any>('options').legend.labels.fontStyle).toEqual('italic');
        expect(component.find('Bar').prop<any>('options').legend.display).toBeTruthy;
    });

    test('renders properly into dom with data and different props', () => {

        const component = shallow(<BarChart data={users} height={30} width={20} barPercentage={1}/>);

        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].gridLines.display).toBeFalsy;
        expect(component.find('Bar').prop<any>('options').scales.yAxes[0].gridLines.display).toBeFalsy;
        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].barPercentage).toEqual(1);
        expect(component.find('Bar').prop<any>('height')).toEqual(30);
        expect(component.find('Bar').prop<any>('width')).toEqual(20);
        expect(component.find('Bar').prop<any>('options').legend.display).toBeFalsy;
    });

    test('renders properly into dom with data and a high barPercentage', () => {

        const component = shallow(<BarChart data={users} minValue={5} borderColor="blue" barPercentage={10}/>);

        expect(component.find('Bar').prop<any>('data').datasets[0].data).toHaveLength(3);
        expect(component.find('Bar').prop<any>('data').datasets[0].borderColor).toEqual('blue');
        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].barPercentage).toEqual(1);
        expect(component.find('Bar').prop<any>('options').scales.yAxes[0].ticks.min).toEqual(5);
        expect(component.find('Bar').prop<any>('options').title.position).toEqual('bottom');
    });

    test('renders properly into dom with data and a low barPercentage', () => {

        const component = shallow(<BarChart data={users} minValue={5} borderColor="blue" barPercentage={-1}/>);

        expect(component.find('Bar').prop<any>('options').scales.xAxes[0].barPercentage).toEqual(0.1);
    });

});
