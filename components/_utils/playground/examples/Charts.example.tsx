import * as React from 'react';

import {Doughnut, Pie} from '../../../index/index';

export interface IChartState{
    users: IUsers[];
    user: {[key: string]: string|number};
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
            user: {
                name: 'Doni',
                spams: 5,
                subscribers: 70
            },
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
            <Pie
                title={'Subscribers'}
                titleSize={20}
                data={this.state.users}
                size={300}
                legendColor="red"
                legendStyle="italic"
                legendSize={14}
            />
        </fieldset>
    );
    }
}
