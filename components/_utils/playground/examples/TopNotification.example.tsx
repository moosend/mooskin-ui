import * as React from 'react';

import {Button, TopNotification} from '../../../index/index';

export interface ITopNotificationState{
    visible1: boolean;
    visible2: boolean;
    visible3: boolean;
    visible4: boolean;

}

export default class TopNotificationExample extends React.Component<{}, ITopNotificationState>{

    constructor(){
        super();
        this.state = {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false
        };
    }

    public render(){
        return(
            <fieldset style={{display: 'inline-block'}}>
                <legend>TopNotification Element</legend>
                <TopNotification text="You have successfully saved your campaign!" visible={this.state.visible1}/>
                <Button onClick={this.onClickShow('visible1')}>Show Notification 1</Button>
                <Button onClick={this.onClickHide('visible1')} inverseStyle>Hide Notification 1</Button>
                <br/>
                <TopNotification text="Save failed!!" visible={this.state.visible2} type="error"/>
                <Button onClick={this.onClickShow('visible2')}>Show Notification 2</Button>
                <Button onClick={this.onClickHide('visible2')} inverseStyle>Hide Notification 2</Button>
                <br/>
                <TopNotification
                    text="Are you sure you want save this?"
                    visible={this.state.visible3}
                    type="custom"
                    okButton
                    cancelButton
                />
                <Button onClick={this.onClickShow('visible3')}>Show Notification 3</Button>
                <Button onClick={this.onClickHide('visible3')} inverseStyle>Hide Notification 3</Button>
                <br/>
                <TopNotification
                    text="Are you sure you want save this?"
                    visible={this.state.visible4}
                    type="custom"
                    okButton
                    okButtonLabel="Take me to new Automations"
                />
                <Button onClick={this.onClickShow('visible4')}>Show Notification 4</Button>
                <Button onClick={this.onClickHide('visible4')} inverseStyle>Hide Notification 4</Button>
            </fieldset>
        );
    }

    private onClickShow = (n: string) => {
        return () => {
            const obj: any = {};

            obj[n] = true;

            this.setState(obj);
        };
    }

    private onClickHide = (n: string) => {
        return () => {
            const obj: any = {};

            obj[n] = false;

            this.setState(obj);
        };
    }

}
