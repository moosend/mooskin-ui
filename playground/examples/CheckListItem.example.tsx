import * as React from 'react';

import Readme from '../../components/CheckListItem/README.md';

import {CheckListItem} from '../../components/index/';
import CheckExampleCode from './component-strings/CheckListItem.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class CheckListItemExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, CheckListItem}}
                code={CheckExampleCode}
                title="CheckListItem Example"
                doc={Readme}
            />
        );
    }
}
