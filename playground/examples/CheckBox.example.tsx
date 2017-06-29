import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {CheckBox, CheckboxGroup} from '../../components/index';

export default (props: any) => {

    const onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    const checked = {
        values: ['Checkbox1', 'Checkbox3']
    };

    const checked2 = {
        values: ['Checkbox2']
    };

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>CheckBox Element</legend>
            <CheckboxGroup
                selected={checked}
                onChange={onChange}
                title="Vertical checkboxes"
                dataLabel="horizontal"
            >
                <CheckBox value={'Checkbox1'}/>
                <CheckBox value={'Checkbox2'} label="This one has a label" description="Feels lonely to be unchecked"/>
                <CheckBox value={'Checkbox3'} label="This one is disabled" disabled description="It's disabled"/>
            </CheckboxGroup>
            <CheckboxGroup
                selected={checked2}
                onChange={onChange}
                title="Horizontal checkboxes"
                dataLabel="horizontal"
                spacing={15}
                horizontal
            >
                <CheckBox value={'Checkbox1'}/>
                <CheckBox value={'Checkbox2'} label="This one has a label" />
                <CheckBox value={'Checkbox3'} label="This one is disabled" disabled description="It's disabled"/>
            </CheckboxGroup>
        </fieldset>
    );

};
