import * as React from 'react';

import Readme from '../../components/Pagination/README.md';

import {Pagination} from '../../components/index/';

import PaginationExampleCode from './component-strings/Pagination.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class PaginationExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, Pagination}}
                code={PaginationExampleCode}
                title="Pagination Example"
                doc={Readme}
            />
        );
    }
}
