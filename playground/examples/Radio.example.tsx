import * as React from 'react';

import Readme from '../../components/Radio/README.md';

import {Radio, RadioGroup} from '../../components/index/';
import RadioExampleCode from './component-strings/Radio.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class RadioExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, RadioGroup, Radio}}
                code={RadioExampleCode}
                title="Radio Example"
                doc={Readme}
            />
        );
    }
}
