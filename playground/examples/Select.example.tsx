import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {Option, Select} from '../../components/index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    const onChangeClick = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <fieldset style={{display: 'inline-block', width: 400}}>
            <legend>Select Element</legend>
            <Select onChange={onChangeClick} dataLabel="plan" label="Some label" selected="option3">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
                <Option value="option4">Option4</Option>
                <Option value="option5">Option5</Option>
            </Select>
            <br/>
            <Select onChange={onClick} selected="option" dataLabel="plan" description="Select description goes here">
                <Option value="option1">Option1</Option>
            </Select>
        </fieldset>
    );
};
