import * as React from 'react';

import Readme from '../../components/Table/README.md';

import {Table, TBody, TD, TH, THead, TR} from '../../components/index/index';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';
import TableExampleCode from './component-strings/Table.example.txt';

export default class TableExample extends React.Component<any, any> {

    public render(){
        return(
            <ReactLiveEditor
                scope={{React, Table, TBody, TD, TH, THead, TR}}
                code={TableExampleCode}
                title="Table Example"
                doc={Readme}
            />
        );
    }
}
