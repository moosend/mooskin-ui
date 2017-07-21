import * as React from 'react';

import {Button, Fieldset, HorizontalRangeBar} from '../../components/index/index';

export interface IHRBState{
    progress: number;
}

export default class HorizontalRangeBarExample extends React.Component<{}, IHRBState>{

    private horizontalRangeInterval: any;

    constructor(){
        super();
        this.state = {
            progress: 0
        };
    }

    public render() {
        return (
            <Fieldset legend="Loader" style={{display: 'inline-block', width: '400'}}>
                <HorizontalRangeBar progress={this.state.progress}/><br/>
                <HorizontalRangeBar progress={this.state.progress} range={[0, 1000]} background={'green'}/><br/>
                <HorizontalRangeBar progress={this.state.progress} range={[0, 500]} background={'red'}/><br/>
                <HorizontalRangeBar progress={this.state.progress} range={[0, 50]} background={'blue'}/><br/>

                <Button onClick={this.onClickStartInterval}>Start Race</Button>
                <Button onClick={this.onClickStopInterval}>Stop Race</Button>
            </Fieldset>
        );
    }

    private onClickStartInterval = (e: React.MouseEvent<HTMLInputElement>) => {
        this.horizontalRangeInterval = setInterval(() => {
           this.setState({progress: this.state.progress + 5});
        }, 100);
        console.log(e.target);
    }

    private onClickStopInterval = (e: React.MouseEvent<HTMLInputElement>) => {
        clearInterval(this.horizontalRangeInterval);
        console.log(e.target);
    }
}
