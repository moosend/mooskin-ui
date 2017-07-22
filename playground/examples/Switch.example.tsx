import * as React from 'react';

import {Switch} from '../../components/index/';
import CheckExampleCode from './component-strings/Switch.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SwitchExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor scope={{React, Switch}} code={CheckExampleCode} title="Switch Example"/>
            </div>
        );
    }
}
