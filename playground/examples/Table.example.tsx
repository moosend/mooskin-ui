import * as React from 'react';

import Readme from '../../components/Table/README.md';

import {Table} from '../../components/index/index';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';
import TableExampleCode from './component-strings/Table.example.txt';

export default class TableExample extends React.Component<any, any> {

    public render(){
        return(
            <ReactLiveEditor
                scope={{React, Table}}
                code={TableExampleCode}
                title="Table Example"
                doc={Readme}
            />
        );
    }
}
