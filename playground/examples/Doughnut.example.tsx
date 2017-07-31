import * as React from 'react';

import Readme from '../../components/Charts/Doughnut/README.md';

import {Doughnut, Col, Grid, Row} from '../../components/index/';
import DoughnutExampleCode from './component-strings/Doughnut.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class DoughnutExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Doughnut, Col, Grid, Row}}
                    code={DoughnutExampleCode}
                    title="Doughnut Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
