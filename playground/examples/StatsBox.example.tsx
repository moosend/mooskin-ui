import * as React from 'react';

import Readme from '../../components/StatsBox/README.md';

import {StatsBox, StatsNumber, StatsResult,  StatsTitle} from '../../components/index';

import StepsCode from './component-strings/StatsBox.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class StepsCodeExample extends React.Component<any, any> {
    public render(){
        return(
            <ReactLiveEditor
                scope={{React, StatsBox, StatsTitle, StatsNumber, StatsResult}}
                code={StepsCode}
                title="Steps Example"
                doc={Readme}
            />
        );
    }
}
