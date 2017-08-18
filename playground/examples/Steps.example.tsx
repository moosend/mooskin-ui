import * as React from 'react';

import Readme from '../../components/Steps/README.md';

import {Button, Step, Steps} from '../../components/index/';

import StepsCode from './component-strings/Steps.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class StepsCodeExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, Steps, Step, Button}}
                code={StepsCode}
                title="Steps Example"
                doc={Readme}
            />
        );
    }
}
