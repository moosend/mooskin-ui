import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {Fieldset, Radio, RadioGroup} from '../../components/index/index';

export default (props: any) => {

    const onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(data.value);
    };

    return(
        <Fieldset legend="Radio Element" style={{display: 'inline-block', width: '500px'}}>
                <RadioGroup
                    onChange={onChange}
                    title="Horizontal radios"
                    spacing={10}
                    dataLabel="horizontal"
                >
                    <Radio value={'Radio1'}/>
                    <Radio value={'Radio2'} label="This one has a label" selected/>
                    <Radio value={'Radio3'} label="This one is disabled" disabled/>
                </RadioGroup>
                <br/>
                <RadioGroup
                    onChange={onChange}
                    title="Vertical radios"
                    spacing={10}
                    dataLabel="vertical"
                    vertical
                >
                    <Radio value={'Radio4'}/>
                    <Radio value={'Radio5'} label="This one has a label"/>
                    <Radio value={'Radio6'} label="This one is disabled" disabled/>
                </RadioGroup>
        </Fieldset>
    );
};
