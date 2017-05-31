import * as React from 'react';

import {Button} from '../../../index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return(
        <fieldset style={{display: 'inline-block'}}>
            <legend>Button Element</legend>
            <Button onClick={onClick}>Button</Button>
            <Button onClick={onClick} disabled>Button</Button>
            <Button onClick={onClick} inverseStyle>Button</Button>
            <Button onClick={onClick} inverseStyle disabled>Button</Button>
        </fieldset>
    );
};
