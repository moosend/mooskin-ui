import * as React from 'react';

import {Button, HorizontalRangeBar} from '../../components/index/';
import HorizontalExampleCode from './component-strings/HorizontalRangeBar.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class HorizontalRangeBarExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, HorizontalRangeBar, Button}}
                    code={HorizontalExampleCode}
                    title="HorizontalRangeBar Example"
                />
            </div>
        );
    }
}
