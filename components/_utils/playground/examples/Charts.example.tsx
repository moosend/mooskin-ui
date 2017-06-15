import * as React from 'react';

import {Bar, Doughnut, Pie} from '../../../index/index';

export interface IChartState{
    users: IUsers[];
    barData: IUsers[];
}

export interface IUsers{
    label: string;
    value: number|string;
    background: string;
}

export default class ChartExample extends React.Component<{}, IChartState>{

    constructor(){
        super();
        this.state = {
            barData: [
                {
                    background: 'rgba(255,99,132,0.2)',
                    label: 'Doni',
                    value: 70,
                },
                {
                    background: 'rgba(255,99,132,0.2)',
                    label: 'Gent',
                    value: '101'
                },
                {
                    background: 'rgba(255,99,132,0.2)',
                    label: 'Shkumbin',
                    value: 65
                }
            ],
            users: [
                {
                    background: '#5CCDDF',
                    label: 'Doni',
                    value: 70,
                },
                {
                    background: '#F48770',
                    label: 'Gent',
                    value: '101'
                },
                {
                    background: '#F2C14A',
                    label: 'Shkumbin',
                    value: 65
                }
            ]
        };
    }

    public render() {

        return(
            <fieldset style={{display: 'inline-block'}}>
                <legend>Pie Chart</legend>
                <Pie data={this.state.users} title="Subscribers" size={250}/>
                <hr/>
                <Doughnut
                    data={this.state.users}
                    title="Doughnut.. yummy"
                    titlePos="bottom"
                    legendPos="left"
                    legendStyle="italic"
                    boxWidth={20}
                    borderWidth={3}
                    size={200}
                />
                <hr/>
                <Bar
                    data={this.state.barData}
                    title={'Chart Title'}
                    height={200}
                    width={400}
                    maintainAspectRatio
                    label={'Number of subscribers'}
                    minValue={40}
                    gridLinesY
                    gridLinesX
                    borderColor={'rgba(255,99,132,1)'}
                    borderWidth={1}
                    barPercentage={0.5}
                />
                <Bar
                    data={this.state.users}
                    title={'Chart title'}
                    height={200}
                    width={400}
                    maintainAspectRatio
                    label={'Number of subscribers'}
                    minValue={20}
                    barPercentage={0.8}
                />
            </fieldset>
        );
    }
}
