import * as React from 'react';

import Readme from '../../components/Grid/README.md';

import {Button, Col, Grid, H2, Input, RadioTabContent, RadioTabs, Row} from '../../components/index';

import GridExampleCode from './component-strings/Grid.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class GridExample extends React.Component<any, any> {
    public render(){
        return(
            <div>
                <ReactLiveEditor
                    scope={{React, Col, Grid, Row, Button, Input, RadioTabContent, RadioTabs, H2}}
                    code={GridExampleCode}
                    title="Grid Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
