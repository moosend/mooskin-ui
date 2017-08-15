import * as React from 'react';

import Readme from '../../components/SideBar/README.md';

import {Item, SideBar} from '../../components/index';

import SideBarExampleCode from './component-strings/SideBar.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class SideBarExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, SideBar, Item}}
                code={SideBarExampleCode}
                title="SideBar Example"
                doc={Readme}
            />
        );
    }
}
