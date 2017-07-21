import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {Fieldset, Input} from '../../components/index/index';

export default (props: any) => {

    const onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <Fieldset legend="Input Element" style={{display: 'inline-block'}}>
            <Input onChange={onChange} type="text" maxlength={5} placeholder="max length 5" label="Some label:"/>
            <br/>
            <Input
                onChange={onChange}
                value="password"
                type="password"
                label="Password:"
                spacing={28}
                description="This has autofocus on page load"
                autofocus
            />
            <br/>
            <Input onChange={onChange} placeholder="placeholder" className=".input-field" autocomplete/>
            <br/>
            <Input onChange={onChange} disabled value="disabled" description="This input is disabled"/>
        </Fieldset>
    );
};
