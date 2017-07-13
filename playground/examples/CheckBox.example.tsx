import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {CheckBox, CheckboxGroup} from '../../components/index';

export default (props: any) => {

    const onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(data.value);
    };

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>CheckBox Element</legend>
            <CheckboxGroup
                onChange={onChange}
                title="Vertical checkboxes"
                dataLabel="horizontal"
            >
                <CheckBox value={'Checkbox1'} checked/>
                <CheckBox value={'Checkbox2'} label="This one has a label" description="Feels lonely to be unchecked"/>
                <CheckBox value={'Checkbox3'} label="This is disabled" disabled description="It's disabled" checked/>
            </CheckboxGroup>
            <CheckboxGroup
                onChange={onChange}
                title="Horizontal checkboxes"
                dataLabel="horizontal"
                spacing={15}
                horizontal
            >
                <CheckBox value={'Checkbox1'}/>
                <CheckBox value={'Checkbox2'} label="This one has a label" checked/>
                <CheckBox value={'Checkbox3'} label="This one is disabled" disabled description="It's disabled"/>
            </CheckboxGroup>
        </fieldset>
    );

};
