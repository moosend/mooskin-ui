import '../../lib/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {IInputCallbackData} from '../types/commonTypes';

import {Button} from '../index';
import {Option, Select} from '../index';

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
            <fieldset style={{display: 'inline-block', width: 400}}>
                <legend>Select Element</legend>
                <Select onChange={onChange} selected="option" dataLabel="plan" label="Some label">
                    <Option value="option1">Option1</Option>
                    <Option value="option2">Option2</Option>
                    <Option value="option3">Option3</Option>
                    <Option value="option4">Option4</Option>
                    <Option value="option5">Option5</Option>
                </Select>
            </fieldset>
        </div>
    );
};
