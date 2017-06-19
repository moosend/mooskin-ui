import * as React from 'react';

import {IInputCallbackData} from '../../types/commonTypes';

import {Radio, RadioGroup} from '../../../index/index';

export default (props: any) => {

    const onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return(
        <fieldset style={{display: 'inline-block', width: '400px'}}>
            <legend>Radio Element</legend>
                <RadioGroup onChange={onChange} selected={'Do this'} title="Optional group title">
                    <Radio id={'with id'} value={'Do this'}/>
                    <Radio value={'do that'} label="This one has a label"/>
                    <Radio value={'do nothing'} label="This one is disabled" disabled/>
                </RadioGroup>
        </fieldset>
    );
};
