import React from "react";
import Button from "./Button";

import { mount, render, shallow } from "enzyme";

describe("Button", () => {

    test("renders properly into dom with color and label", () => {
        const func = (e: React.MouseEvent<any>) => {
            return "aasd";
        };

        const component = shallow(<Button text="asd" onClick={func}/>);

        expect(component.find("button").text()).toBe("asd");
    });
});
