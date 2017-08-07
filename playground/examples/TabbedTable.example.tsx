import * as React from 'react';

import Readme from '../../components/TabbedTable/README.md';

import {TabbedTable, TabTable} from '../../components/index/';

import TabbedTableExampleCode from './component-strings/TabbedTable.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class TabbedTableExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, TabbedTable, TabTable}}
                code={TabbedTableExampleCode}
                title="TabbedTable Example"
                doc={Readme}
            />
        );
    }
}
