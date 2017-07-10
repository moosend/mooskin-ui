import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import PieChart from './Pie';

import { shallow } from 'enzyme';

describe('Chart', () => {

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
            <PieChart
                id="pie"
                data={users}
                size={200}
                title={'Title'}
                noLegend
                maintainAspectRatio
                titleSize={20}
                legendStyle="italic"
                legendSize={10}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with data and props', () => {

        const component = shallow(<PieChart data={users} title="Subscribers" noLegend/>);

        expect(component.find(Pie).prop<any>('data').labels[0]).toEqual('Doni');
        expect(component.find(Pie).prop<any>('data').datasets[0].borderWidth).toEqual(0);
        expect(component.find(Pie).prop<any>('data').datasets[0].data[2]).toEqual(65);
        expect(component.find(Pie).prop<any>('options').title.text).toContain('Subscribers');
        expect(component.find(Pie).prop<any>('options').legend.noLegend).toBeTruthy;
    });

    test('renders into dom with data and different props', () => {

        const component = shallow(<PieChart data={users} legendPos="top" maintainAspectRatio/>);

        expect(component.find(Pie).prop<any>('options').legend.position).toEqual('top');
        expect(component.find(Pie).prop<any>('options').maintainAspectRatio).toBeTruthy;
        expect(component.find(Pie).prop<any>('options').title.position).toEqual('top');
        expect(component.find(Pie).prop<any>('options').legend.labels.boxWidth).toEqual(30);
    });

    test('renders into dom with data and other set of props', () => {

        const component = shallow(<PieChart data={users} size={300} legendStyle="italic" legendSize={10} />);

        expect(component.find(Pie).prop<any>('height')).toEqual(300);
        expect(component.find(Pie).prop<any>('width')).toEqual(300);
        expect(component.find(Pie).prop<any>('options').legend.labels.fontStyle).toEqual('italic');
        expect(component.find(Pie).prop<any>('options').legend.labels.fontSize).toEqual(10);
        expect(component.find(Pie).prop<any>('options').title.display).toBeFalsy;
    });

});
