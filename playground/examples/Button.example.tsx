import * as React from 'react';

import {Button} from '../../components/index/index';
import ButtonExampleCode from './component-strings/Button.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class ButtonExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{width: 400}}>
                <ReactLiveEditor scope={{React, Button}} code={ButtonExampleCode} title="Button Example"/>
            </div>
        );
    }
}
