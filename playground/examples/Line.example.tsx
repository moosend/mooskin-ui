import * as React from 'react';

import Readme from '../../components/Charts/Line/README.md';

import {Col, Grid, Line, Row} from '../../components/index/';
import LineExampleCode from './component-strings/Line.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class LineExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Line, Col, Grid, Row}}
                    code={LineExampleCode}
                    title="Line Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
