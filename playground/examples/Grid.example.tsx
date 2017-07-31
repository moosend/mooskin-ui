import * as React from 'react';

import Readme from '../../components/Grid/README.md';

import {Col, Grid, Row} from '../../components/index';

import GridExampleCode from './component-strings/Grid.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class GridExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, Col, Grid, Row}}
                code={GridExampleCode}
                title="Grid Example"
                doc={Readme}
            />
        );
    }
}
