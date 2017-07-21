import * as React from 'react';

import {Button, Fieldset} from '../../components/index/index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return(
        <Fieldset legend="Button Element" style={{display: 'inline-block'}}>
            <Button onClick={onClick}>Button</Button>
            <Button onClick={onClick} disabled>Button</Button>
            <Button onClick={onClick} inverseStyle>Button</Button>
            <Button onClick={onClick} inverseStyle disabled>Button</Button>
        </Fieldset>
    );
};
