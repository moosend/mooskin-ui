import * as React from 'react';

import Readme from '../../components/Select/README.md';

import {Option, Select} from '../../components/index/';
import SelectExampleCode from './component-strings/Select.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SelectExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, Option, Select}}
                code={SelectExampleCode}
                title="Select Example"
                doc={Readme}
            />
        );
    }
}
