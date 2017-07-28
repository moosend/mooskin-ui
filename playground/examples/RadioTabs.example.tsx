import * as React from 'react';

import Readme from '../../components/RadioTabs/README.md';

import {Button, Col, Grid, H2, Input, RadioTabContent, RadioTabs, Row} from '../../components/index/';
import RadioTabsExampleCode from './component-strings/RadioTabs.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class RadioTabsExample extends React.Component<any, any> {
    public render(){

        const components = {React, Button, H2, Input, RadioTabs, RadioTabContent, Col, Grid, Row};

        return(
            <ReactLiveEditor
                scope={components}
                code={RadioTabsExampleCode}
                title="RadioTabs Example"
                doc={Readme}
            />
        );
    }
}
