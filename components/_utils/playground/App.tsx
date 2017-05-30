import * as React from 'react';

import {IInputCallbackData} from '../types/commonTypes';

import {Button, H1, H2, H3, H4, H5, H6, Input, Option, Select, Switch} from '../../index/index';

// export interface IAppProps{
//     automation1: boolean;
//     automation2: boolean;
// }

export interface IAppState{
    automations: IAutomations[];
}

export interface IAutomations{
    complete: boolean;
    running: boolean;
}

class App extends React.Component<{}, IAppState> {

    constructor(){
        super();

        this.state = {
            automations: [
                {
                    complete: true,
                    running: false
                },
                {
                    complete: true,
                    running: true
                },
                {
                    complete: false,
                    running: false
                },
            ]
        };
    }

    public render(){

        const listAutomations = this.state.automations.map((automation, i) => {
                                    return (
                                                <Switch
                                                    key={i}
                                                    onClick={this.switchAuto.bind(this, i)}
                                                    running={automation.running}
                                                    disabled={!automation.complete}
                                                />
                                            );
                                });

        return (
            <div>
                <fieldset style={{display: 'inline-block'}}>
                    <legend>Button Element</legend>
                    <Button onClick={this.onClick}>Button</Button>
                    <Button onClick={this.onClick} disabled>Button</Button>
                    <Button onClick={this.onClick} inverseStyle>Button</Button>
                    <Button onClick={this.onClick} inverseStyle disabled>Button</Button>
                </fieldset>
                <br/><br/>
                <fieldset style={{display: 'inline-block'}}>
                    <legend>Input Element</legend>
                    <Input onChange={this.onChange} type="text" maxlength="5" placeholder="max length 5"/>
                    <Input onChange={this.onChange} disabled value="disabled"/>
                    <Input onChange={this.onChange} placeholder="With placeholder" id="3rd"/>
                    <Input onChange={this.onChange} value="with changed size attribute" className=".input-field"/>
                </fieldset>
                <br/><br/>
                <fieldset style={{display: 'inline-block', width: 400}}>
                    <legend>Select Element</legend>
                    <Select onChange={this.onChangeClick} dataLabel="plan" label="Some label" selected="option3">
                        <Option value="option1">Option1</Option>
                        <Option value="option2">Option2</Option>
                        <Option value="option3">Option3</Option>
                        <Option value="option4">Option4</Option>
                        <Option value="option5">Option5</Option>
                    </Select>
                    <br/>
                    <Select onChange={this.onClick} selected="option" dataLabel="plan" >
                        <Option value="option1">Option1</Option>
                    </Select>
                </fieldset>
                <br/><br/>
                <fieldset style={{display: 'inline-block'}}>
                    <legend>Switch</legend>
                    <div>
                        {listAutomations}
                    </div>
                </fieldset>
                <br/><br/>
                <fieldset style={{display: 'inline-block'}}>
                    <legend>Headings</legend>
                    <H1 id="5">Your Campaigns</H1>
                    <H2>Moooo!</H2>
                    <H3 style={{color: 'blue'}}>Moooo!</H3>
                    <H4>Moooo!</H4>
                    <H5>Moooo!</H5>
                    <H6>Moooo!</H6>
                </fieldset>
            </div>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    }

    private onChangeClick = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    }

    private onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    }

    private switchAuto = (i: number, e: React.MouseEvent<HTMLElement>) => {
        const automations = this.state.automations;
        automations[i].running = !this.state.automations[i].running;

        // update state
        this.setState({
            automations,
        });
    }
}

export default App;
