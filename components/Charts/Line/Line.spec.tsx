import toJson from 'enzyme-to-json';
import * as React from 'react';
import {Line} from 'react-chartjs-2';
import LineChart from './Line';

import { shallow } from 'enzyme';

describe('Line Chart', () => {

    const data = [
        {
            dataLabel: 'Emails per month',
            dataset: [
                {
                    label: 'January',
                    value: 70,
                },
                {
                    label: 'February',
                    value: '11'
                },
                {
                    label: 'March',
                    value: 65
                }
            ]
        },
        {
            dataLabel: 'Opens per month',
            dataset: [
                {
                    label: 'January',
                    value: 33,
                },
                {
                    label: 'February',
                    value: '11'
                },
                {
                    label: 'March',
                    value: 48
                }
            ]
        }
    ];

    test('renders correctly', () => {

        const tree = shallow(
            <LineChart
                id="line"
                data={data}
                height={200}
                width={400}
                gridLinesX
                gridLinesY
                title={'Title'}
                steppedLine
                noLegend
                noLine
                fill
                maintainAspectRatio
                pointRadius={5}
                pointStyle="cross"
                minValue={10}
                lineTension={0.2}
            />
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders properly into dom with data and props', () => {

        const component = shallow(<LineChart data={data} fill pointStyle="rect" gridLinesX gridLinesY/>);

        expect(component.find('Line').prop<any>('data').datasets[0].label).toEqual('Emails per month');
        expect(component.find('Line').prop<any>('data').datasets[1].label).toEqual('Opens per month');
        expect(component.find('Line').prop<any>('data').datasets[0].pointStyle).toEqual('rect');
        expect(component.find('Line').prop<any>('options').scales.xAxes[0].gridLines.display).toBeTruthy;
        expect(component.find('Line').prop<any>('options').scales.yAxes[0].gridLines.display).toBeTruthy;
        expect(component.find('Line').prop<any>('options').legend.labels.fontStyle).toEqual('italic');
        expect(component.find('Line').prop<any>('options').legend.display).toBeTruthy;
    });

    test('renders properly into dom with data and different props', () => {

        const component = shallow(<LineChart data={data} height={30} width={20} lineTension={0.5} pointRadius={4}/>);

        expect(component.find('Line').prop<any>('data').datasets[0].lineTension).toEqual(0.5);
        expect(component.find('Line').prop<any>('data').datasets[0].pointRadius).toEqual(4);
        expect(component.find('Line').prop<any>('options').scales.xAxes[0].gridLines.display).toBeFalsy;
        expect(component.find('Line').prop<any>('options').scales.yAxes[0].gridLines.display).toBeFalsy;
        expect(component.find('Line').prop<any>('height')).toEqual(30);
        expect(component.find('Line').prop<any>('width')).toEqual(20);
        expect(component.find('Line').prop<any>('options').legend.display).toBeTruthy;
    });

    test('renders properly into dom with data and other set of props', () => {

        const component = shallow(
            <LineChart
                data={data}
                minValue={5}
                borderColor="blue"
                borderWidth={2}
                noLine
                steppedLine
                maintainAspectRatio
                noLegend
            />
        );

        expect(component.find('Line').prop<any>('data').datasets[0].data).toHaveLength(3);
        expect(component.find('Line').prop<any>('data').datasets[0].borderColor).toEqual('blue');
        expect(component.find('Line').prop<any>('options').scales.yAxes[0].ticks.min).toEqual(5);
        expect(component.find('Line').prop<any>('options').title.position).toEqual('top');
        expect(component.find('Line').prop<any>('options').legend.display).toBeFalsy;
        expect(component.find('Line').prop<any>('data').datasets[0].showLines).toBeFalsy;
        expect(component.find(Line).prop<any>('options').maintainAspectRatio).toBeTruthy;
        expect(component.find('Line').prop<any>('data').datasets[0].steppedLine).toBeTruthy;
    });

});
