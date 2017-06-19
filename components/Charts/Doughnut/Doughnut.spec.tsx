import * as React from 'react';
import {Pie} from 'react-chartjs-2';
import Doughnut from './Doughnut';

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

    test('renders properly into dom with data and props', () => {

        const component = shallow(<Doughnut data={users} id={'dough'} borderWidth={2}/>);

        expect(component.find('Pie').prop<any>('data').labels).toHaveLength(3);
        expect(component.find('Pie').prop<any>('data').labels[2]).toEqual('Shkumbin');
        expect(component.find('Pie').prop<any>('data').datasets[0].borderWidth).toEqual(2);
        expect(component.find('div').prop('id')).toEqual('dough');
        expect(component.find(Pie).prop<any>('options').legend.display).toBeTruthy;
    });

    test('renders properly into dom with data and different props', () => {

        const component = shallow(<Doughnut data={users} doughnutSpace={40} title="testing"/>);

        expect(component.find(Pie).prop<any>('options').legend.display).toBeTruthy;
        expect(component.find(Pie).prop<any>('options').cutoutPercentage).toEqual(40);
        expect(component.find(Pie).prop<any>('options').title.text).toEqual('testing');
        expect(component.find(Pie).prop<any>('options').title.position).toEqual('top');
    });

    test('renders properly into dom with data and other set of props', () => {

        const component = shallow(<Doughnut data={users} titleSize={15} legendColor={'blue'} />);

        expect(component.find(Pie).prop<any>('options').cutoutPercentage).toEqual(50);
        expect(component.find(Pie).prop<any>('options').legend.labels.fontColor).toEqual('blue');
        expect(component.find(Pie).prop<any>('options').legend.position).toEqual('bottom');
        expect(component.find(Pie).prop<any>('options').title.fontSize).toEqual(15);
        expect(component.find(Pie).prop<any>('options').maintainAspectRatio).toBeFalsy;
    });

});
