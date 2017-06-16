import * as React from 'react';

import {CheckListItem} from '../../../index/index';

export interface IState {
    processes: IProcess[];
}

export interface IProcess{
    name: string;
    content: string;
    status: boolean;
}

export default class CheckItemExample extends React.Component<{}, IState>{

    constructor(){
        super();

        this.state = {
            processes: [
                {
                    content: 'Just don\'\t do it',
                    name: 'Nukes launched',
                    status: false
                },
                {
                    content: 'Win three games in Heroes of the Storm',
                    name: 'HotS Challenge',
                    status: true
                }
            ]
        };
    }

    public render(){

        const listChecks = this.state.processes.map((process, i) => {
            return (
                <CheckListItem
                    key={i}
                    onClick={this.checkIt(i)}
                    status={process.status}
                    title={process.name}
                    text={process.content}
                />
            );
        });

        return(
            <fieldset style={{display: 'inline-block', width: '600px'}}>
                <legend>Check List Item</legend>
                {listChecks}
            </fieldset>
        );
    }

    private checkIt = (i: number) => {
        return (e: React.MouseEvent<HTMLInputElement>) => {
            const processes = this.state.processes;
            processes[i].status = !this.state.processes[i].status;

            this.setState({processes});
        };
    }

}
