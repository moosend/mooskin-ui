import * as React from 'react';

import {IInputCallbackData} from '../types/commonTypes';

import {Button, H1, H2, H3, H4, H5, H6, Input, Option, Select} from '../../../lib/index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    const onChangeClick = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(e.target);
    };

    const onChange = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
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
                <Input onChange={onChange} placeholder="With placeholder" id="3rd"/>
                <Input onChange={onChange} value="with changed size attribute" className=".input-field"/>
            </fieldset>
            <br/><br/>
            <fieldset style={{display: 'inline-block', width: 400}}>
                <legend>Select Element</legend>
                <Select onChange={onChangeClick} dataLabel="plan" label="Some label" selected="option3">
                    <Option value="option1">Option1</Option>
                    <Option value="option2">Option2</Option>
                    <Option value="option3">Option3</Option>
                    <Option value="option4">Option4</Option>
                    <Option value="option5">Option5</Option>
                    <Option value="option5">Option5</Option>

                </Select>
                <br/>
                <Select onChange={onClick} selected="option" dataLabel="plan" >
                    <Option value="option1">Option1</Option>
                </Select>
            </fieldset>
            <br/><br/>
            <fieldset style={{display: 'inline-block'}}>
                <legend>Headers</legend>
                <H1 id="5">Your Campaigns</H1>
                <H2>Moooo!</H2>
                <H3 style={{color: 'blue'}}>Moooo!</H3>
                <H4>Moooo!</H4>
                <H5>Moooo!</H5>
                <H6>Moooo!</H6>
            </fieldset>
        </div>
    );
};
