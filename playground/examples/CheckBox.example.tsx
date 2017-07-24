import * as React from 'react';

import {CheckBox, CheckboxGroup} from '../../components/index/';
import CheckBoxExampleCode from './component-strings/CheckBox.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class CheckBoxExample extends React.Component<any, any> {
    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, CheckboxGroup, CheckBox}}
                    code={CheckBoxExampleCode}
                    title="CheckBox Example"
                />
            </div>
        );
    }
}
