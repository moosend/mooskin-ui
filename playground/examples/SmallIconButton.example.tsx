import * as React from 'react';

import Readme from '../../components/SmallIconButton/README.md';

import {SmallIconButton} from '../../components/index/';
import SmallIconButtonExampleCode from './component-strings/SmallIconButton.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SmallIconButtonExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, SmallIconButton}}
                code={SmallIconButtonExampleCode}
                title="SmallIconButton Example"
                doc={Readme}
            />
        );
    }
}
