import * as React from 'react';

import {IInputCallbackData} from '../../types/commonTypes';

import {Radio, RadioGroup} from '../../../index/index';

export default (props: any) => {

    const onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return(
        <fieldset style={{display: 'inline-block', width: '500px'}}>
            <legend>Radio Element</legend>
                <RadioGroup
                    onChange={onChange}
                    selected={'Radio2'}
                    title="Horizontal radios"
                    spacing={10}
                    dataLabel="horizontal"
                >
                    <Radio value={'Radio1'}/>
                    <Radio value={'Radio2'} label="This one has a label"/>
                    <Radio value={'Radio3'} label="This one is disabled" disabled/>
                </RadioGroup>
                <br/>
                <RadioGroup
                    onChange={onChange}
                    selected={'Radio4'}
                    title="Vertical radios"
                    spacing={10}
                    dataLabel="vertical"
                    vertical
                >
                    <Radio value={'Radio4'}/>
                    <Radio value={'Radio5'} label="This one has a label"/>
                    <Radio value={'Radio6'} label="This one is disabled" disabled/>
                </RadioGroup>
        </fieldset>
    );
};
