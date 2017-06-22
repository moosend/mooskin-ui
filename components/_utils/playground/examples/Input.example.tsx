import * as React from 'react';

import {IInputCallbackData} from '../../types/commonTypes';

import {Input} from '../../../index/index';

export default (props: any) => {

    const onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>Input Element</legend>
            <Input onChange={onChange} type="text" maxlength={5} placeholder="max length 5"/>
            <Input onChange={onChange} disabled value="disabled"/>
            <Input onChange={onChange} placeholder="With placeholder" id="3rd"/>
            <Input onChange={onChange} value="with changed size attribute" className=".input-field"/>
        </fieldset>
    );
};
