import '../../lib/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button} from '../index';

export default (props: any) => {

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return (
        <div>
            <Button text="Button1" onClick={onClick}/>
            <Button text="Button2"  onClick={onClick} disabled inverseStyle/>
        </div>
    );
};
