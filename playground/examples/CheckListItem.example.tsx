import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {CheckListItem, Fieldset} from '../../components/index/index';

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
            <Fieldset legend="Check List Item" style={{display: 'inline-block', width: '600px'}}>
                {listChecks}
            </Fieldset>
        );
    }

    private checkIt = (i: number) => {
        return (e: React.MouseEvent<HTMLInputElement>, data: IInputCallbackData) => {
            const processes = this.state.processes;
            processes[i].status = !this.state.processes[i].status;

            this.setState({processes});
            console.log(data.value);
        };
    }

}
