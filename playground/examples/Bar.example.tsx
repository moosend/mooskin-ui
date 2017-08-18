import * as React from 'react';

import Readme from '../../components/Charts/Bar/README.md';

import {Bar, Col, Grid, Row} from '../../components/index/';
import BarExampleCode from './component-strings/Bar.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class BarExample extends React.Component<any, any> {
    render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Bar, Col, Grid, Row}}
                    code={BarExampleCode}
                    title="Bar Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
