import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {TextArea} from '../../components/index/index';

export default (props: any) => {

    const onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>TextArea Element</legend>
            <TextArea onChange={onChange} value="with value and custom rows/cols" label="Label:" rows={7} cols={35}/>
            <hr/>
            <TextArea onChange={onChange} disabled value="disabled" description="This text area is disabled"/>
        </fieldset>
    );
};
