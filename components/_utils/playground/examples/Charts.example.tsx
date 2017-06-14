import * as React from 'react';

import {Doughnut, Pie} from '../../../index/index';

export interface IChartState{
    users: IUsers[];
    user: {[key: string]: string|number};
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
            user: {
                name: 'Doni',
                spams: 5,
                subscribers: 70
            },
            users: [
                {
                    background: '#5CCDDF',
                    label: 'Doni',
                    value: 70,
                },
                {
                    background: '#F48770',
                    label: 'Gent',
                    value: '120'
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

        // console.log(this.state.user);

        // const listUsers = this.state.users.map((user, i) => {
        //     return user.name;
        // });

        // const listSubscribers = this.state.users.map((user, i) => {
        //     return [user.subscribers];
        // });

        // const listSpam = this.state.users.map((user, i) => {
        //     return user.spams;
        // });

        // const backgroundColors = ['#3d0559', '#ed6a42', '#9cdf40'];

        return(
            <fieldset style={{display: 'inline-block'}}>
                <legend>Pie Chart</legend>
                <Pie data={this.state.users} title="Subscribers"/>
                <Doughnut
                    data={this.state.users}
                    title="Doughnut.. yummy"
                    titlePos="bottom"
                    legendPos="left"
                    legendStyle="italic"
                    boxWidth={20}
                />
            </fieldset>
        );
    }
}
