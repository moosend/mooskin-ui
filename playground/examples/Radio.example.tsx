import * as React from 'react';

import {Radio, RadioGroup} from '../../components/index/';
import RadioExampleCode from './component-strings/Radio.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class RadioExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, RadioGroup, Radio}}
                    code={RadioExampleCode}
                    title="Radio Example"
                />
            </div>
        );
    }
}
