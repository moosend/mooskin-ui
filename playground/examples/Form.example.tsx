import * as React from 'react';

import Readme from '../../components/Form/README.md';

import {
    Button,
    CheckBox,
    CheckboxGroup,
    Form,
    FormGroup,
    H2,
    Input,
    Option,
    Radio,
    RadioGroup,
    Select,
    Switch,
    TextArea
} from '../../components/index/index';
import FormExampleCode from './component-strings/Form.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class FormExample extends React.Component<any, any> {

    public render(){

        const components = {
            Button,
            CheckBox,
            CheckboxGroup,
            Form,
            FormGroup,
            H2,
            Input,
            Option,
            Radio,
            RadioGroup,
            React,
            Select,
            Switch,
            TextArea
        };

        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={components}
                    code={FormExampleCode}
                    title="Form Example"
                    doc={Readme}
                />
            </div>
        );
    }
}
