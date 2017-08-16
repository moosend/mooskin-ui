import * as React from 'react';

import Readme from '../../components/TabbedContent/README.md';

import {
    Button, Col, Content, Grid, H2, Header, Input, Row, Tab, TabbedContent, Table
} from '../../components/index';
import TabbedContentExampleCode from './component-strings/TabbedContent.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class TabbedContentExample extends React.Component<any, any> {
    public render(){

        const components = {
            Button, Col, Content, Grid, H2, Header, Input, Row, Tab, TabbedContent, Table
        };

        return(
            <ReactLiveEditor
                scope={{React, ...components}}
                code={TabbedContentExampleCode}
                title="TabbedContent Example"
                doc={Readme}
            />
        );
    }
}
