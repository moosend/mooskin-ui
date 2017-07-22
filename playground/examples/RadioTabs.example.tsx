import * as React from 'react';

import {Button, H2, Input, RadioTabContent, RadioTabs} from '../../components/index/';
import RadioTabsExampleCode from './component-strings/RadioTabs.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class RadioTabsExample extends React.Component<any, any> {
    public render(){

        const components = {React, Button, H2, Input, RadioTabs, RadioTabContent};

        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor scope={components} code={RadioTabsExampleCode} title="RadioTabs Example"/>
            </div>
        );
    }
}
