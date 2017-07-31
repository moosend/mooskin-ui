import * as React from 'react';

import Readme from '../../components/Checkbox/README.md';

import {CheckBox, CheckboxGroup} from '../../components/index/';
import CheckBoxExampleCode from './component-strings/CheckBox.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class CheckBoxExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, CheckboxGroup, CheckBox}}
                code={CheckBoxExampleCode}
                title="CheckBox Example"
                doc={Readme}
            />
        );
    }
}
