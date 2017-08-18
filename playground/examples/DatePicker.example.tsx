import * as React from 'react';

import Readme from '../../components/DatePicker/README.md';

import moment from 'moment';

import {DatePicker} from '../../components/index/';
import DatePickerExampleCode from './component-strings/DatePicker.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class DatePickerExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, DatePicker, moment}}
                code={DatePickerExampleCode}
                title="DatePicker Example"
                doc={Readme}
            />
        );
    }
}
