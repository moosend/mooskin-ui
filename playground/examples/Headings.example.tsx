import * as React from 'react';

import Readme from '../../components/Headings/README.md';

import {H1, H2, H3, H4, H5, H6} from '../../components/index/';
import HeadingsExampleCode from './component-strings/Headings.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class HeadingsExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, H1, H2, H3, H4, H5, H6}}
                    code={HeadingsExampleCode}
                    title="Headings Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
