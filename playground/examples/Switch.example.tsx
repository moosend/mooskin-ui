import * as React from 'react';

import Readme from '../../components/Switch/README.md';

import {Switch} from '../../components/index/';
import CheckExampleCode from './component-strings/Switch.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SwitchExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, Switch}}
                code={CheckExampleCode}
                title="Switch Example"
                doc={Readme}
            />
        );
    }
}
