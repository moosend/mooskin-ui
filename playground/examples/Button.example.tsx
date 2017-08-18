import * as React from 'react';

import Readme from '../../components/Button/README.md';

import {Button} from '../../components/index/';

import ButtonExampleCode from './component-strings/Button.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class ButtonExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, Button}}
                code={ButtonExampleCode}
                title="Button Example"
                doc={Readme}
            />
        );
    }
}
