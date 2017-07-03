import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {Input} from '../../components/index/index';

export default (props: any) => {

    const onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>Input Element</legend>
            <Input onChange={onChange} type="text" maxlength={5} placeholder="max length 5" label="Label:"/>
            <Input onChange={onChange} placeholder="With custom spacing" id="3rd" label="Label:" spacing={60}/>
            <Input onChange={onChange} value="with changed size attribute" className=".input-field"/>
            <Input onChange={onChange} disabled value="disabled" description="This input is disabled"/>
        </fieldset>
    );
};
