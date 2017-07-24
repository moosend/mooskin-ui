import * as React from 'react';

import {Option, Select} from '../../components/index/';
import SelectExampleCode from './component-strings/Select.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SelectExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Option, Select}}
                    code={SelectExampleCode}
                    title="Select Example"
                />
            </div>
        );
    }
}
