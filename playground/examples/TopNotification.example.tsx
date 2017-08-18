import * as React from 'react';

import Readme from '../../components/TopNotification/README.md';

import {Button, TopNotification} from '../../components/index/';
import TopNotificationExampleCode from './component-strings/TopNotification.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class TopNotificationExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, Button, TopNotification}}
                code={TopNotificationExampleCode}
                title="TopNotification Example"
                doc={Readme}
            />
        );
    }
}
