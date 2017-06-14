import * as React from 'react';

import {Doughnut} from '../../../index/index';

export interface IChartState{
    users: IUsers[];
}

export interface IUsers{
    name: string;
    subscribers: number;
    spams: number;
}

export default class ChartExample extends React.Component<{}, IChartState>{

    constructor(){
        super();
        this.state = {
            users: [
                {
                    name: 'Doni',
                    spams: 5,
                    subscribers: 70
                },
                {
                    name: 'Gent',
                    spams: 30,
                    subscribers: 120
                },
                {
                    name: 'Shkumbin',
                    spams: 0,
                    subscribers: 65
                }
            ]
        };
    }

    public render() {

        const listUsers = this.state.users.map((user, i) => {
            return user.name;
        });

        const listSubscribers = this.state.users.map((user, i) => {
            return user.subscribers;
        });

        const listSpam = this.state.users.map((user, i) => {
            return user.spams;
        });

        const backgroundColors = ['#3d0559', '#ed6a42', '#9cdf40'];

        return(
        <fieldset style={{display: 'inline-block'}}>
            <legend>Pie Chart</legend>
            <Doughnut
                title={'Subscribers'}
                titleSize={20}
                data={listSubscribers}
                labels={listUsers}
                size={300}
                legendColor="red"
                legendStyle="italic"
                legendSize={14}
            />
            <Doughnut
                doughnutWidth={70}
                title={'Spam Emails Sent'}
                titlePos="bottom"
                titleSize={20}
                data={listSpam}
                labels={listUsers}
                size={300}
                legendColor="red"
                legendStyle="italic"
                legendSize={14}
                legendPos="top"
                backgroundColors={backgroundColors}
                spacing={3}
            />
        </fieldset>
    );
    }
}
