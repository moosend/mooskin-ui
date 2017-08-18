import * as React from 'react';

import Readme from '../../components/Table/README.md';

import {SmallIconButton, Table, TableHeader} from '../../components/index/index';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';
import TableExampleCode from './component-strings/Table.example.txt';

export default class TableExample extends React.Component<any, any> {

    public render(){
        return(
            <ReactLiveEditor
                scope={{React, SmallIconButton, Table, TableHeader}}
                code={TableExampleCode}
                title="Table Example"
                doc={Readme}
            />
        );
    }
}
