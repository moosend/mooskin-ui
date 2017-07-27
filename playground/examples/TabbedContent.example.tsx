import * as React from 'react';

import Readme from '../../components/TabbedContent/README.md';

import {TabbedContent} from '../../components/index/';
import TabbedContentExampleCode from './component-strings/TabbedContent.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class TabbedContentExample extends React.Component<any, any> {
    public render(){

        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, TabbedContent}}
                    code={TabbedContentExampleCode}
                    title="TabbedContent Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
