import * as React from 'react';

import {SmallIconButton} from '../../components/index/';
import SmallIconButtonExampleCode from './component-strings/SmallIconButton.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SmallIconButtonExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block', width: 1100}}>
                <ReactLiveEditor
                    scope={{React, SmallIconButton}}
                    code={SmallIconButtonExampleCode}
                    title="SmallIconButton Example"
                />
            </div>
        );
    }
}
