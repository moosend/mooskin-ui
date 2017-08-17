import * as React from 'react';

// import Readme from '../../components/Table/README.md';

import {SmallIconButton, Table, TableHeader} from '../../components/index/index';

// import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';
// import TableExampleCode from './component-strings/Table.example.txt';

// export default class TableExample extends React.Component<any, any> {

//     public render(){
//         return(
//             <ReactLiveEditor
//                 scope={{React, Table, TBody, TD, TH, THead, TR}}
//                 code={TableExampleCode}
//                 title="Table Example"
//                 doc={Readme}
//             />
//         );
//     }
// }

export default class TableExample extends React.Component<any, any>{

    public render(){
        const data = [
            {
                actions: <SmallIconButton transparent icon="face"/>,
                id: 3,
                lastname: 'Behrami',
                name: 'Doni'
            },
            {
                actions: <SmallIconButton transparent icon="check"/>,
                id: 5,
                lastname: 'Gashi',
                name: 'Gent'
            },
            {
                actions: <SmallIconButton transparent icon="edit"/>,
                id: 1,
                lastname: 'Maksuti',
                name: 'Shkumbin'
            }
        ];

        return(
            <Table data={data}>
                <TableHeader dataField="id" >ID</TableHeader>
                <TableHeader dataField="name" >Name</TableHeader>
                <TableHeader dataField="lastname" hideSmall >Lastname</TableHeader>
                <TableHeader dataField="actions" hideSmall >Actions</TableHeader>
            </Table>
        );
    }
}
