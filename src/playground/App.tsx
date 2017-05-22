import "../../lib/style.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import {Button} from "../index";

export default (props: any) => {
    return (
        <div>
            <Button label="Button1"/>
            <Button label="Button2" disabled inverseStyle/>
        </div>
    );
};
