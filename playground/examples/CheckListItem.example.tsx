import * as React from 'react';

import Readme from '../../components/CheckListItem/README.md';

import {CheckListItem} from '../../components/index/';
import CheckExampleCode from './component-strings/CheckListItem.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class CheckListItemExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, CheckListItem}}
                    code={CheckExampleCode}
                    title="CheckListItem Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
