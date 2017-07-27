import * as React from 'react';

import Readme from '../../components/Input/README.md';

import {Input} from '../../components/index/';
import InputExampleCode from './component-strings/Input.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class InputExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Input}}
                    code={InputExampleCode}
                    title="Input Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
