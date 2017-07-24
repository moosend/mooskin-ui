import * as React from 'react';

import {Table} from '../../components/index/index';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';
import TableExampleCode from './component-strings/Table.example.txt';

export default class TableExample extends React.Component<any, any> {

    public render(){
        return(
            <div style={{display: 'inline-block'}}>
                <ReactLiveEditor
                    scope={{React, Table}}
                    code={TableExampleCode}
                    title="Table Example"
                />
            </div>
        );
    }
}
