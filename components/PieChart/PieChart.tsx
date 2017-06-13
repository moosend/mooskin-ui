import * as React from 'react';
import {Pie} from '../../node_modules/react-chartjs-2/index';

// import styles from './PieChart.css';

export interface IPieChartProps {

    /** chart class */
    className?: string;

    /** override chart styles */
    style?: {[key: string]: string};
}

class PieChart extends React.Component<IPieChartProps, {}>{

    public static defaultProps = {
        className: '',
        style: {},
    };

    public render(){
        const data = {
            datasets: [{
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                data: [300, 50, 100],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }],
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
        };
        return(
            <div>
                <Pie data={data} />
            </div>
        );
    }
}

export default PieChart;
