import * as React from 'react';

import Readme from '../../components/Charts/Pie/README.md';

import {Col, Grid, Pie, Row} from '../../components/index/';
import PieExampleCode from './component-strings/Pie.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class PieExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Pie, Col, Grid, Row}}
                    code={PieExampleCode}
                    title="Pie Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
