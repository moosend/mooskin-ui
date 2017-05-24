import '../../lib/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button, Input} from '../index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
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
            <fieldset style={{display: 'inline-block'}}>
                <legend>Input Element</legend>
                <Input type="text"/>
                <Input disabled value="disabled"/>
                <Input placeholder="With placeholder"></Input>
                <Input size="79" value="with changed size attribute"></Input>
            </fieldset>
        </div>
    );
};
