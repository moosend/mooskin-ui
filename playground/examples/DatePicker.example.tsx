import * as React from 'react';

import moment from 'moment';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {DatePicker} from '../../components/index/';

export default class CheckListItemExample extends React.Component<any, any> {
    public render(){
        return(
            <div>
                <DatePicker onChange={this.onChange} label={'Select Date:'} dataLabel={'date'}/>
                <br/><br/>
                <DatePicker date={moment().add(45, 'days')} format={'D / M / Y'} onChange={this.onChange}/>
                <br/><br/>
                <DatePicker disabled/>
            </div>
        );
    }

    private onChange = (data: IInputCallbackData) => {
        console.log(data.value._d);
        console.log(data.dataLabel);
    }
}
