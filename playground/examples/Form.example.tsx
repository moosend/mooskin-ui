import * as React from 'react';

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
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Button, CheckBox, CheckboxGroup, Form, FormGroup, H2, Input, Option, Radio, RadioGroup, Select, Switch, TextArea}}
                    code={FormExampleCode}
                    title="Button Example"
                />
            </div>
        );
    }
}
