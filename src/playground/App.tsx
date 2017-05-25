import '../../lib/style.css';

import * as React from 'react';

import {IInputCallbackData} from '../types/commonTypes';

import {Button, Input, Option, Select} from '../index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    const onChange = (e: React.MouseEvent<HTMLSelectElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    return (
        <div>
            <fieldset style={{display: 'inline-block'}}>
                <legend>Button Element</legend>
                <Button onClick={onClick}>Button</Button>
                <Button onClick={onClick} disabled>Button</Button>
                <Button onClick={onClick} inverseStyle>Button</Button>
                <Button onClick={onClick} inverseStyle disabled>Button</Button>
            </fieldset>
            <br/><br/>
            <fieldset style={{display: 'inline-block'}}>
                <legend>Input Element</legend>
                <Input onChange={onChange} type="text" maxlength="5" placeholder="max length 5"/>
                <Input onChange={onChange} disabled value="disabled"/>
                <Input onChange={onChange} placeholder="With placeholder" id="3rd"></Input>
                <Input onChange={onChange} size="79" value="with changed size attribute" className=".input-field"></Input>
            </fieldset>
            <br/><br/>
            <fieldset style={{display: 'inline-block', width: 400}}>
                <legend>Select Element</legend>
                <Select onChange={onChange} dataLabel="plan" label="Some label" selected="option3">
                    <Option value="option1">Option1</Option>
                    <Option value="option2">Option2</Option>
                    <Option value="option3">Option3</Option>
                    <Option value="option4">Option4</Option>
                    <Option value="option5">Option5</Option>
                </Select>
                <br/>
                <Select onChange={onChange} selected="option" dataLabel="plan" >
                    <Option value="option1">Option1</Option>
                </Select>
            </fieldset>
        </div>
    );
};
