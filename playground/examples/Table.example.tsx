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
                campaign: 'NewsLetters for everybody',
                click: '50 %',
                delivered: '13-06-2017 10:59 AM',
                mailingList: 'Mailing list for me',
                open: '75 %',
                status: 'Sent',
                subscribers: 2947,
            },
            {
                actions: <SmallIconButton transparent icon="check"/>,
                campaign: 'Another campaign',
                click: '25 %',
                delivered: '17-02-2017 10:51 AM',
                mailingList: 'Mailing list for me',
                open: '60 %',
                status: 'Sent',
                subscribers: 1628,
            },
            {
                actions: <SmallIconButton transparent icon="edit"/>,
                campaign: 'Airship ready campaign',
                click: '80 %',
                delivered: '31-12-2016 04:39 PM',
                mailingList: 'Mailing list for me',
                open: '93 %',
                status: 'Draft',
                subscribers: 4244,
            }
        ];

        return(
            <Table data={data}>
                <TableHeader dataField="delivered" sortable >Delivered</TableHeader>
                <TableHeader dataField="campaign" sortable >Campaign</TableHeader>
                <TableHeader dataField="mailingList" hideSmall >Mailing List / Segment</TableHeader>
                <TableHeader dataField="status" sortable hideSmall >Status</TableHeader>
                <TableHeader dataField="open" sortable sortfn={this.logIt} hideSmall>Open %</TableHeader>
                <TableHeader dataField="click" sortable hideSmall>Click</TableHeader>
                <TableHeader dataField="subscribers" sortable hideSmall >Subscribers</TableHeader>
                <TableHeader dataField="actions" hideSmall >Actions</TableHeader>
            </Table>
        );
    }

    private logIt = (a: any, b: any, order: string, sortBy: string) => {

        console.log(order);

        let comparison = 0;

        if (order === 'desc'){

            console.log('desc called');

            if (a[sortBy] > b[sortBy]){
                comparison = -1;
            } else if (a[sortBy] < b[sortBy]){
                comparison = 1;
            }
            return comparison;
        } else if (order === 'asc') {

            console.log('asc called');

            if (a[sortBy] < b[sortBy]){
                comparison = -1;
            } else if (a[sortBy] > b[sortBy]){
                comparison = 1;
            }
            return comparison;
        }

    }
}
