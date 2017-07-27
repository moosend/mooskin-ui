import * as React from 'react';

import {Bar, Doughnut, Line, Pie} from '../../components/index/';
import ChartsExampleCode from './component-strings/Charts.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class ChartsExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Bar, Doughnut, Line, Pie}}
                    code={ChartsExampleCode}
                    title="Charts Example"
                    doc=""
                />
            </div>
        );
    }
}
