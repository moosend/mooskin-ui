import * as React from 'react';

import Readme from '../../components/Breadcrumbs/README.md';

import {Breadcrumb, BreadcrumbsGroup, Button} from '../../components/index/';

import BreadcrumbsCode from './component-strings/Breadcrumbs.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class BreadcrumbsExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, BreadcrumbsGroup, Breadcrumb, Button}}
                code={BreadcrumbsCode}
                title="Breadcrumbs Example"
                doc={Readme}
            />
        );
    }
}
